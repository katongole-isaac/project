import { makeStyles } from "@mui/styles";

const useGenStyles = makeStyles((theme) => {
  return {
    proHeaderBox: {
      height: "100%",
      maxHeight: "90vh",
      marginTop: "20px",
      padding: 5,
    },
    avatarBox: {
      maxWidth: "70%",
      position: "relative",
      margin: "auto",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {},
    },
    formDiv: {
      display: "flex",
      justifyItems: "space-between",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    formWrapperBox: {
      padding: 10,
      margin: "10px",
    },
    fileInput: {
      zIndex: 1,
      opacity: 0,
      width: "100%",
      cursor: "pointer",
    },
  };
});
export default useGenStyles;
