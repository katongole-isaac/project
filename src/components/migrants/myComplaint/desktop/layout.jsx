import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { UserState } from "../../../../userContext";
import DeskSingleComplaint from "./DeskSingleComplaint";
import DesktopSearch from "./DesktopSearch";
import ScrollMe from "./ScrollMe";
import { useDesktopStyles } from "./styles";

const DesktopComplaintLayout = () => {
  const classes = useDesktopStyles();
  const [complaintId, setComplaintId] = useState(null);
  const { user } = useContext(UserState);
  const [searchResults, setSearchResults] = useState([]);
  const [searchIsLoading, setSearchIsLoading] = useState(false);

  return (
    <>
      <Container
        disableGutters
        sx={{
          // border: "2px solid coral",
          height: "93vh",
          minHeight: "93vh",
          maxHeight: "93vh",
          width: "100%",
          display: "flex",
          padding: 0,
        }}
      >
        <Box className={classes.complaintList}>
          <DesktopSearch
            user={user}
            setSearchIsLoading={setSearchIsLoading}
            setSearchResults={setSearchResults}
          />
          <Box className={classes.complaintListInnerBox}>
            <ScrollMe
              searchIsLoading={searchIsLoading}
              searchResults={searchResults}
              setComplaintId={setComplaintId}
            />
          </Box>
        </Box>
        <Box className={classes.singleComplaint}>
          <DeskSingleComplaint complaintId={complaintId} />
        </Box>
      </Container>
    </>
  );
};

export default DesktopComplaintLayout;
