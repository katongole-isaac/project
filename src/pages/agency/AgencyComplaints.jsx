import { Grid, List, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ComplaintCard from "../../components/complaintCard";
import Loading from "../../components/Loading";
import PageError from "../../components/PageError";
import SingleComplaint from "../../components/SingleComplaint";
import { useStyles } from "../../styles";
import useFetch from "../../useFetch";
import { UserState } from "../../userContext";

const drawerWidth = 240;
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

  if (Object.keys(errorDetails).length !== 0) {
    console.log(error);
    return <PageError />;
  }

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (results.res?.length === 0) {
    return (
      <>
        <Typography variant="h4">No complaints</Typography>
      </>
    );
  }

  console.log(results);

  return (
    <>
      <div className={classes.page}>
        <Typography variant="h6" padding={2}>
          Complaints
        </Typography>

        <List>
          {results.res?.map((complaint) => (
            <>
              <Link
                to={`/agency/complaints/${complaint._id}`}
                className={classes.links}
                key={complaint._id}
              >
                <SingleComplaint {...complaint} />
              </Link>
            </>
          ))}
        </List>
      </div>
    </>
  );
};

export default AgencyComplaints;
