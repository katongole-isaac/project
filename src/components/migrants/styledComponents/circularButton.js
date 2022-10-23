import { styled } from "@mui/system";

const CircularButton = styled("div")( props => ( {
  width: props.width || "60px",
  height: props.height || "60px",
  border: "none",
  borderRadius: "50%",
  backgroundColor: props.color || "palevioletred",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: props.background,
  "&: hover": {
    opacity: '0.8'
  }
}));

export default CircularButton;