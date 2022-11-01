import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function SnackBarLetter({
  setOnLetterSend,
  onLetterSend,
  onLetterError,
}) {
  const handleClose = () => {
    setOnLetterSend(false);
  };

  return (
    <div>
      <ShowSnackbar handleClose={handleClose} onLetterSend={onLetterSend}>
        <Alert severity="success">letter sent successfully</Alert>
      </ShowSnackbar>
    </div>
  );
}

const ShowSnackbar = ({ children, handleClose, onLetterSend }) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={onLetterSend}
        onClose={handleClose}
      >
        {children}
      </Snackbar>
    </>
  );
};
