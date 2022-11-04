import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useMinistryStyles } from "./ministry";
import MinistryGraphCard from "./MinistryGraphyCard";
import MinistryStatCard from "./MinistryStatCard";
import Loading from "../Loading";
import useFetch from "../../useFetch";
import PageError from "../PageError";
import React from "react";

const MinistryStatContext = React.createContext();

const MINISTRY_STAT_URL = `/ministry/view`;
const MinistryStatisticsCardSection = () => {
  const classes = useMinistryStyles();
  const { results, isLoading, errorDetails } = useFetch(MINISTRY_STAT_URL);

  if (isLoading) return <Loading />;
  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  console.log(results);
  const { totalComplaints, totalAgencies, migrants } = results;

  // className={classes.ministryCardSection}
  return (
    <>
      <MinistryStatContext.Provider value={{ results }}>
        <Box>
          <Box sx={{ display: "flex" }}>
            <MinistryStatCard label="TotalComplaints" num={totalComplaints} />
            <MinistryStatCard label="TotalAgencies" num={totalAgencies} />
            <MinistryStatCard label="TotalMigrants" num={migrants} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <MinistryGraphCard
              _doughnut={true}
              chartTitle="Doughnut showing agencies aganist complaints"
            />
            <MinistryGraphCard _bar={true} chartTitle="Bar graph showing complaints with their respe" />
            <MinistryGraphCard
              _pie={true}
              chartTitle="Pie Chart showing agencies with the complaint expressed in percentage (%) "
              mt={3}
            />
          </Box>
          {/* 
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={2.2}
            sx={{ border: "1px solid red" }}
          >
            <Stack>
              <MinistryStatCard label="TotalComplaints" num={totalComplaints} />
              <MinistryStatCard label="TotalAgencies" num={totalAgencies} />
              <MinistryStatCard label="TotalMigrants" num={migrants} />
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={8}
            sx={{ border: "1px solid red", display: "flex", flexWrap: true }}
          >
            <MinistryGraphCard _doughnut={true} />
            <MinistryGraphCard _bar={true} />
            <MinistryGraphCard _pie={true} />
          </Grid>
        </Grid>
     */}
        </Box>
      </MinistryStatContext.Provider>
    </>
  );
};

export { MinistryStatisticsCardSection, MinistryStatContext };