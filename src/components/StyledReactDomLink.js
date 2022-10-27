import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledReactDomLink = styled(Link, { shouldForwardProp: () => true })({
  textDecoration: "none",
  color: "#fff",
  backgroundColor: "#023047",
  padding: 10,
  borderRadius: "10px",
  fontSize: "15px",
  "&:hover": {
    textDecoration: "none",
    opacity: 0.8,
    color: "white",
  },
});

export default StyledReactDomLink;
