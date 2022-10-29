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
import useMyCompStyles from "./styles";
import { Stack } from "@mui/system";
import VideoPlayer from "./VideoPlayer";

const VideoComplaint = ({ complaints }) => {
  return (
    <>
      {/* <Divider> Today </Divider> */}

      {complaints.map((complaint) => {
        if (complaint.videoUrl)
          return <VideoCard key={complaint._id} {...complaint} />;
      })}
    </>
  );
};

export default VideoComplaint;
const VideoCard = ({ _id, reason, sent, status, videoUrl }) => {
  const classes = useMyCompStyles();

  return (
    <>
      <Card sx={{ borderRadius: "20px", padding: 1 }}>
        <Box className={classes.card}>
          <Box className={classes.boxInsideCard}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography> ID: {_id}</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {reason}
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              SentOn: {new Date(parseInt(sent)).toDateString()}
            </Typography>
          </Box>

          <CardMedia>
            <Box className={classes.Box}>
              <Box className={classes.videoBox}>
                <VideoPlayer videoUrl={videoUrl} />
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
              <MyChip color={"warning"} label={status} />
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
