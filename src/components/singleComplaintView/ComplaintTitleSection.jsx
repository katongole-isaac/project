import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { SingleComplaintContext } from "./SingleComplaintView";

const ComplaintTitleSection = () => {
  const { res, classes } = useContext(SingleComplaintContext);
  return (
    <>
      <Box sx={{ width: "100%", p: 1 }}>
        <Typography variant="h6">
          Complaint Reason: {res.reason.toUpperCase()} [ID: {res._id} ]
        </Typography>
      </Box>
    </>
  );
};

export default ComplaintTitleSection;
