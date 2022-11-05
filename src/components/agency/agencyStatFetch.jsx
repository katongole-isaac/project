import { Skeleton, Typography } from "@mui/material";
import { useContext } from "react";
import useFetch from "../../useFetch";
import { UserState } from "../../userContext";

const AGENCY_MIGRANTS_URL = `/agency/all/migrants`;

const AgencyStatFetch = ({ _totalLetters, _totalMigrants }) => {
  const { user } = useContext(UserState);
  const { results, isLoading, errorDetails } = useFetch(
    `${AGENCY_MIGRANTS_URL}?name=${user.name}`
  );
  if (isLoading)
    return (
      <>
        <Skeleton variant="rectangular" sx={{ m: 1 }} />
        <Skeleton variant="rectangular" sx={{ m: 1 }} />
      </>
    );

  if (Object.keys(errorDetails).length !== 0)
    return (
      <>
        <Typography className="text-danger">
          failed to fetch the comments
        </Typography>
      </>
    );

  const { totalLetters, totalMigrants } = results;
  console.log(totalLetters, totalMigrants);
  return (
    <>
      {_totalLetters && <Typography variant="h4"> {totalLetters} </Typography>}
      {_totalMigrants && (
        <Typography variant="h4"> {totalMigrants} </Typography>
      )}
    </>
  );
};

export default AgencyStatFetch;
