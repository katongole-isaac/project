import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ReactHTMLParser from "react-html-parser";
import { Box, Button, Typography } from "@mui/material";
const ComplaintEditor = ({ open, comment, setComment }) => {
  const [reply, setReply] = useState("");
  const text = useRef(null);

  const [showErr, setShowErr] = useState(false);
  const handleChange = (e, editor) => {
    setShowErr(false);
    const data = editor.getData();
    console.log({ e, editor, data });
    setReply(data);
  };

  const handleSend = () => {
    ReactHTMLParser(reply);
    if (text.current.textContent.length < 60) {
      setShowErr(true);
      return;
    }
    console.log(reply);
  };

  return (
    <>
      {open && (
        <>
          <div ref={text} style={{ opacity: 0 }}>
            {ReactHTMLParser(reply)}
          </div>
          <Box sx={{ p: 1 }}>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => handleChange(event, editor)}
              //   onFocus={(event, editor) => handleChange(event, editor)}
            />
            {showErr && (
              <Typography
                padding={0.5}
                marginBottom={1}
                variant="body2"
                className="text-danger"
              >
                Add some more content for reply..
              </Typography>
            )}
            <Tooltip
              title="comment to be attached to complaint"
              placement="right-start"
              arrow
            >
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "lowercase", mt: 1, mb: 1 }}
                onClick={handleSend}
              >
                Attach a comment
              </Button>
            </Tooltip>
          </Box>
        </>
      )}

      {/* <div> {ReactHTMLParser(reply)} </div> */}
    </>
  );
};

export default ComplaintEditor;
