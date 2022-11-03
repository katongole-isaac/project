import { Box } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import AgencyComplaintList from "../../components/agency/AgencyComplaintList";
import AgencyComplaints from "../../components/agency/AgencyComplaints";
import AgencyComplaintSearch from "../../components/agency/AgencyComplaintSearch";
import AgencyComplaintTitle from "../../components/agency/AgencyComplaintTitle";
import useFetch from "../../useFetch";
import { UserState } from "../../userContext";

const AGENCY_COMPLAINTS = `/complaints/agency/views`;

const AgencyComplaintsLayout = () => {
  const { user } = useContext(UserState);
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  // const [] = useState();
  const [totalComplaints, setTotalComplaints] = useState(null);
  const { isLoading, error, errorDetails, results } = useFetch(
    `${AGENCY_COMPLAINTS}?agency=${user.name}`
  );

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          backgroundColor: "grey",
          mt: 1,
        }}
      >
        <AgencyComplaintTitle user={user} totalComplaints={totalComplaints} />
        <AgencyComplaintSearch
          user={user}
          totalComplaints={totalComplaints}
          setSearchIsLoading={setSearchIsLoading}
          setSearchResults={setSearchResults}
        />
        <AgencyComplaints
          setTotalComplaints={setTotalComplaints}
          searchIsLoading={searchIsLoading}
          searchResults={searchResults}
          isLoading={isLoading}
          errorDetails={errorDetails}
          results={results}
        />
      </Box>
    </>
  );
};

export default AgencyComplaintsLayout;
