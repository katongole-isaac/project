import { Box, List } from "@mui/material";
import useFetch from "../../useFetch";
import Loading from "../Loading";
import PageError from "../PageError";
import MinistryLetterCard from "./MinistryLetterCard";

const LETTER_URL = `/letter/view/all `;

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
  const { results, isLoading, errorDetails } = useFetch(LETTER_URL);

  if (isLoading) return <Loading />;
  if (Object.keys(errorDetails).length !== 0) return <PageError />;

  const { letters } = results;
  console.log(letters);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          height: "90vh",
          padding: 5,
        }}
      >
        <List>
          {letters.map((letter) => {
            let color = randomColor(colors);
            return <MinistryLetterCard {...letter} color={color} />;
          })}
        </List>
      </Box>
    </>
  );
};

export default MinistryLetterList;
