import {
  Alert,
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import useAgencyStyles from "./agency";
import { signOut, UserState } from "../../userContext";
import { useContext } from "react";
import { AgencyStatContext } from "./AgencyLayout";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const AgencyAppBar = () => {
  const classes = useAgencyStyles();
  const { user } = useContext(UserState);
  const { dispatch, id } = useContext(UserState);
  const { setShowStat } = useContext(AgencyStatContext);

  const handleStatClick = () => {
    setShowStat((prev) => !prev);
  };
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
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography variant="body1" className={classes.title}>
              Dashboard
            </Typography>
            <Button
              sx={{ textTransform: "lowercase", color: "#fff" }}
              variant="outlined"
              onClick={handleStatClick}
            >
              statistics
            </Button>

            <AlertMsg />
          </Stack>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>{user.name}</Typography>
            <IconButton onClick={() => signOut(dispatch, id)}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AgencyAppBar;

const AlertMsg = () => {
  return (
    <>
      <Box>
        <Alert severity="error" sx={{ p: 0, pl: 0.4, pr: 0.4 }}>
          <Stack direction="row" spacing={0.8}>
            <Typography variant="body2">
              You are advised to change your password. The default password is
              123456
            </Typography>
            <Link to={"/agency/profile"}>
              <Typography varaint="body2">change password </Typography>
            </Link>
            <IconButton></IconButton>
          </Stack>
        </Alert>
      </Box>
    </>
  );
};
