import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useDesktopStyles = makeStyles((theme) => ({
  complaintList: {
    flexBasis: "40%",
    height: "auto",
    // border: "2px solid purple",
    display: "flex",
    flexDirection: "column",
    flexShrink: 1,
    scrollbarWidth: "thin",
    position: "relative",
  },
  complaintListInnerBox: {
    overflow: "scroll",
    overflowX: "hidden",
    padding: 0.9,
  },
  singleComplaint: {
    flexGrow: 1,
    flexBasis: "60%",
    // border: "2px solid purple",
    // overflow: "scroll",
    overflowX: "hidden",
  },

  desktopContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "100%",
  },
  desktopUpperBox: {
    width: "100%",
    flexShrink: 2,
    overflowX: "hidden",
    // height: "content",
    p: 1,
  },
  desktopLowerBox: {
    flexGrow: 1,
  },
  listReasonText: {
    "&: hover": {
      textDecoration: "underline",
      color: blue[800],
      cursor: "pointer",
    },
  },
}));
