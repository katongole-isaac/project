import { Box, Grid, List, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ComplaintCard from "../complaintCard";
import Loading from "../Loading";
import PageError from "../PageError";
import SingleComplaint from "../SingleComplaint";
import { useStyles } from "../../styles";
import useFetch from "../../useFetch";
import { UserState } from "../../userContext";
import NoContent from "../NoContent";
import { DataGrid } from "@mui/x-data-grid";
import SkeletonLoading from "../SkeletonLoading";
import formatTypeColors from "../../utils/formatTypeColors";

const drawerWidth = 240;
const NO_CONTENT_MSG = `No complaints available`;
const AGENCY_COMPLAINTS = `/complaints/agency/views`;
const useAgencyComplaintStyles = makeStyles({
  page: {
    width: `calc(100vw - ${drawerWidth}px)`,
  },
  links: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "black",
    },
  },
});

const AgencyComplaints = ({
  searchIsLoading,
  searchResults,
  isLoading,
  errorDetails,
  results,
  setTotalComplaints,
}) => {
  const { user } = useContext(UserState);
  const classes = useAgencyComplaintStyles();

  //persisting data on the editor. we need to set 'letter' in localStorage and later we read it
  localStorage.setItem("letter", "");

  // const { isLoading, error, errorDetails, results } = useFetch(
  //   `${AGENCY_COMPLAINTS}?agency=${user.name}`
  // );

  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  if (isLoading || searchIsLoading)
    return <SkeletonLoading height={"calc(100vh - 100px)"} />;

  if (results.res?.length === 0)
    return <NoContent msg={NO_CONTENT_MSG} height="82vh" />;

  // console.log(results);
  const columns = [
    {
      field: "complaint",
      headerName: "Complaint",
      type: "string",
      flex: 1,
      // headerClassName: "dataGridHeader",
    },
  ];
  const myRows = [
    {
      field: "complaint",
      id: 1,
    },
  ];

  let showResults = results.res;
  if (showResults) setTotalComplaints(showResults.length);

  //updating the UI according to search results.
  if (searchResults.length !== 0) {
    showResults = [];
    showResults = searchResults;
  }

  console.log(showResults);

  return (
    <>
      <Box sx={{ flexGrow: 1, minHeight: "100%" }}>
        <List>
          {showResults.map((complaint) => (
            <>
              <Link
                to={`/agency/complaints/${complaint._id}`}
                className={classes.links}
                key={complaint._id}
              >
                <SingleComplaint {...complaint} formatType={formatTypeColors} />
                <SingleComplaint {...complaint} formatType={formatTypeColors} />
                <SingleComplaint {...complaint} formatType={formatTypeColors} />
                <SingleComplaint {...complaint} formatType={formatTypeColors} />
              </Link>
            </>
          ))}
        </List>
      </Box>
    </>
  );
};

export default AgencyComplaints;
