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

const drawerWidth = 240;
const NO_CONTENT_MSG = `No complaints available`;
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
const AgencyComplaints = () => {
  const { user } = useContext(UserState);
  const classes = useAgencyComplaintStyles();

  //persisting data on the editor. we need to set 'letter' in localStorage and later we read it
  localStorage.setItem("letter", "");

  const { isLoading, error, errorDetails, results } =
    useFetch(`/complaints/view/all`);

  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  if (isLoading) return <Loading />;

  if (results.res?.length === 0) return <NoContent msg={NO_CONTENT_MSG} />;

  console.log(results);
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
  return (
    <>
      <Box sx={{ flexGrow: 1, minHeight: "100%" }}>
        <List>
          {results.res?.map((complaint) => (
            <>
              <Link
                to={`/agency/complaints/${complaint._id}`}
                className={classes.links}
                key={complaint._id}
              >
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
                <SingleComplaint {...complaint} />
              </Link>
            </>
          ))}
        </List>
      </Box>
    </>
  );
};

export default AgencyComplaints;
