import { Box, Grid } from "@mui/material";

const AgencyProfile = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", pb: 2, pt: 2 }}>
        <Grid container sx={{ height: "100%", width: "100%" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            sx={{
              height: "100%",
              backgroundColor: "palevioletred",
            }}
          ></Grid>
          <Grid
            itemxs={12}
            sm={12}
            md={12}
            lg={8}
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "pink",
            }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AgencyProfile;
