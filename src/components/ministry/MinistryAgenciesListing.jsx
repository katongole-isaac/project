import { Box, List, Typography } from "@mui/material";
import useFetch from "../../useFetch";
import NoContent from "../NoContent";
import PageError from "../PageError";
import SkeletonLoading from "../SkeletonLoading";
import MinistryAgenciesListItem from "./MinistryAgencyListItem";

const AGENCY_NAMES_URL = `/ministry/view/agencies`;
const MinistryAgenciesList = () => {
  const { results, isLoading, errorDetails } = useFetch(AGENCY_NAMES_URL);

  if (isLoading) return <SkeletonLoading />;

  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  console.log(results);
  const { agenciesNames } = results;

  if (agenciesNames.length === 0)
    return <NoContent msg="No agency has sent a letter so far " />;

  return (
    <>
      <Box
        sx={{ m: 1, p: 1, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h5">
          Agencies that sent letter complaints{" "}
        </Typography>
        <Typography variant="h5">
          Total Agencies : {agenciesNames.length}
        </Typography>
      </Box>
      <Box sx={{ m: 1, mr: 4 }}>
        <List>
          {agenciesNames.map((agency) => {
            return <MinistryAgenciesListItem {...agency} />;
          })}
        </List>
      </Box>
    </>
  );
};

export default MinistryAgenciesList;
