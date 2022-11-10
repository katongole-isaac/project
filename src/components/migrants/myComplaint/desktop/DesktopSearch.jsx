import { Box, Card, Typography } from "@mui/material";
import SearchComplaint from "../SearchComplaint";

const DesktopSearch = ({ setSearchResults, setSearchIsLoading, user }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          border: "none",
          zIndex: 1,
          p: 0.5,
        }}
      >
        <Card sx={{ width: "100%", height: "100%", p: 1 }} elevation={2}>
          <Box>
            <SearchComplaint
              user={user}
              setSearchIsLoading={setSearchIsLoading}
              setSearchResults={setSearchResults}
            />
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default DesktopSearch;
