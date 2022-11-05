import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { fontWeight } from "@mui/system";

const useMyCompStyles = makeStyles((theme) => {
  let color = " ";
  return {
    card: {
      minHeight: "150px",
    },
    Box: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
    boxInsideCard: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 5,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: -8,
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding: 3,
      },
    },
    audioBox: {
      display: "flex",
      padding: 5,
      justifyContent: "space-around",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        padding: 2,
      },
    },
    videoBox: {
      flexBasis: "500px",
      padding: 5,
      marginTop: 20,
      marginLeft: 10,
      [theme.breakpoints.down("md")]: {
        height: "auto",
        flexBasis: "auto",
      },
    },
    videoNote: {
      // margin: 5,
      padding: 2,
      flexBasis: "30%",
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
    },
    complaintLinks: {
      textDecoration: "underline",
      cursor: "pointer",
      color: blue[800],
    },
  };
});

export default useMyCompStyles;
