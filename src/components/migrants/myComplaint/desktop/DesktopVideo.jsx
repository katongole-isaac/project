import { Box } from "@mui/material";
import VideoPlayer from "../VideoPlayer";

const DesktopVideo = ({ videoUrl }) => {
  return (
    <>
      <Box sx={{ p: 0.6 }}>
        <VideoPlayer videoUrl={videoUrl} />
      </Box>
    </>
  );
};
export default DesktopVideo;
