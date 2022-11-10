import { Box, Typography } from "@mui/material";
import useFetch from "../../../../useFetch";
import Loading from "../../../Loading";
import PageError from "../../../PageError";
import VideoPlayer from "../VideoPlayer";
import DesktopComment from "./DesktopComments";
import DesktopComplaintDisplay from "./DesktopComplaintDisplay";
import DesktopComplaintHeadSection from "./DesktopComplaintHeadSection";
import { useDesktopStyles } from "./styles";

const COMPLAINT_URL = `/complaints/views/`;

const DeskSingleComplaint = ({ complaintId }) => {
  // inital render when complaintId is not set
  if (complaintId === null || complaintId === undefined)
    return <> Welcome here</>;

  return <DesktopComplaintPage complaintId={complaintId} />;
};

export default DeskSingleComplaint;

const DesktopComplaintPage = ({ complaintId }) => {
  const classes = useDesktopStyles();
  const { isLoading, errorDetails, results, error } = useFetch(
    `${COMPLAINT_URL}${complaintId}`
  );

  if (isLoading) return <Loading />;

  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  const complaint = results.res;

  return (
    <>
      <Box className={classes.desktopContainer}>
        {/* upper section of the single complaint view */}
        <Box className={classes.desktopUpperBox}>
          <DesktopComplaintHeadSection {...complaint} />
          <DesktopComplaintDisplay {...complaint} />
        </Box>

        {/* comment section of the complaint view desktop */}
        <Box className={classes.desktopLowerBox}>
          <DesktopComment complaintId={complaintId} />
        </Box>
      </Box>
    </>
  );
};
