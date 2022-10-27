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

const TextComplaint = () => {
  const classes = useMyCompStyles();
  return (
    <>
      <Divider> Toady </Divider>

      <Card>
        <Box className={classes.card}>
          <Box className={classes.boxInsideCard}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              complaint Reason
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              complaint Date
            </Typography>
          </Box>

          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              debitis aperiam dolorem nostrum inventore vel adipisci sapiente
              aliquam iusto ex.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              debitis aperiam dolorem nostrum inventore vel adipisci sapiente
              aliquam iusto ex.
            </Typography>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={1}>
              <MyChip color={"warning"} label="pending" />
              <ChatBubbleOutlineIcon fontSize="small" />
            </Stack>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default TextComplaint;
