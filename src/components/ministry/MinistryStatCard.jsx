import { Box, Card, CardContent, Typography } from "@mui/material";

const MinistryStatCard = ({ num, label }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexGrow: 1,
          height: "32%",
          width: "100%",
          // m: "auto",
          mb: 1,
          // mr: 1,
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography variant="h3" align="center">
              {num}
            </Typography>
            <Typography variant="h5">{label}</Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default MinistryStatCard;
