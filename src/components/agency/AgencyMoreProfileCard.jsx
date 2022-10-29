import { Box, Card, CardContent, Stack } from "@mui/material";

const AgencyMoreProfileCard = () => {
  return (
    <>
      <Card sx={{ width: "100%", p: 1, flexGrow: 1, backgroundColor: 'olivedrab' }}>
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <Stack></Stack>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default AgencyMoreProfileCard;
