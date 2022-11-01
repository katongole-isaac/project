import { useContext } from "react";
import { SingleComplaintContext } from "./SingleComplaintView";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Grid } from "@mui/material";
import LetterPDFView from "./LetterPDFView";
import { BlobProvider, pdf, PDFDownloadLink } from "@react-pdf/renderer";
import LetterPDF from "./LetterPDF";
import { async } from "videojs-record";
import { useState } from "react";
import LetterEditor from "./LetterEditor";
import authFetch from "../../authFetch";
import { UserState } from "../../userContext";

const LETTER_UPLOAD = `/letter/post`;
const LETTER_WORDS_MIN_LIMIT = 100;
export default function LetterSection({
  open,
  setOpen,
  setOnLetterSend,
  setOnLetterError,
}) {
  const [doc, setDoc] = useState(null);
  const [letterText, setLetterText] = useState("");
  const { user, res } = useContext(SingleComplaintContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = async () => {
    const doc = await getPDF();
    const fd = new FormData();
    console.log(doc);
    fd.append("letter", doc, res.fullname); //fullname of the migrant
    fd.append("status", res.status); //complaint status
    fd.append("email", user.email); // agency email
    fd.append("id", res._id); //complaint Id
    try {
      const resp = await authFetch.post(LETTER_UPLOAD, fd);
      if (resp.status >= 200 && resp.status <= 299) {
        console.log(doc);
        setOnLetterSend(true); // showing snackbar
        setTimeout(() => {
          setOpen(false);
        }, 1500);
      }
    } catch (ex) {
      console.log(ex);
      setOnLetterError(true); // show snackbar on Error
    }
  };

  //Getting the details of the letter to be sent to the ministry
  const getPDF = async () => {
    const pdfBlob = pdf(
      <LetterPDF user={user} res={res} letterText={letterText} />
    ).toBlob();

    const data = await pdfBlob;
    // setDoc(data);
    return data;
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#00b4d8" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Compose letter for this Complaint
            </Typography>

            {letterText.length > LETTER_WORDS_MIN_LIMIT && (
              <>
                <Box sx={{ "& a": { textDecoration: "none", color: "#ffF" } }}>
                  <PDFDownloadLink
                    document={
                      <LetterPDF
                        user={user}
                        res={res}
                        letterText={letterText}
                      />
                    }
                  >
                    <Button autoFocus color="inherit">
                      Download
                    </Button>
                  </PDFDownloadLink>
                </Box>
                <Button autoFocus color="inherit" onClick={handleSend}>
                  send
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Grid
          container
          sx={{ width: "100%", border: "1px solid red" }}
          spacing={1}
        >
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Box sx={{ wdith: "100%" }}>
              <LetterEditor setLetterText={setLetterText} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <Box sx={{ wdith: "100%" }}>
              <LetterPDFView letterText={letterText} />
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
