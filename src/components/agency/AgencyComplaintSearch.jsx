import {
  Box,
  Button,
  FormControl,
  Icon,
  TextField,
  Typography,
} from "@mui/material";
import SearchComplaint from "../migrants/myComplaint/SearchComplaint";
import useAgencyStyles from "./agency";
import SearchIcon from "@mui/icons-material/Search";
const AgencyComplaintSearch = ({
  user,
  setSearchResults,
  setSearchIsLoading,
  totalComplaints,
}) => {
  const classes = useAgencyStyles();
  return (
    <>
      <Box className={classes.agencySearchContainer}>
        <Box padding={0.5}>
          {totalComplaints && (
            <Typography variant="h6">
              Total Complaints: {totalComplaints}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            backgroundColor: "#FAFAFF",
            display: "flex",
            mr: 1,
            alignItems: "center",
            position: "relative",
          }}
        >
          <SearchComplaint
            // label="search by name"
            user={user}
            setSearchIsLoading={setSearchIsLoading}
            setSearchResults={setSearchResults}
            agency={true}
            varaint="standard"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "grey" }} />, // <== adjusted this
              // disableUnderline: true,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default AgencyComplaintSearch;
