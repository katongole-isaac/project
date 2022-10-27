import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { SingleComplaintContext } from "./SingleComplaintView";

const BASE_URL = `http://localhost:3001`;

export default function ComplaintBioInfo() {
  const { res, classes, profilePic } = useContext(SingleComplaintContext);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Avatar
            src={`${BASE_URL}${profilePic}`}
            sx={{ width: "60px", height: "60px" }}
          />
          <Typography variant="body2">
            <strong> {res.fullname} </strong>
          </Typography>
          <Typography variant="body2">
            <strong> &lt; {res.email} &gt;</strong>
          </Typography>
        </Stack>
        <Box>
          <Typography variant="body2">
            {parseInt(res.date)
              ? new Date(parseInt(res.date)).toLocaleString()
              : res.date}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
