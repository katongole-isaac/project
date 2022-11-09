import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const MinistryLetterListNav = () => {
  return (
    <Box sx={{ display: "flex", p: 1 }}>
      <Link to="/ministry/dashboard/complaint/">
        <Stack direction="row" spacing={1}>
          <KeyboardBackspaceIcon />
          <Typography> Back</Typography>
        </Stack>
      </Link>
    </Box>
  );
};

export default MinistryLetterListNav;
