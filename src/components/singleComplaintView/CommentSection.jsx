import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import Comment from "./Comment";
import { SingleComplaintContext } from "./SingleComplaintView";

const CommentSection = () => {
  const { comments: commentsFetched, _comments: _comment } = useContext(
    SingleComplaintContext
  );
  const { comments } = commentsFetched;

  if (comments.length === 0) return;
 
  return (
    <>
      {comments.map((comment) => {
        return (
          <>
            <Box sx={{ p: 1 }}>
              <Comment {...comment} />
            </Box>
          </>
        );
      })}
    </>
  );
};

export default CommentSection;
