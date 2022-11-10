import { Box, Typography } from "@mui/material";

const DesktopText = ({ desc }) => {
  return (
    <>
      <Box
        sx={{
          p: 1,
        }}
      >
        <Typography>{desc}</Typography>
      </Box>
    </>
  );
};
export default DesktopText;
