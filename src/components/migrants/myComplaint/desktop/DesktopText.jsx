import { Box, Typography } from "@mui/material";

const DesktopText = ({ desc }) => {
  return (
    <>
      <Box
        sx={{
          p: 4,
        }}
      >
        <Typography textAlign="justify">{desc}</Typography>
      </Box>
    </>
  );
};
export default DesktopText;
