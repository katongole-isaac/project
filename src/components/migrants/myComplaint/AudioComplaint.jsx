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

const AUDIO_URL = `http://localhost:3001/api/uploads/audio/`;

const AudioComplaint = ({ complaints }) => {
  return (
    <>
      <Divider> Today </Divider>
      {complaints.map((complaint) => {
        if (complaint.audioUrl)
          return <AudioCard key={complaint._id} {...complaint} />;
      })}
    </>
  );
};

export default AudioComplaint;
const AudioCard = ({ _id, reason, sent, audioUrl, status }) => {
  const classes = useMyCompStyles();

  return (
    <>
      <Card>
        <Box className={classes.card}>
          <Box className={classes.boxInsideCard}>
            <Stack direction="row" alignItems={"center"} spacing={2}>
              <Typography>ID: {_id} </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {reason}
              </Typography>
            </Stack>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {new Date(parseInt(sent)).toDateString()}
            </Typography>
          </Box>

          <CardMedia>
            <Box className={classes.audioBox}>
              <Typography sx={{ ml: 2, mr: 1, flexBasis: "40%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nam molestiae porro quis suscipit veniam dicta dolorem
                impedit dolor ipsum!
              </Typography>
              <Box sx={{ m: 1, flexGrow: 1 }}>
                <AudioPlayer
                  autoPlay
                  src={`${AUDIO_URL}${audioUrl.replace("uploads/", "")}`}
                  onPlay={(e) => console.log("onPlay")}
                />
              </Box>
            </Box>
          </CardMedia>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <MyChip color={"warning"} label={status} />
              <ChatBubbleOutlineIcon fontSize="small" />
            </Stack>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
