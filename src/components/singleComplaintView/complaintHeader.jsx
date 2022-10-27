import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ComplaintHeader = () => {
  return (
    <>
      <Box sx={{ width: "100%", mt: 1 }}>
        <Link to="/agency">
          <IconButton>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Link>
      </Box>
    </>
  );
};

export default ComplaintHeader;
