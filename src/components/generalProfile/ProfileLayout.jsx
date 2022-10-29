import { Box, Grid } from "@mui/material";
import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { UserState } from "../../userContext";

import ProfileHeader from "./ProfileHeader";
import ProfileView from "./ProfileView";
import useGenStyles from "./styles";

const ProfileLayout = () => {
  const { user: currentUser } = useContext(UserState);
  const [user, setUser] = useState(currentUser);
  const classes = useGenStyles();
  return (
    <Container>
      <Grid
        container
        spacing={1}
        sx={{ height: "92vh", backgroundColor: "#fdfdff" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={4}
          sx={{ backgroundColor: "#FAFAFA" }}
        >
          <Box className={classes.proHeaderBox}>
            <ProfileHeader user={user} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={8}
          sx={{ height: "100%", backgroundColor: "#FAFAFA" }}
        >
          <Box
            sx={{
              flexGrow: 1,
              height: "100%",
            }}
          >
            <ProfileView user={user} setUser={setUser} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ProfileLayout;
