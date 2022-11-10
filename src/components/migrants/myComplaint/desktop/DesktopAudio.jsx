import { Box, Typography } from "@mui/material";

const DesktopAudio = ({ audioUrl }) => {
  return (
    <>
      <Box sx={{ p: 1, height: "40%" }}>
        <Typography className="text-muted" variant="body2">
          Audio complaint
        </Typography>
        <audio controls src={audioUrl}></audio>
      </Box>
    </>
  );
};

export default DesktopAudio;
