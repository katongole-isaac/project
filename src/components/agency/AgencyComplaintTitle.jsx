import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useContext } from "react";
import { AgencyStatContext } from "./AgencyLayout";

const cards = [
  {
    color: "#2a9d8f",
    label: "Total Complaints",
  },
  {
    color: "#00b4d8",
    label: "Total Letters",
  },
  {
    color: "#00afb9",
    label: "Total Complaints",
  },
  {
    color: "#34a0a4",
    label: "Total Complaints",
  },
];

//Statistics card

const AgencyComplaintTitle = ({ user, totalComplaints }) => {
  const { showStat } = useContext(AgencyStatContext);

  const { forwarded, seen, pending, workedUpon } = user.details;
  const [cardContent, setCardContent] = useState([
    {
      color: "#00b4d8",
      label: "Total Letters",
      num: 0,
    },
    {
      color: "#00afb9",
      label: "Total Complaints",
    },
    {
      color: "#34a0a4",
      label: "Total statistics",
      num: seen,
    },
  ]);
  return (
    <>
      {showStat && (
        <Box
          sx={{
            width: "100%",
            m: 1,
            display: "flex",
            mr: 1,
          }}
        >
          {totalComplaints && (
            <CardItem
              label={"Total Complaints"}
              num={totalComplaints}
              bg="#2a9d8f"
            />
          )}
          {/* <Typography variant="h6">Agency Title here</Typography> */}
          {cardContent.map(({ color, label, num }) => (
            <CardItem
              key={color}
              bg={color}
              num={num}
              label={label}
              forwarded={forwarded}
              seen={seen}
              pending={pending}
              workedUpon={workedUpon}
            />
          ))}
          <StatCard
            label="Statistics"
            bg="#ff6b6b"
            pending={pending}
            forwarded={forwarded}
            seen={seen}
            workedUpon={workedUpon}
          />
        </Box>
      )}
    </>
  );
};

export default AgencyComplaintTitle;

const CardItem = ({
  bg,
  label,
  totalComplaints,
  seen,
  forwarded,
  workedUpon,
  pending,
  num,
}) => {
  return (
    <>
      <Card sx={{ flexGrow: 1, mr: 1, backgroundColor: bg }}>
        <CardContent>
          <Stack sx={{ color: "#03071e" }}>
            <Typography variant="h5"> {label}</Typography>
            <ShowTypographyNmber num={num} />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

const ShowTypographyNmber = ({ num }) => (
  <>
    <Typography variant="h4"> {num} </Typography>
  </>
);

const StatCard = ({ label, bg, num, pending, seen, forwarded, workedUpon }) => {
  return (
    <>
      <Card sx={{ flexGrow: 1, mr: 1, backgroundColor: bg }}>
        <Box sx={{ display: "flex", width: "100%", p: 1 }}>
          <Stack sx={{ color: "#03071e" }}>
            <Typography variant="h5"> {label}</Typography>

            <Typography variant="body2"> Pending: {pending}</Typography>
            <Typography variant="body2">Seen: {seen}</Typography>
            <Typography variant="body2">Forwarded: {forwarded}</Typography>
            <Typography variant="body2">WorkedUpon: {workedUpon}</Typography>
          </Stack>
        </Box>
      </Card>
    </>
  );
};
