import { Container } from "@mui/material";
import { useState } from "react";
import ComplaintList from "./ComplaintList";
import SearchButtons from "./SearchButtons";
import SearchComplaint from "./SearchComplaint";
import Title from "./Title";
import { useContext } from "react";
import useFetch from "../../../useFetch";
import Loading from "../../Loading";
import PageError from "../../PageError";
import AudioComplaint from "./AudioComplaint";
import TextComplaint from "./TextComplaint";
import VideoComplaint from "./VideoComplaint";
import { UserState } from "../../../userContext";

const MY_COMPLAINT_URL = `/complaints/views`;

const MigrantLayout = () => {
  const [state, setState] = useState("all");

  const [searchResults, setSearchResults] = useState([]);
  const [searchIsLoading, setSearchIsLoading] = useState(false);

  const { user } = useContext(UserState);

  const { results, errorDetails, isLoading } = useFetch(
    `${MY_COMPLAINT_URL}?email=${user.email}`
  );

  if (isLoading) return <Loading />;

  if (Object.keys(errorDetails)?.length !== 0) return <PageError />;

  let complaints = results.res;
  if (searchResults.length !== 0) complaints = searchResults;

  // if (searchIsLoading) return <Loading />;
  console.log(searchIsLoading);

  return (
    <Container fullwidth sx={{ backgroundColor: "#FAFAFA" }}>
      <Title />
      <SearchComplaint
        setSearchResults={setSearchResults}
        user={user}
        setSearchIsLoading={setSearchIsLoading}
      />
      <SearchButtons state={state} setState={setState} />
      {searchIsLoading ? (
        <Loading />
      ) : (
        <ComplaintList
          state={state}
          setState={setState}
          complaints={complaints}
        />
      )}
    </Container>
  );
};

export default MigrantLayout;
