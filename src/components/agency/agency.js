import { makeStyles } from "@mui/styles";

const drawerWidth = 240;
const containerMarginTop = 65;
const useAgencyStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  page: {
    display: "flex",
  },
  toolbar: {
    marginTop: containerMarginTop,
  },
  accounts_table: {
    display: "flex",
    width: "100%",
  },
  dataGrid: {
    flexGrow: 1,
  },
  pageContent: {
    width: `calc(100vw - ${drawerWidth}px)`,
  },
  listItem: {
    "& a": {
      textDecoration: "none",
    },
    width: "100%",
    marginBottom: 5,
    "&:hover": {
      backgroundColor: "#6096ba",
    },
  },
  sideInnerLinks: {
    width: "100%",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "white",
    },
  },
  activeLink: {
    backgroundColor: "#6096ba",
  },
  profileCardBox: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});

export default useAgencyStyles;
