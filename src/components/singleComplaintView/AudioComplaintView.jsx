import { Grid } from "@mui/material";
import { useContext } from "react";
import { SingleComplaintContext } from "./SingleComplaintView";

export default function AudioComplaintView() {
  const { res, classses } = useContext(SingleComplaintContext);
  return (
    <>
      {res.audioUrl && (
        <Grid container spacing={1}>
          {/* <GridElem editor={showEditor}>
              <audio controls></audio>
            </GridElem> */}

          {/* {showEditor && (
              <Grid container spacing={1}>
                <Grid item sm={12} md={12} justifyContent="center">
                  <EditorComp letter={letter} setLetter={setLetter} />
                </Grid>
              </Grid>
            )} */}
        </Grid>
      )}
    </>
  );
}
