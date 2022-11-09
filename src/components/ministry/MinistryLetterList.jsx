import { Box, List, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import Loading from "../Loading";
import NoContent from "../NoContent";
import PageError from "../PageError";
import MinistryLetterCard from "./MinistryLetterCard";
import MinistryLetterListNav from "./MinistryLetterListNav";

const LETTER_URL = `/ministry/view/agency`;

const colors = [
  "#003049",
  "#2a9d8f",
  "#e63946",
  "#ccdbfd",
  "#312244",
  "#000814",
  "#01497c",
  "#011627",
  "#60d394",
  "#ff5c8a",
];
const randomColor = (colors) => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
};

const MinistryLetterList = () => {
  const { agencyName } = useParams();

  const { results, isLoading, errorDetails } = useFetch(
    `${LETTER_URL}/${agencyName}`
  );

  if (isLoading) return <Loading />;
  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  const { letters } = results;

  if (letters.length === 0)
    return (
      <NoContent
        msg={`No letters for ${agencyName}`}
        back="/ministry/dashboard/complaint"
      />
    );

  console.log(letters);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          height: "90vh",
          padding: 1,
        }}
      >
        <Box>
          <Typography variant="h6">
            {" "}
            List of Letters sent by {agencyName}{" "}
          </Typography>
        </Box>
        <MinistryLetterListNav />
        <Box sx={{ pl: 3, pr: 3, pt: 2 }}>
          <List>
            {letters.map((letter) => {
              let color = randomColor(colors);
              return <MinistryLetterCard {...letter} />;
            })}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default MinistryLetterList;
