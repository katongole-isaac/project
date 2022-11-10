import { Box, Stack, Typography } from "@mui/material";
import { colorsForComplaintStatus } from "../../../../utils/colorsForComplaintStatus";

const DesktopComplaintHeadSection = ({ reason, status, sent }) => {
  const date = new Date(parseInt(sent)).toLocaleDateString();
  const color = colorsForComplaintStatus(status);
  return (
    <>
      <Box sx={{ width: "100%", p: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6"> {reason} </Typography>
          </Box>
          <Box>
            <Stack direction="row" spacing={0.8}>
              <Typography sx={{ color }}> {status} </Typography>
              <Typography> {date} </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DesktopComplaintHeadSection;
