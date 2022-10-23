import { styled } from "@mui/styles";

const SubmitButton = styled("div")({
  width: "40px",
  height: "40px",
  backgroundColor: "palevioletred",
  display: "flex",
  borderRadius: "10px",
  alignItems: "center",
  justifyContent: "center",
  "&: hover": {
    opacity: "0.8",
  },
});

export default SubmitButton;
