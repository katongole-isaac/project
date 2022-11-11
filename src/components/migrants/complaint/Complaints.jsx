import { Masonry } from "@mui/lab";
import { Box, Typography, Button, Grid, Container, Alert } from "@mui/material";
import { useState } from "react";
import useMigrantComplaintStyles from "./migrantComplaints.styles";
import TabSelect from "./TabSelect";
import { useContext } from "react";
import SendIcon from "@mui/icons-material/Send";

import TextReason from "./TextReason";
import SuccessNotify from "../../notify/successNotify";
import authFetch from "../../../authFetch";
import { UserState } from "../../../userContext";
import { useEffect } from "react";

const checkDescription = (desc) => {
  const wordLimit = 15;
  if (desc === null) return "";
  if (desc && desc.length < wordLimit) return "";

  return desc;
};

const MigrantComplaints = () => {
  const { user } = useContext(UserState);
  const classes = useMigrantComplaintStyles();
  const [complaintDesc, setComplaintDesc] = useState("");
  const [audio, setAudio] = useState(null);
  const [video, setVideo] = useState(null);
  const [reason, setReason] = useState("");
  const [reasonErr, setReasonErr] = useState(false);
  const [turnOnAudio, setTurnOnAudio] = useState(true);
  const [toggleCameraSpace, setToggleCameraSpace] = useState(true);
  const [onPressStop, setOnPressStop] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [onError, setOnError] = useState(false);
  const [compDescError, setCompDescError] = useState(false);
  const [alert, setAlert] = useState(false);

  const closeAlert = () => setAlert((prev) => false);
  useEffect(() => {
    const timeId = setTimeout(() => {
      closeAlert();
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };

  }, [alert]);

  const handleSubmit = async () => {
    const fd = new FormData();
    const fullname = `${user.firstname} ${user.lastname}`;

    if (!reason || reason.length < 5 || !reason.match(/^[A-Za-z\s.]+$/)) {
      setReasonErr(true);
      return;
    }

    // if() return

    const desc = checkDescription(complaintDesc);

    if (desc !== "") fd.append("desc", desc);
    else setCompDescError(true);

    if (video) fd.append("video", video);
    if (audio) fd.append("audio", audio);

    fd.append("email", user.email);
    fd.append("fullname", fullname);
    fd.append("reason", reason);
    fd.append("id", user.user);
    fd.append("agency", user.myAgency.name);

    if (!video && !audio && !desc) {
      setAlert(true);
      return;
    }

    try {
      const resp = await authFetch.post("/complaints", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (resp.status >= 200 && resp.status <= 299) {
        setOnSuccess(true); // for notify
        setTimeout(() => {
          setAudio(null);
          setVideo(null);
          console.log(resp);
          setToggleCameraSpace(true);
          setTurnOnAudio(true);
          setComplaintDesc("");
          setOnSuccess(true);
        }, 3000);
      }
    } catch (ex) {
      setOnError(true); // for notify
      console.log(ex);
    }
  };

  const labels = ["Video", "Audio", "Text"];

  return (
    <>
      {alert && (
        <>
          <Alert severity="error">
            <Typography varaint="body2">
              You must atleast compose a complaint either using audio , video ,
              text
            </Typography>
          </Alert>
        </>
      )}
      <SuccessNotify
        success={onSuccess}
        setOnSuccess={setOnSuccess}
        setOnError={setOnError}
        onError={onError}
      />
      <Box className={classes.complaintDash}>
        <Container sx={{ height: "92vh", backgroundColor: "#f8f9fa" }}>
          <SelectMode />
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={10} md={8}>
              <TextReason
                reason={reason}
                setReason={setReason}
                reasonErr={reasonErr}
                setReasonErr={setReasonErr}
              />
            </Grid>
          </Grid>

          <Masonry
            columns={{ xs: 1, sm: 1, md: 1, lg: 1 }}
            sx={{
              display: "flex",
              padding: 4,
              // height: "65%",
              m: 1,
            }}
          >
            <TabSelect
              labels={labels}
              complaintDesc={complaintDesc}
              setComplaintDesc={setComplaintDesc}
              setAudio={setAudio}
              setVideo={setVideo}
              compDescError={compDescError}
              setCompDescError={setCompDescError}
              onPressStop={onPressStop}
              setOnPressStop={setOnPressStop}
              toggleCameraSpace={toggleCameraSpace}
              setToggleCameraSpace={setToggleCameraSpace}
              turnOnAudio={turnOnAudio}
              setTurnOnAudio={setTurnOnAudio}
            />
          </Masonry>

          <Grid container justifyContent="center" sx={{}}>
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              justifySelf="center"
              sx={{
                position: "relative",
                m: 1,
                mt: 2,
                p: 1,
              }}
            >
              <Button
                onClick={handleSubmit}
                endIcon={<SendIcon />}
                variant="contained"
                // disabled={!audio || !video || !complaintDesc}
                sx={{
                  textAlign: "center",
                  position: "relative",
                  left: "50%",
                  backgroundColor: "palevioletred",
                  // color: "white",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "palevioletred",
                    opacity: "0.8 ",
                  },
                }}
              >
                submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MigrantComplaints;

const SelectMode = () => {
  return (
    <>
      <Typography variant="h4" textAlign={"center"} padding={1}>
        Complaint Form
      </Typography>
    </>
  );
};
