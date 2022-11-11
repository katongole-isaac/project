import { Box, Typography } from "@mui/material";

const AUDIO_URL = `http://localhost:3001/api/uploads/audio/`;

const DesktopAudio = ({ audioUrl }) => {
  return (
    <>
      <Box sx={{ p: 1, height: "40%" }}>
        <Typography className="text-muted" variant="body2">
          Audio complaint
        </Typography>
        <audio
          controls
          src={`${AUDIO_URL}${audioUrl.replace("uploads/", "")}`}
        ></audio>
      </Box>
    </>
  );
};

export default DesktopAudio;
