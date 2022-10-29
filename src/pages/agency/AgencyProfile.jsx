import { Box, Grid } from "@mui/material";
import { useContext, useState } from "react";
import AgencyFirstProfileCard from "../../components/agency/AgencyFirstProfileCard";
import AgencyMoreProfileCard from "../../components/agency/AgencyMoreProfileCard";
import AgencySecondProfileCard from "../../components/agency/AgencySecondProfileCard";
import AgencyStatProfileCard from "../../components/agency/AgencyStatProfileCard";
import { UserState } from "../../userContext";

const AgencyProfile = () => {
  const { user: currentUser } = useContext(UserState);
  const [user, setUser] = useState(currentUser);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "93vh",
          p: 1,
        }}
      >
        <Grid container sx={{ height: "100%", width: "100%" }} spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            sx={{
              height: "100%",
              width: "100%",
              p: 1,
            }}
          >
            <AgencyFirstProfileCard user={user} />
            {/* <AgencySecondProfileCard /> */}
          </Grid>
          <Grid
            itemxs={12}
            sm={12}
            md={12}
            lg={7}
            sx={(theme) => ({
              minHeight: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 1,

              [theme.breakpoints.up("md")]: {
                height: "100%",
                minHeight: "100%",
              },
            })}
          >
            <AgencyStatProfileCard setUser={setUser} user={user} />
            {/* <AgencyMoreProfileCard /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AgencyProfile;
