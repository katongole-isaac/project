import { Avatar, Grid } from "@mui/material";
import { Box } from "@mui/system";
import BioInfo from "./BioInfo";
import useGenStyles from "./styles";

const ProfileHeader = () => {
  const classes = useGenStyles();
  return (
    <>
      <Grid container sx={{}} alignItems="flex-start">
        <Grid
          item
          xs={12}
          sm={6}
          md={12}
          lg={12}
          sx={{
            height: "max-content",
            display: "flex",
            padding: 1,
            justifyContent: "center",
          }}
        >
          <Box className={classes.avatarBox}>
            <Avatar
              alt="profile_pic"
              sx={{
                width: "120px",
                height: "120px",
                position: "relative",
                left: "10px",
                top: "5px",
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={12}
          lg={12}
          direction="row"
          flexGrow={1}
          sx={(theme) => {
            return {
              height: "max-content",
              display: "flex",
              padding: 1,
              justifyContent: "center",
              [theme.breakpoints.only("sm")]: {
                justifyContent: "start",
              },
            };
          }}
        >
          <BioInfo />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileHeader;
