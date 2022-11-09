import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ComplaintHeader = ({ back }) => {
  return (
    <>
      <Box sx={{ width: "100%", mt: 1 }}>
        <Link to={back || "../"}>
          <IconButton>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Link>
      </Box>
    </>
  );
};

export default ComplaintHeader;
