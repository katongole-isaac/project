import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import DemoGraph from "./graphs/Demo";

const MinistryGraphCard = ({
  _line,
  _bar,
  _pie,
  _polar,
  _doughnut,
  chartTitle,
  mt,
}) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          // flexGrow: 1,
          // height: "200px",
          width: "250px",
          m: 1,
          p: 1,
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Typography textAlign={"center"} variant="h6" sx={{ m: 1 }}>
            {chartTitle}
          </Typography>
          <CardMedia sx={{ marginTop: mt }}>
            <DemoGraph
              _bar={_bar}
              _line={_line}
              _doughnut={_doughnut}
              _pie={_pie}
              _polar={_polar}
            />
          </CardMedia>
        </Box>
      </Card>
    </>
  );
};
export default MinistryGraphCard;
