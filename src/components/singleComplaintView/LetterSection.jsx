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
import { Box } from "@mui/material";
import LetterPDFView from "./LetterPDFView";
import { BlobProvider, pdf, PDFDownloadLink } from "@react-pdf/renderer";
import LetterPDF from "./LetterPDF";
import { async } from "videojs-record";
import { useState } from "react";

export default function LetterSection({ open, setOpen }) {
  const [doc, setDoc] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {};

  const { user, res } = useContext(SingleComplaintContext);
  const getPDF = async () => {
    const pdfBlob = pdf(<LetterPDF user={user} res={res} />).toBlob();
    const data = await pdfBlob;
    setDoc(data);
    console.log(doc)
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

            <Box sx={{ "& a": { textDecoration: "none", color: "#ffF" } }}>
              <PDFDownloadLink document={<LetterPDF user={user} res={res} />}>
                <Button autoFocus color="inherit">
                  Download
                </Button>
              </PDFDownloadLink>
            </Box>
            <Button autoFocus color="inherit" onClick={getPDF}>
              send
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: "100%", height: "100vh", border: "1px solid red" }}>
          <LetterPDFView />
        </Box>
      </Dialog>
    </>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
