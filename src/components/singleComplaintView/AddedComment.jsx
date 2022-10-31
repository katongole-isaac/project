import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import Comment from "./Comment";
import { SingleComplaintContext } from "./SingleComplaintView";

const AddedComment = () => {
  const { _comment: comments } = useContext(SingleComplaintContext);

  if (comments.length === 0) return;
  console.log(comments[comments.length - 1]);

  return (
    <>
      <Box sx={{ p: 1 }}>
        <Comment {...comments[comments.length - 1]} />
      </Box>
    </>
  );
};

export default AddedComment;
