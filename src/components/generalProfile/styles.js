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
      width: "150px",
      height: "150px",
      position: "relative",
      margin: 2,
      position: "relative",
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
      margin: '10px',
    },
  };
});
export default useGenStyles;
