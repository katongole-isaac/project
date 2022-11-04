import { makeStyles } from "@mui/styles";

const drawerWidth = 240;
const containerMarginTop = 65;
const useMinistryStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      border: "1px solid red",
      height: "calc(100% - 64px)",
      top: 64,
    },
    paperDrawer: {
      width: drawerWidth,
      backgroundColor: "pink", //#212529
      height: "calc(100% - 64px)",
      top: 64,
    },
    bar: {
      // maxWidth: `calc(100% - ${drawerWidth}px)`,
    },
    link: {
      width: "100%",
      textDecoration: "none",
      color: "black",
      "&:hover": {
        color: "lightblue",
      },
    },
    outlet: {
      width: "100%",
      padding: "0 5px",
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      marginTop: containerMarginTop,
    },
    createUserContainer: {
      backgroundColor: "#f8f9fa",
      marginBottom: 0,
      height: "92vh",
    },
    dataGrid: {
      display: "flex",
      width: "100%",
    },
    accountsPage: {
      backgroundColor: "",
    },
    activeLink: {
      backgroundColor: "#669bbc",
    },
    listItem: {
      "& a": {
        textDecoration: "none",
      },
    },
    ministryCardSection: {
      display: "flex",
      width: "100%",
      // height: "calc(100vh - 64px)",
      padding: 1,
      margin: "auto",
      border: "1px solid red",
    },
    ministryStatBox: {
      minHeight: `calc(100vh - 24px)`,
      height: "92vh",
      width: "100%",
    },
    titleSectionText: {
      color: "#0d1b2a",
    },
  };
});

export { useMinistryStyles };
