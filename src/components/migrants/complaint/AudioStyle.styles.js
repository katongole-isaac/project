import { makeStyles } from "@mui/styles";

const useAudioStyles = makeStyles({
  audioBtn: {
    "&:hover": {
      backgroundColor: "none",
    },
    color: "white",
  },
  turnOnBox: {
    width: "700px",
    height: "500px",
    backgroundColor: "#FAFAFA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  audioContentBox: {
    backgroundColor: "#FAFAFA",
    position: "relative",
    width: "700px",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  },
  button: {
    color: "white",
  },
  circleButton: {
    width: "60px",
    height: "60px",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "palevioletred",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "linear-gradient(purple, palevioletred)",
  },
  iconButtonCtrls: {
    fontSize: "40px",
    width: "100%",
    height: "100%",
    color: "white",
  },
  stackBtns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
  stackNote: {
    justifySelf: "start",
    alignSelf: "flex-start",
    color: "white",
    padding: 0.5,
    position: "absolute",
    top: -1,
  },
});
export default useAudioStyles;
