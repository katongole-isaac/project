import { Grid, Stack } from "@mui/material";
import { useContext } from "react";
import ReactPlayer from "react-player";
import { SingleComplaintContext } from "./SingleComplaintView";

export default function VideoComplaintView() {
  const { res, classes } = useContext(SingleComplaintContext);

  return (
    <>
      {res.videoUrl && (
        <Grid container>
          <Stack spacing={2} sx={{ width: "100%" }}>
            {/* <video
              src={`${BASE_URL}/api/uploads/blob1663871487156`}
              controls
              width="100%"
            ></video> */}
            <ReactPlayer
              url="http://localhost:3001/api/uploads/blob1663871487156"
              config={{
                file: {
                  attributes: {
                    crossOrigin: "true",
                  },
                },
              }}
              controls
            />
            {/* {showEditor && (
              <Grid container spacing={1}>
                <Grid item sm={12} md={12} justifyContent="center">
                  <EditorComp letter={letter} setLetter={setLetter} />
                </Grid>
              </Grid>
            )} */}
          </Stack>
        </Grid>
      )}
    </>
  );
}
