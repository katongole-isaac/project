import {
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
