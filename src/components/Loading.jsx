import CircularProgress from "@mui/material/CircularProgress";
import Blink from "react-blink-text";
import { Grid } from "@mui/material";
const Loading = () => {
  return (
    <>
      <Grid
        container
        sx={{ height: "80vh", position: "relative" }}
        justifyContent="center"
      >
        <Grid
          item
          xs={8}
          alignSelf="center"
          textAlign="center"
          sx={{ position: "absolute", top: "30%" }}
        >
          {/* <CircularProgress color="inherit" sx={{ color: "black" }} />
           */}
          <Blink color="black" text="Loading..." fontSize="20">
            Testing the Blink
          </Blink>
        </Grid>
      </Grid>
    </>
  );
};

export default Loading;
