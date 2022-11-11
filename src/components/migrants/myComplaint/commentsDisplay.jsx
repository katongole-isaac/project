import useFetch from "../../../useFetch";
import { useState } from "react";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import ReactHtmlParser from "react-html-parser";

const COMMENT_URL = `/comments/my`;

const Comments = ({ _id }) => {
  const { results, isLoading, errorDetails } = useFetch(
    `${COMMENT_URL}?id=${_id}`
  );

  if (isLoading)
    return (
      <>
        <Skeleton variant="rectangular" sx={{ m: 1, height: "60px" }} />
        <Skeleton variant="rectangular" sx={{ m: 1, height: "60px" }} />
        <Skeleton variant="rectangular" sx={{ m: 1, height: "60px" }} />
        <Skeleton variant="rectangular" sx={{ m: 1, height: "60px" }} />
        <Skeleton variant="rectangular" sx={{ m: 1, height: "60px" }} />
        <Skeleton variant="rectangular" sx={{ m: 1, height: "60px" }} />
      </>
    );

  if (Object.keys(errorDetails).length !== 0 )
    return (
      <>
        <Typography className="text-danger">
          failed to fetch the comments, try again
        </Typography>
      </>
    );

  const { comments } = results;

  if (comments === null) return <NoComment />;

  if (comments.length === 0) return <NoComment />;

  return (
    <>
      {comments.comments.map((comment) => {
        return (
          <>
            <CommentStyle key={comment.commentDate} {...comment} />
          </>
        );
      })}
    </>
  );
};

export default Comments;

const CommentStyle = ({ commentAuthor, comment, commentDate }) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Typography variant="body2" m={1} className="text-smaall">
        {commentAuthor}
      </Typography>
      <Stack spacing={0.5}>
        <Typography variant="body2" m={1}>
          {ReactHtmlParser(comment)}
          <span className="text-muted">
            <small>{new Date(parseInt(commentDate)).toDateString()}</small>
          </span>
        </Typography>
      </Stack>
    </Box>
  );
};

const NoComment = () => (
  <Typography textAlign="center" variant="body1" className="text-muted">
    No comments yet
  </Typography>
);
