import MinistryAppBar from "./Appbar";
import MinistryDrawer from "./MinistryDrawer";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useMinistryStyles } from "./ministry";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";

const MinistryDash = () => {
  const classes = useMinistryStyles();
  return (
    <>
      <MinistryAppBar />
      <div style={{ height: "64px" }}></div>
      <Box sx={{ display: "flex" }}>
        <MinistryDrawer />
        <div style={{ overflowX: "hidden", flexGrow: 1, overflowY: "hidden" }}>
          <Outlet />
        </div>
      </Box>
    </>
  );
};

export default MinistryDash;
