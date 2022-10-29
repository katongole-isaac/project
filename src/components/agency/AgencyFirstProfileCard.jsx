import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import { firstLetterUpperCase } from "../../utils/firstLetterUpperCase";
import { UserState } from "../../userContext";
import useAgencyStyles from "./agency";

const AgencyFirstProfileCard = ({ user }) => {
  const classes = useAgencyStyles();
  return (
    <>
      <Card
        sx={{
          width: "100%",
          p: 1,
          display: "flex",
          backgroundColor: "#FAFAFA",
        }}
      >
        <Box className={classes.profileCardBox}>
          <CardMedia sx={{ left: -15, position: "relative" }}>
            <Stack spacing={2}>
              <Avatar
                sx={{
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#023047",
                  //   color: ''
                }}
              >
                {user.name.charAt(0).toUpperCase()}
              </Avatar>
              <Box className={classes.profileCardBox}>
                <Chip
                  label="Active"
                  color="success"
                  variant="filled"
                  size="small"
                />
              </Box>
            </Stack>
          </CardMedia>
          <CardContent>
            <Stack>
              <Typography variant="h4" mb={2} sx={{ fontWieght: 700 }}>
                {firstLetterUpperCase(user.name)}
              </Typography>
              <StackItem
                value={firstLetterUpperCase(user.location)}
                {...{ padding: "10px", fontSize: "15px" }}
              />
              <StackItem
                value={firstLetterUpperCase(user.email)}
                {...{ fontSize: "15px" }}
              />{" "}
              <StackItem
                value={firstLetterUpperCase(user.phone)}
                {...{ fontSize: "15px" }}
              />
              <StackItem
                value={new Date(parseInt(user.createdAt)).toDateString()}
                property={"CreatedAt:"}
                {...{ padding: "5px", fontSize: "15px" }}
              />
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
export default AgencyFirstProfileCard;

const StackItem = ({ property, value, ...others }) => (
  <Stack direction="row" spacing={2} sx={{ ...others }}>
    {property && <Typography variant="body1">{property} </Typography>}
    <Typography variant="body1">{value} </Typography>
  </Stack>
);
