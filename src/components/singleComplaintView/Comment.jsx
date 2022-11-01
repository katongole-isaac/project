import { Box, Grid, Stack, Typography } from "@mui/material";
import useComplaintStyle from "./styles";
import ReactHTMLParser from "react-html-parser";
import { useContext } from "react";
import { SingleComplaintContext } from "./SingleComplaintView";

const Comment = ({ comment, commentAuthor, commentDate }) => {
  const classes = useComplaintStyle();
  // const { res } = useContext(SingleComplaintContext);
  // const { comment, commentAuthor, commentDate } = res;
  return (
    <>
      <Box className={classes.commentContainer}>
        <Grid container spacing={1} sx={{ padding: 2 }}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Stack>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {commentDate ? new Date(commentDate).toDateString() : ""}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                CommentBy: {commentAuthor || ""}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8}>
            <Typography variant="body2">{ReactHTMLParser(comment)}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Comment;
