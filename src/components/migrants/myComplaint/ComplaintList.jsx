import { Stack } from "@mui/system";
import { useContext } from "react";
import useFetch from "../../../useFetch";
import Loading from "../../Loading";
import PageError from "../../PageError";
import AudioComplaint from "./AudioComplaint";
import TextComplaint from "./TextComplaint";
import VideoComplaint from "./VideoComplaint";
import { UserState } from "../../../userContext";

const MY_COMPLAINT_URL = `/complaints/views`;

const ComplaintList = ({ state }) => {
  const { user } = useContext(UserState);

  const { results, errorDetails, isLoading } = useFetch(
    `${MY_COMPLAINT_URL}?email=${user.email}`
  );

  if (isLoading) return <Loading />;

  if (Object.keys(errorDetails)?.length !== 0) return <PageError />;

  console.log(results);

  return (
    <>
      <Stack spacing={0.5}>
        {state === "text" && (
          <>
            <TextComplaint />
            <TextComplaint />
            <TextComplaint />
          </>
        )}
        {state === "video" && (
          <>
            <VideoComplaint />
          </>
        )}
        {state === "audio" && (
          <>
            <AudioComplaint />
          </>
        )}
      </Stack>
    </>
  );
};

export default ComplaintList;
