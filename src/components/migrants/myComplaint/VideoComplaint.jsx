import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import MyChip from "../../MyChip";
import AudioPlayer from "react-h5-audio-player";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import myCompStyles from "./styles";
import { Stack } from "@mui/system";
import VideoPlayer from "./VideoPlayer";

const VideoComplaint = () => {
  const classes = myCompStyles();
  return (
    <>
      <Divider> Today </Divider>

      <Card sx={{ borderRadius: "20px", padding: 1 }}>
        <Box className={classes.card}>
          <Box className={classes.boxInsideCard}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              complaint Reason
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              complaint Date
            </Typography>
          </Box>

          <CardMedia>
            <Box className={classes.Box}>
              <Box className={classes.videoBox}>
                <VideoPlayer />
              </Box>
              <Box className={classes.videoNote}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati officia nostrum, minus pariatur eos iste, laborum
                  consequatur quos possimus, molestias eum atque. Ullam ut
                  repudiandae architecto facilis impedit suscipit commodi sunt
                  harum dignissimos nulla distinctio pariatur provident a,
                  voluptas autem!
                </Typography>
              </Box>
            </Box>
          </CardMedia>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <MyChip color={"warning"} label="pending" />
              <Stack direction="row" spacing={1}>
                <ChatBubbleOutlineIcon fontSize="small" />
                <Typography variant="body2"> 2</Typography>
              </Stack>
            </Stack>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default VideoComplaint;
