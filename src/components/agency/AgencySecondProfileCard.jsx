import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import { UserState } from "../../userContext";

const AgemcySecondProfileCard = () => {
  const { user } = useContext(UserState);

  return (
    <>
      <Card
        sx={(theme) => {
          return {
            width: "97%",
            p: 1,
            m: 1,
            backgroundColor: "purple  ",
            [theme.breakpoints.up("lg")]: {
              height: "100%",
            },
          };
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CardMedia>
            <Avatar sx={{ width: "120px", height: "120px" }}>
              {user.name.charAt(0).toUpperCase()}
            </Avatar>
          </CardMedia>
          <CardContent>
            <Stack>
              <StackItem property="Name" value="Name value" />
              <StackItem property="Name" value="Name value" />
              <StackItem property="Name" value="Name value" />
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
export default AgemcySecondProfileCard;

const StackItem = ({ property, value }) => (
  <Stack direction="row" spacing={2}>
    <Typography variant="body1">{property} </Typography>
    <Typography variant="body1">{value} </Typography>
  </Stack>
);
