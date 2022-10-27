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

const AudioComplaint = () => {
  const classes = useMyCompStyles();
  return (
    <>
      <Divider> Today </Divider>

      <Card>
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
            <Box className={classes.audioBox}>
              <Box sx={{ m: 1, flexBasis: "55%" }}>
                <AudioPlayer
                  autoPlay
                  src="http://example.com/audio.mp3"
                  onPlay={(e) => console.log("onPlay")}
                />
              </Box>
              <Typography sx={{ ml: 2, mr: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nam molestiae porro quis suscipit veniam dicta dolorem
                impedit dolor ipsum!
              </Typography>
            </Box>
          </CardMedia>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <MyChip color={"warning"} label="pending" />
              <ChatBubbleOutlineIcon fontSize="small" />
            </Stack>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default AudioComplaint;
