import { Box, FormControl, TextField, Typography } from "@mui/material";
import SearchComplaint from "../migrants/myComplaint/SearchComplaint";
import Options from "./Options";
const AgencyComplaintSearch = () => {
  return (
    <>
      <Box sx={{ display: "flex", border: "1px solid red" }}>
        <Options />
        <SearchComplaint />
      </Box>
    </>
  );
};

export default AgencyComplaintSearch;
