import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { blue } from "@mui/material/colors";

import useFetch from "../../../../useFetch";
import { UserState } from "../../../../userContext";
import Loading from "../../../Loading";
import PageError from "../../../PageError";
import DesktopComplaintCard from "./DesktopComplaintCard";

const MY_COMPLAINT_URL = `/complaints/views`;

const ScrollMe = ({ setComplaintId, searchIsLoading, searchResults }) => {
  const { user } = useContext(UserState);

  const { results, errorDetails, isLoading } = useFetch(
    `${MY_COMPLAINT_URL}?email=${user.email}`
  );

  if (isLoading || searchIsLoading) return <Loading />;

  if (Object.keys(errorDetails)?.length !== 0) return <PageError />;

  let complaints = results.res;
  console.log(complaints);

  console.log(searchResults);

  return (
    <>
      <List sx={{}}>
        {complaints.map((complaint) => (
          <>
            <DesktopComplaintCard
              key={complaint._id}
              {...complaint}
              setComplaintId={setComplaintId}
            />
          </>
        ))}
      </List>
    </>
  );
};

export default ScrollMe;
