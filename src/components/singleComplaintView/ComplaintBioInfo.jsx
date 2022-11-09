import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import AvatarDialog from "./AvatarDialog";
import { SingleComplaintContext } from "./SingleComplaintView";

const BASE_URL = `http://localhost:3001`;

export default function ComplaintBioInfo() {
  const { res, classes, profilePic } = useContext(SingleComplaintContext);
  const [openDialog, setOpenDialog] = useState(false);
  const handleShowAvatar = () => {
    setOpenDialog(true);

    console.log(`${BASE_URL}/${profilePic}`);
  };

  return (
    <>
      <AvatarDialog
        open={openDialog}
        setOpen={setOpenDialog}
        imageUrl={`${BASE_URL}/${profilePic}`}
      />
      <Box
        sx={{
          width: "100%",
          p: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={handleShowAvatar}>
            <Avatar
              src={`${BASE_URL}/${profilePic}`}
              sx={{ width: "60px", height: "60px" }}
            />
          </IconButton>
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


