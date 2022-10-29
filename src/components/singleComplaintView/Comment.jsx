import { Box, Grid, Stack, Typography } from "@mui/material";
import useComplaintStyle from "./styles";

const Comment = () => {
  const classes = useComplaintStyle();
  return (
    <Box className={classes.commentContainer}>
      <Grid container spacing={1} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={3} lg={2}>
          <Stack>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              comment Date
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              comment Author
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit
            deserunt inventore, nostrum aspernatur quaerat itaque possimus! Quos
            maiores numquam quia nam doloremque atque totam iste fuga deserunt
            dolore a illum rem, laudantium, dolorem mollitia tempore natus non
            repellat amet itaque ut architecto temporibus. Nemo accusamus ut
            suscipit at, accusantium sint ipsum voluptates dolor, provident non
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Comment;
