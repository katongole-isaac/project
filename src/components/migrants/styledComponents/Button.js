import { styled } from "@mui/system";
import { Button } from "@mui/material";
const StyledButton = styled("button")({
  backgroundColor: "palevioletred",
  color: "white",
  borderRadius: "10px",
  border: "none",
  fontSize: "20px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "white",
    opacity: 0.9,
    position: "relative",
  },
  margin: 2,
  padding: 2
});

export default StyledButton;
