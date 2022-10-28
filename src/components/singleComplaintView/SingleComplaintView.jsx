import {
  Container,
  Box,
  Button,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Stack } from "@mui/system";
import { makeStyles } from "@mui/styles";
import useFetch from "../../useFetch";
import Loading from "../Loading";
import PageError from "../PageError";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Editor from "../Editor";
import { Masonry } from "@mui/lab";
import ReactHtmlParser from "react-html-parser";
import ComplaintHeader from "./complaintHeader";
import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import ComplaintTitleSection from "./ComplaintTitleSection";
import ComplaintBioInfo from "./ComplaintBioInfo";
import VideoComplaintView from "./VideoComplaintView";
import AudioComplaintView from "./AudioComplaintView";
import TextComplaintView from "./TextComplaintView";
import StyledMuiButon from "../Styled/StyledMuiButton";
import LetterSection from "./LetterSection";
import { UserState } from "../../userContext";

const noContentMsg = "No content available";
const SingleComplaintContext = React.createContext();

const useTestingView = makeStyles({
  bioNav: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0px 5px",
  },
  complaintTitle: {
    margin: 10,
  },
});

const COMPLAINT_URL = `/complaints/views/`;

const SingleComplaintView = ({ audioUrl, videoUrl, desc }) => {
  const { user } = useContext(UserState);

  const { complaintId } = useParams();
  const [pageErrorMsg, setPageErrorMsg] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const { isLoading, errorDetails, results, error } = useFetch(
    `${COMPLAINT_URL}${complaintId}`
  );
  const [showEditor, setShowEditor] = useState(false);
  const handleClick = () => {
    setShowEditor((prev) => !prev);
  };

  const [letter, setLetter] = useState("");

  const classes = useTestingView();

  useEffect(() => {
    if (errorDetails.code === "ERR_BAD_REQUEST") {
      setPageErrorMsg(errorDetails.response.data.error);
    } else if (errorDetails.code === "ERR_NETWORK") {
      setPageErrorMsg(errorDetails.message);
    }
  }, [errorDetails]);

  let load = true;
  if (isLoading) return <Loading />;

  if (Object.keys(errorDetails).length !== 0)
    return <PageError msg={pageErrorMsg} path="../" />;

  const { res, profilePic } = results;

  return (
    <>
      <SingleComplaintContext.Provider
        value={{ res, classes, profilePic, user }}
      >
        <Container sx={{ height: "100%" }}>
          <Box>
            <LetterSection open={openDialog} setOpen={setOpenDialog} />
            <ComplaintHeader />
            <ComplaintTitleSection />
            <ComplaintBioInfo />
            <VideoComplaintView />
            <AudioComplaintView />
            <TextComplaintView />
            <div>
              <Stack spacing={2} direction="row" sx={{ m: 1 }}>
                <Button
                  startIcon={<ReplyIcon />}
                  onClick={handleClick}
                  variant="outlined"
                  sx={{}}
                >
                  Reply
                </Button>

                {/* <StyledMuiButon color="#fff" backgroundColor="palevioletred">
                  Transcribe
                </StyledMuiButon> */}

                <Button
                  startIcon={<ShortcutIcon />}
                  variant="outlined"
                  onClick={() => setOpenDialog(true)}
                >
                  Forward
                </Button>
              </Stack>
            </div>
          </Box>
        </Container>
      </SingleComplaintContext.Provider>
    </>
  );
};

export { SingleComplaintView, SingleComplaintContext };

const GridElem = ({ children, editor }) => {
  return (
    <Grid
      item
      sm={12}
      md={editor ? 12 : 12}
      flexGrow={1}
      padding={1}
      spacing={1}
      sx={{ height: "max-content" }}
    >
      {children}
    </Grid>
  );
};

const EditorComp = ({ setLetter, letter }) => {
  return (
    <>
      <Masonry columns={2} spacing={2}>
        <div>
          <Editor setLetter={setLetter} />
          <Divider orientation="vertical" />
        </div>
        <div>
          <Divider />
          <Typography variant="h6" align="center">
            Preview
          </Typography>
          <div>{ReactHtmlParser(letter)}</div>
          <Divider />
        </div>
      </Masonry>
    </>
  );
};
