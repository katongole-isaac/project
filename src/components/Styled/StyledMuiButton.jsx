import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledMuiButon = styled(Button)((props) => ({
  color: props.color,
  backgroundColor: props.backgroundColor,
}));

export default StyledMuiButon;
