import { Stack } from "@mui/system";
import { useContext, useState } from "react";
import useFetch from "../../../useFetch";
import Loading from "../../Loading";
import PageError from "../../PageError";
import AudioComplaint from "./AudioComplaint";
import TextComplaint from "./TextComplaint";
import VideoComplaint from "./VideoComplaint";
import { UserState } from "../../../userContext";

const MY_COMPLAINT_URL = `/complaints/views`;

const ComplaintList = ({ state, complaints }) => {
  // const { user } = useContext(UserState);

  // const { results, errorDetails, isLoading } = useFetch(
  //   `${MY_COMPLAINT_URL}?email=${user.email}`
  // );

  // if (isLoading) return <Loading />;

  // if (Object.keys(errorDetails)?.length !== 0) return <PageError />;

  // const complaints = results.res;

  return (
    <>
      <Stack spacing={1} sx={{ mb: 2 }}>
        {(state === "text" || state === "all") && (
          <>
            <TextComplaint complaints={complaints} />
            {/* <TextComplaint complaints={complaints} />
            <TextComplaint complaints={complaints} /> */}
          </>
        )}
        {(state === "video" || state === "all") && (
          <>
            <VideoComplaint complaints={complaints} />
          </>
        )}
        {(state === "audio" || state === "all") && (
          <>
            <AudioComplaint complaints={complaints} />
          </>
        )}
      </Stack>
    </>
  );
};

export default ComplaintList;
