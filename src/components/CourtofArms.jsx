import { Box } from "@mui/material";
import coatOfArms from "../images/coatOfArms.png";
export const CourtOfArms = ({ width, height }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          height: "300px",
        }}
      >
        <img src={coatOfArms} width={width} height={height} />
      </Box>
    </>
  );
};
