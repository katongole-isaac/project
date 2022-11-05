import useFetch from "../../useFetch";
import PageError from "../PageError";
import SkeletonLoading from "../SkeletonLoading";
import MinistryAgenciesListItem from "./MinistryAgencyListItem";

const AGENCY_NAMES_URL = `/ministry/view`;
const MinistryAgenciesList = () => {
  const { results, isLoading, errorDetails } = useFetch(AGENCY_NAMES_URL);

  if (isLoading) return <SkeletonLoading />;

  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  console.log(results);

  return (
    <>
      <MinistryAgenciesListItem></MinistryAgenciesListItem>
    </>
  );
};

export default MinistryAgenciesList;
