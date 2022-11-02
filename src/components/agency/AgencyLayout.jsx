import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useAgencyStyles from "./agency";
import AgencyAppBar from "./AgencyAppBar";
import AgencySideNav from "./AgencySideNav";

const AgencyStatContext = React.createContext();
const AgencyLayout = () => {
  const classes = useAgencyStyles();
  const [showStat, setShowStat] = useState(false);
  return (
    <>
      <AgencyStatContext.Provider value={{ showStat, setShowStat }}>
        <AgencyAppBar />
        <div style={{ height: "64px" }}></div>

        <Box sx={{ display: "flex" }}>
          <AgencySideNav />
          <div
            style={{ overflowX: "hidden", flexGrow: 1, overflowY: "hidden" }}
          >
            <Outlet />
          </div>
        </Box>
      </AgencyStatContext.Provider>
    </>
  );
};

export { AgencyLayout, AgencyStatContext };
