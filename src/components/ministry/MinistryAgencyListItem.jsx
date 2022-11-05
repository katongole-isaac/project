import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
const MinistryAgenciesListItem = ({}) => {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          minHeight: "5%",
          height: "50px",
          m: 1,
          p: 0.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CardMedia>
            <Avatar> P </Avatar>
          </CardMedia>
          <Box
            sx={{
              p: 1,
              flexGrow: 1,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Stack direction="row" sx={{ width: "100%" }} spacing={1}>
              <Typography> AGencyName </Typography>
              <Typography>|</Typography>
              <Typography>Location</Typography>
              <Typography> |</Typography>
              <Typography> complaints </Typography>
              <Typography> phone</Typography>
            </Stack>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default MinistryAgenciesListItem;
