import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  ListItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/system";
import { useContext } from "react";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { firstLetterUpperCase } from "../utils/firstLetterUpperCase";
import authFetch from "../authFetch";
import { colorsForComplaintStatus } from "../utils/colorsForComplaintStatus";
import updateComplaintStatus from "./utils/updateComplaintStatus";

const useTestingStyles = makeStyles({
  listItem: {
    "&:hover": {
      backgroundColor: "#f8f9fa",
      cursor: "pointer",
    },
  },
});

// ## /migrant?q=complaintId
const ComplaintContext = React.createContext();

const UPDATE_COMPLAINT_STATUS_URL = `/complaints/updateview`;
const COMPLAINT_STATUS = `seen`;
const SingleComplaint = ({
  fullname,
  desc,
  email,
  reason,
  date,
  _id,
  audioUrl,
  videoUrl,
  formatType,
  status,
}) => {
  return (
    <>
      <ComplaintContext.Provider
        value={{
          fullname,
          desc,
          email,
          reason,
          _id,
          audioUrl,
          videoUrl,
          date,
          status,
          formatType,
        }}
      >
        <MyLink />
        {/* <Divider sx={{ backgroundColor: "black" }} /> */}
      </ComplaintContext.Provider>
    </>
  );
};

export default SingleComplaint;

const MyLink = () => {
  const { _id } = useContext(ComplaintContext);
  const classes = useTestingStyles();

  return (
    <>
      <ListItem className={classes.listItem}>
        <MyStack />
      </ListItem>
    </>
  );
};

const MyStack = () => {
  const {
    fullname,
    desc,
    reason,
    email,
    date,
    videoUrl,
    _id,
    audioUrl,
    formatType,
    status,
  } = useContext(ComplaintContext);

  const format = formatType(desc, videoUrl, audioUrl);
  const statusColor = colorsForComplaintStatus(status);

 

  return (
    <>
      <Card
        onClick={() =>
          //updating status complaint  ****for Updating the complaint status === from pending to seen  == ****
          updateComplaintStatus(
            UPDATE_COMPLAINT_STATUS_URL,
            _id,
            COMPLAINT_STATUS
          )
        }
        sx={{
          border: "none",
          borderLeft: `4px solid ${format?.color}`,
          //   height: "40px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            hieght: "100%",
            display: "flex",
            p: 1.5,
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack spacing={1} direction="row">
              <Typography variant="body1" fontWeight={700}>
                {firstLetterUpperCase(fullname)}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" marginLeft={1} marginRight={1}>
                  complaint Format
                </Typography>

                <Chip
                  label={format?.label}
                  size="small"
                  sx={{
                    backgroundColor: format?.color,
                    width: "70px",
                  }}
                />
              </Box>
              {desc && (
                <>
                  <Typography variant="body2">
                    {`${desc.substring(0, 95)}...`}
                  </Typography>
                </>
              )}
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={0.5}>
              <Typography variant="body2" sx={{ color: statusColor }}>
                {status}
              </Typography>
              <Typography variant="body2">
                {new Date(date).toDateString()}
              </Typography>
            </Stack>
          </Box>
        </Box>
        {/* <CardContent></CardContent> */}
      </Card>
    </>
  );
};
