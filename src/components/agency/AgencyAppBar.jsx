import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import useAgencyStyles from "./agency";
import { signOut, UserState } from "../../userContext";
import { useContext } from "react";

const drawerWidth = 240;
const AgencyAppBar = () => {
  const classes = useAgencyStyles();
  const { user } = useContext(UserState);
  const { dispatch, id } = useContext(UserState);
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "#3da5d9",
          width: `calc(100% - ${drawerWidth}px)`,
        }}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="body1" className={classes.title}>
            Dashboard
          </Typography>
          <Typography>{user.name}</Typography>
          <IconButton onClick={() => signOut(dispatch, id)}>
            <PowerSettingsNewIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AgencyAppBar;
