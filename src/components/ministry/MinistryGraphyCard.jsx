import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import DemoGraph from "./graphs/Demo";

const MinistryGraphCard = ({ _line, _bar, _pie, _doughnut, chartTitle, mt }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexGrow: 1,
          height: "400px",
          width: "250px",
          m: 1,
          backgroundColor: "#f8f9fa",
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
          <Box
            sx={{
              position: "absolute",
              top: 0,
              p: 1,
              width: "100%",
            }}
          >
            <Typography textAlign={"center"} variant="h6">
              {chartTitle}
            </Typography>
          </Box>
          <CardMedia sx={{ marginTop: mt }}>
            <DemoGraph
              _bar={_bar}
              _line={_line}
              _doughnut={_doughnut}
              _pie={_pie}
            />
          </CardMedia>
        </Box>
      </Card>
    </>
  );
};
export default MinistryGraphCard;
