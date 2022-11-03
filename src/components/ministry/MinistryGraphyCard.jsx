import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import DemoGraph from "./graphs/Demo";

const MinistryGraphCard = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexGrow: 1,
          height: "300px",
          width: "250px",
          m: 1,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Box
          sx={{
            display: "flex",
            border: "1px solid red",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia>
            <DemoGraph />
          </CardMedia>
        </Box>
      </Card>
    </>
  );
};
export default MinistryGraphCard;
