import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import MyChip from "../../MyChip";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import useMyCompStyles from "./styles";
import { Stack } from "@mui/system";
import { colorsForComplaintStatus } from "../../../utils/colorsForComplaintStatus";
import Comments from "./commentsDisplay";
import CommentDialog from "./CommentDialog";
import { useState } from "react";
import { blue } from "@mui/material/colors";

const TextComplaint = ({ complaints }) => {
  return (
    <>
      {/* <Divider> Toady </Divider> */}
      {complaints.map((complaint) => {
        if (complaint.desc)
          return <TextCardComp key={complaint._id} {...complaint} />;
      })}
    </>
  );
};

export default TextComplaint;

const TextCardComp = ({ _id, reason, status, desc, sent }) => {
  const classes = useMyCompStyles();
  const color = colorsForComplaintStatus(status);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <CommentDialog
        open={openDialog}
        setOpen={setOpenDialog}
        _id={_id}
        reason={reason}
      />
      <Card sx={{ backgroundColor: "#FAFAFA" }}>
        <Box className={classes.card}>
          <Box className={classes.boxInsideCard}>
            <Stack direction="row" spacing={2} alignItems="center">
              {/* <Typography> ID: {_id}</Typography> */}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {reason}
              </Typography>
            </Stack>
            <Typography variant="body2">
              {new Date(parseInt(sent)).toDateString()}
            </Typography>
          </Box>

          <CardContent>
            <Typography>{desc}</Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <MyChip color={color} label={status} />
              <a
                onClick={() => setOpenDialog(true)}
                className={classes.complaintLinks}
              >
                comments{" "}
              </a>
            </Stack>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
