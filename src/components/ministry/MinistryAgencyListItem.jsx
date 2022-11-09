import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getOneRandomColor } from "../../utils/randomColor";
const MinistryAgenciesListItem = ({ name, location }) => {
  const avatarBgColor = getOneRandomColor();
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
            <Avatar sx={{ backgroundColor: avatarBgColor }}>
              {name[0].toUpperCase()}
            </Avatar>
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
              <Link to={`/ministry/dashboard/complaint/${name}`}>
                <Typography> {name} </Typography>
              </Link>
              <Typography>|</Typography>
              <Typography>{location}</Typography>
              {/* <Typography> letter sent </Typography>
              <Typography> phone</Typography> */}
            </Stack>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default MinistryAgenciesListItem;
