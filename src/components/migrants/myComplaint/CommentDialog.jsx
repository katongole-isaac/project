import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import Comments from "./commentsDisplay";
const CommentDialog = ({ _id, open, setOpen, reason }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        sx={(theme) => ({
          minWidth: "500px",
          [theme.breakpoints.down("md")]: {
            margin: 0,
            display: "block",
            padding: 0,
            position: "absolute",
            left: -1,
          },
        })}
      >
        <Box sx={{ width: "100%" }}>
          <DialogTitle>
            <Typography variant="body1"> Comments for {reason}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Comments _id={_id} />
            </DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};

export default CommentDialog;
