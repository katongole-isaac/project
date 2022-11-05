import { Box } from "@mui/material";
import MinistryAgenciesList from "../../../components/ministry/MinistryAgenciesListing";
import MinistryLetterCard from "../../../components/ministry/MinistryLetterCard";
import MinistryLetterList from "../../../components/ministry/MinistryLetterList";

const MinistryLetterComplaint = () => {
  return (
    <>
      <Box sx={{ height: "92vh", minHeight: "92vh" }}>
        
        <MinistryAgenciesList />
       
      </Box>
      {/* <MinistryLetterList /> */}
    </>
  );
};
export default MinistryLetterComplaint;
