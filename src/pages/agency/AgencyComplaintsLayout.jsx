import { Box } from "@mui/material";
import AgencyComplaintList from "../../components/agency/AgencyComplaintList";
import AgencyComplaintSearch from "../../components/agency/AgencyComplaintSearch";
import AgencyComplaintTitle from "../../components/agency/AgencyComplaintTitle";

const AgencyComplaintsLayout = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          backgroundColor: "grey",
        }}
      >
          <AgencyComplaintTitle />
          <AgencyComplaintSearch />
          <AgencyComplaintList />
      </Box>
    </>
  );
};

export default AgencyComplaintsLayout;
