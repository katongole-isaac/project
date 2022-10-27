import { Stack } from "@mui/system";
import AudioComplaint from "./AudioComplaint";
import TextComplaint from "./TextComplaint";
import VideoComplaint from "./VideoComplaint";

const ComplaintList = () => {
  return (
    <>
      <Stack spacing={0.5}>
        <TextComplaint />
        <TextComplaint />
        <TextComplaint />
        <AudioComplaint />
        <VideoComplaint />
      </Stack>
    </>
  );
};

export default ComplaintList;
