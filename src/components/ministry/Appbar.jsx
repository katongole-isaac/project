import { Logout } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { useMinistryStyles } from "./ministry";
import { useStyles } from "../../styles";
import { signOut, UserState } from "../../userContext";

const MinistryAppBar = () => {
  const { dispatch, id } = useContext(UserState);
  const classes = useMinistryStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <AppBar
        elevation={0}
        className={classes.bar}
        sx={{ backgroundColor: "#168aad", width: `calc(100vw - 240px)` }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ministry Dashboard
          </Typography>

          <Typography variant="h6">{user && user.username}</Typography>
          <Button onClick={() => signOut(dispatch, id)}>
            <Logout />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MinistryAppBar;
