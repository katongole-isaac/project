import { Box, Grid, Stack } from "@mui/material";
import { useContext } from "react";
import ReactPlayer from "react-player";
import VideoPlayer from "../migrants/myComplaint/VideoPlayer";
import { SingleComplaintContext } from "./SingleComplaintView";

const VIDEO_URL = `http://localhost:3001/api/`;
export default function VideoComplaintView() {
  const { res, classes } = useContext(SingleComplaintContext);
  console.log(`${VIDEO_URL}${res.videoUrl}`);
  return (
    <>
      {res.videoUrl && (
        <Grid container>
          {/* <Stack spacing={2} sx={{ width: "100%", }}> */}
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Box sx={{ width: "100%", height: "50%" }}>
              <VideoPlayer videoUrl={res.videoUrl} height="50%" />
            </Box>
          </Grid>
          {/* </Stack> */}
        </Grid>
      )}
    </>
  );
}
