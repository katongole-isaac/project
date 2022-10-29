import { Tooltip } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTooltip = styled(Tooltip, {
  shouldForwardProp: ({ title: t, placement: p }) => true,
})((props) => ({
  [props.title]: props.t,
  [props.placement]: props.p,
  [props.arrow]: true,
}));
