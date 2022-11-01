import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const LoginLoading = ({ isLoading, setIsLoading }) => {
  const handleClose = () => {
    setIsLoading(false);
  };
  return (
    <>
      <Dialog
        // fullScreen
        onBackdropClick="false"
        onClose={handleClose}
        open={isLoading}
        sx={{ backgroundColor: "transparent" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DialogContent>
            <CircularProgress
              sx={{
                backgroundColor: "dodgerblue",
                border: "none",
                color: "dodgerblue",
              }}
            />
          </DialogContent>
          <DialogContent>
            <Typography> Please wait...</Typography>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};

export default LoginLoading;
