import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import { SingleComplaintContext } from "./SingleComplaintView";

const AUDIO_URL = `http://localhost:3001/api/uploads/audio/`;

export default function AudioComplaintView() {
  const { res, classses } = useContext(SingleComplaintContext);
  console.log(res);
  return (
    <>
      {res.audioUrl && (
        <Box sx={{ p: 1, display: "flex" }}>
          <ReactAudioPlayer
            src={`${AUDIO_URL}${res.audioUrl.replace("uploads/", "")}`}
            onPlay={(e) => console.log("onPlay")}
            controls
          />
        </Box>
      )}
    </>
  );
}
