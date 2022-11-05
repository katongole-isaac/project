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
import { colorsForComplaintStatus } from "../../../utils/colorsForComplaintStatus";
import CommentDialog from "./CommentDialog";
import { useState } from "react";

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
  const color = colorsForComplaintStatus(status);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <CommentDialog
        open={openDialog}
        setOpen={setOpenDialog}
        _id={_id}
        reason={reason}
      />
      <Card sx={{ mt: 1, mb: 1 }}>
        <Box className={classes.card}>
          <Box className={classes.boxInsideCard}>
            <Stack direction="row" alignItems={"center"} spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {reason}
              </Typography>
            </Stack>
            <Typography variant="body2">
              {new Date(parseInt(sent)).toDateString()}
            </Typography>
          </Box>

          <CardMedia>
            <Box className={classes.audioBox}>
              <Box sx={{ m: 1, flexGrow: 1 }}>
                {/* <AudioPlayer
                  src={`${AUDIO_URL}${audioUrl.replace("uploads/", "")}`}
                  onPlay={(e) => console.log("onPlay")}
                /> */}
                <audio
                  src={`${AUDIO_URL}${audioUrl.replace("uploads/", "")}`}
                  controls
                />
              </Box>
            </Box>
          </CardMedia>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <MyChip color={color} label={status} />
              <a
                onClick={() => setOpenDialog(true)}
                className={classes.complaintLinks}
              >
                comments
              </a>
            </Stack>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
