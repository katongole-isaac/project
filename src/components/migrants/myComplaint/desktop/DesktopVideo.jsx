import { Box } from "@mui/material";
import VideoPlayer from "../VideoPlayer";

const DesktopVideo = ({ videoUrl }) => {
  return (
    <>
      <Box sx={{ p: 0.6, width: "100%", display: "flex" }}>
        <Box sx={{ flexBasis: "80%", width: "100%", pl: 4 }}>
          <VideoPlayer videoUrl={videoUrl} height="100px" width={"100%"} />
        </Box>
      </Box>
    </>
  );
};
export default DesktopVideo;
