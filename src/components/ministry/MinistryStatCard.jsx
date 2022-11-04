import { Box, Card, CardContent, Typography } from "@mui/material";

const MinistryStatCard = ({ num, label }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexGrow: 1,
          height: "200px",
          width: "200px",
          m: "auto",
          mb: 1,
          mr: 1,
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
