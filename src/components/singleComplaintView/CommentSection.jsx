import { Box, Typography } from "@mui/material";
import Comment from "./Comment";

const CommentSection = ({ comment }) => {
  return (
    <>
      {comment !== "" && (
        <>
          <Box sx={{ p: 1 }}>
            <Typography variant="body2">{comment}</Typography>
            <Comment />
          </Box>
        </>
      )}
    </>
  );
};

export default CommentSection;
