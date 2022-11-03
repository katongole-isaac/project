import { Box, Button, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useState } from "react";
import { useContext } from "react";
import updateComplaintStatus from "../utils/updateComplaintStatus";
import { SingleComplaintContext } from "./SingleComplaintView";
const UPDATE_COMPLAINT_STATUS_URL = `/complaints/updateview`;
const COMPLAINT_STATUS = `workedUpon`;
const ComplaintTitleSection = () => {
  const { res, classes } = useContext(SingleComplaintContext);
  const [showStatus, setShowStatus] = useState(false);

  const handleWorkUponClick = () => {
    updateComplaintStatus(
      UPDATE_COMPLAINT_STATUS_URL,
      res._id,
      COMPLAINT_STATUS
    );
    setShowStatus(true);
  };
  
  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6">
            Complaint Reason: {res.reason.toUpperCase()} [ID: {res._id} ]
          </Typography>
        </Box>

        {/* Button for showing that agency is workedupon the complainits */}
        <Box>
          {res.status === "workedUpon" || showStatus ? (
            <>
              <Typography variant="body2" sx={{ color: orange[400] }}>
                workedUpon
              </Typography>
            </>
          ) : (
            <>
              <Button
                size="small"
                onClick={handleWorkUponClick}
                variant='outlined'
                sx={{ textTransform: "lowercase" }}
              >
                work upon
              </Button>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ComplaintTitleSection;
