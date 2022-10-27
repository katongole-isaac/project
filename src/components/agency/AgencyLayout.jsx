import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import useAgencyStyles from "./agency";
import AgencyAppBar from "./AgencyAppBar";
import AgencySideNav from "./AgencySideNav";

const AgencyLayout = () => {
  const classes = useAgencyStyles();

  return (
    <>
      <AgencyAppBar />
      <div style={{ height: "64px" }}></div>

      <Box sx={{ display: "flex" }}>
        <AgencySideNav />
        <div style={{ overflowX: "hidden", flexGrow: 1, overflowY: "hidden" }}>
          <Outlet />
        </div>
      </Box>
    </>
  );
};

export default AgencyLayout;
