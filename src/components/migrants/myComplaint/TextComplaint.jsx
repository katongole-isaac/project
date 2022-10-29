import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import MyChip from "../../MyChip";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import useMyCompStyles from "./styles";
import { Stack } from "@mui/system";

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

  return (
    <>
      <Card>
        <Box className={classes.card}>
          <Box className={classes.boxInsideCard}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography> ID: {_id}</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {reason}
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              SentOn: {new Date(parseInt(sent)).toDateString()}
            </Typography>
          </Box>

          <CardContent>
            <Typography>{desc}</Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <MyChip color={"warning"} label={status} />
              <ChatBubbleOutlineIcon fontSize="small" />
            </Stack>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
