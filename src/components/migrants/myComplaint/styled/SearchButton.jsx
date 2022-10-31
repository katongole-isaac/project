import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledSearchButton = styled(Button)((props) => ({
  textTransform: "lowercase",
  // backgroundColor: props.state ? "#ff595e" : "palevioletred",
  // fontWeight: 700,
  // color: "#fff",
  // borderRadius: "10px",
  // width: "100px",
  // border: "1px solid white",
  // "&:hover": {
  //   // backgroundColor: "palevioletred",
  //   color: "#fff",
  //   border: "none",
  //   cursor: 'pointer',
  //   opacity: 0.8,
  // },
}));

export default StyledSearchButton;
// #ff595e
