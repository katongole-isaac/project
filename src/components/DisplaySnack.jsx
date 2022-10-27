import { Alert, Slide, Snackbar } from "@mui/material";

const DisplaySnack = ({ showSnack, setShowSnack }) => {
  const handleClose = () => {
    setShowSnack(false);
  };
  return (
    <>
      <Snackbar
        open={showSnack}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
        >
          password updated successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default DisplaySnack;

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
