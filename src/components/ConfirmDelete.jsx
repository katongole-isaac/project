import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Stack } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useEffect } from "react";

export default function ConfirmDelete({
  open,
  setOpen,
  onDialog,
  setConfirmDel,
}) {
  const handleClose = () => {
    setConfirmDel(true);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} onBackdropClick="false">
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"center"}
          sx={{ width: "400px" }}
        >
          <Stack spacing={2}>
            <DialogContent sx={{ display: "flex", justifyContent: " center" }}>
              <ErrorOutlineIcon sx={{ fontSize: "5em", color: red[700] }} />
            </DialogContent>
            <Stack>
              <DialogTitle sx={{ fontSize: "2em" }}>
                {"Are You Sure?"}
              </DialogTitle>
              <DialogContentText sx={{ position: "relative", top: -4 }}>
                You wont be able to revert this action
              </DialogContentText>
            </Stack>
          </Stack>
        </Box>
        <DialogActions sx={{ m: 1 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: green[500],
              "&:hover": {
                cursor: "pointer",
                backgroundColor: green[500],
                opacity: 0.9,
              },
            }}
            autoFocus
            onClick={() => onDialog(false)}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => onDialog(true)}
            sx={{
              backgroundColor: red[800],
              "&:hover": {
                cursor: "pointer",
                backgroundColor: red[800],
                opacity: 0.9,
              },
            }}
            autoFocus
          >
            confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
