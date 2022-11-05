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
import { colorsForComplaintStatus } from "../../../utils/colorsForComplaintStatus";
import CommentDialog from "./CommentDialog";
import { useState } from "react";

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
      <Card sx={{ borderRadius: "20px", padding: 1, m: 1 }}>
        <Box className={classes.card}>
          <Box className={classes.boxInsideCard}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {reason}
              </Typography>
            </Stack>
            <Typography variant="body2">
              {new Date(parseInt(sent)).toDateString()}
            </Typography>
          </Box>

          <CardMedia>
            <Box className={classes.Box}>
              <Box className={classes.videoBox}>
                <VideoPlayer
                  videoUrl={videoUrl}
                  width="100%"
                  height={"300px"}
                />
              </Box>
            </Box>
          </CardMedia>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <MyChip color={color} label={status} />
              <Stack direction="row" spacing={1}>
                <a
                  onClick={() => setOpenDialog(true)}
                  className={classes.complaintLinks}
                >
                  comments{" "}
                </a>
              </Stack>
            </Stack>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
