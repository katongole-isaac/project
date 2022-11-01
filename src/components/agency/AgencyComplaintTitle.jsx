import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const colors = ["#2a9d8f", "#00b4d8", "#00afb9", "#34a0a4"];
const AgencyComplaintTitle = () => {
  return (
    <>
      <Box sx={{ height: "6%", width: "100%", m: 1, display: "flex" }}>
        {/* <Typography variant="h6">Agency Title here</Typography> */}
        {colors.map((color) => (
          <CardItem key={color} bg={color} />
        ))}
      </Box>
    </>
  );
};

export default AgencyComplaintTitle;

const CardItem = ({ bg }) => {
  return (
    <>
      <Card sx={{ flexGrow: 1, height: "100%", mr: 1, backgroundColor: bg }}>
        <CardContent>
          <Stack sx={{ color: "#03071e" }}>
            <Typography variant="h5"> Total Complaints </Typography>
            <Typography variant="h4"> 8 </Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
