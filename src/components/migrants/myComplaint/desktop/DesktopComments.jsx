import { Box, Button } from "@mui/material";
import { useState } from "react";
import Comments from "../commentsDisplay";

const DesktopComment = ({ complaintId }) => {
  const [showComment, setComment] = useState(false);
  const handleShowComment = () => {
    setComment((prev) => !prev);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Button onClick={handleShowComment}>
          {!showComment ? "show comment" : "hide comment"}
        </Button>
        {showComment && (
          <>
            <Comments _id={complaintId} />
          </>
        )}
      </Box>
    </>
  );
};

export default DesktopComment;
