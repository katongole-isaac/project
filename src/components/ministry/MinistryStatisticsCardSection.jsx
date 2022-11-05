import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useMinistryStyles } from "./ministry";
import MinistryGraphCard from "./MinistryGraphyCard";
import MinistryStatCard from "./MinistryStatCard";
import Loading from "../Loading";
import useFetch from "../../useFetch";
import PageError from "../PageError";
import React from "react";
import { Masonry } from "@mui/lab";

const MinistryStatContext = React.createContext();
const fixedBoxWidth = `15%`;
const MINISTRY_STAT_URL = `/ministry/view`;
const MinistryStatisticsCardSection = () => {
  const classes = useMinistryStyles();
  const { results, isLoading, errorDetails } = useFetch(MINISTRY_STAT_URL);

  if (isLoading) return <Loading />;
  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  console.log(results);
  const { totalComplaints, totalAgencies, migrants } = results;

  return (
    <>
      <MinistryStatContext.Provider value={{ results }}>
        <Box
          sx={{
            minHeight: "95vh",
            height: "100%",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                width: "15%",
                height: "92%",
                position: "fixed",
                display: "flex",
                flexWrap: "wrap",
                p: 1,
              },
            })}
          >
            <MinistryStatCard label="TotalComplaints" num={totalComplaints} />
            <MinistryStatCard label="TotalAgencies" num={totalAgencies} />
            <MinistryStatCard label="TotalMigrants" num={migrants} />
          </Box>
          <Box sx={{ display: "flex", height: "100%" }}>
            <Box sx={{ width: "18%", height: "100%" }}></Box>
            <Box
              sx={(theme) => ({
                height: "100%",
                flexGrow: 1,
              })}
            >
              <Masonry
                columns={{ xs: 1, sm: 1, md: 2, lg: 2 }}
                spacing={1}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <MinistryGraphCard
                  _doughnut={true}
                  chartTitle="Doughnut showing agencies aganist complaints"
                />
                <MinistryGraphCard
                  _bar={true}
                  chartTitle="Bar graph showing complaints with their respective agencies"
                />
                <MinistryGraphCard
                  _pie={true}
                  chartTitle="Pie Chart showing agencies with the complaint expressed in percentage (%) "
                  mt={3}
                />
                <MinistryGraphCard
                  _polar={true}
                  chartTitle="Polar Chart showing comparison between complaint status "
                  mt={3}
                />
              </Masonry>
            </Box>
          </Box>
        </Box>
      </MinistryStatContext.Provider>
    </>
  );
};

export { MinistryStatisticsCardSection, MinistryStatContext };
