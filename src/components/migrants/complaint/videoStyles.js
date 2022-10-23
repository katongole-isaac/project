import { makeStyles } from "@mui/styles";

const useStyles_ = makeStyles({
  circularBtn: {
    display: "inline-flex",
    width: "80px",
    height: "80px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "coral",
    borderRadius: "50%",
    cursor: "pointer",
    outlineStyle: "solid",
    outlineColor: "lightgray",
    outlineWidth: "4px",
    transition: "background 0.2s",
    "&: hover": {
      backgroundColor: "purple",
    },
    position: "relative",
  },

  videoContainer: {
    display: "flex",
    position: "relative",
    height: "auto",
    width: "650px",
    alignItems: "center",
  },
  videoContent: {
    position: "absolute",
    bottom: "5%",
    right: "35%",
  },

  circularDot: {
    width: "10px",
    height: "10px",
    backgroundColor: "red",
    borderRadius: "50%",
  },
  recordCount: {
    position: "absolute",
    top: "1em",
    right: "1em",
  },

  turnButtons: {
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "white",
      opacity: 0.9,
      position: "relative",
    },
  },
  Box: {
    width: "700px",
    height: "500px",
    backgroundColor: "#FAFAFA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 4,
    display: "flex",
    backgroundColor: "pink",
    justifyContent: "center",
    padding: "5px",
  },
});

export default useStyles_;
