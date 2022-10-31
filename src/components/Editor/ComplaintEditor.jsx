import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ReactHTMLParser from "react-html-parser";
import { Box, Button, Typography } from "@mui/material";
import authFetch from "../../authFetch";
import LoadingButton from "@mui/lab/LoadingButton";

const UPDATE_COMMENT_URL = `/complaints/comment`;
const ComplaintEditor = ({
  open,
  comment,
  setComment,
  _setComment,
  user,
  setOnError,
  complaintId,
  setShowEditor,
}) => {
  const [reply, setReply] = useState("");
  const [data, setData] = useState("");
  const [loadingBtn, setLoadingBtn] = useState(false);

  const text = useRef(null);

  const [showErr, setShowErr] = useState(false);
  const handleChange = (e, editor) => {
    setShowErr(false);
    const data = editor.getData();
    console.log({ e, editor, data });
    setReply(data);
    setComment((prev) => ({
      ...prev,
      msg: reply.trim(),
      author: "Me",
    }));
  };

  const handleSend = async () => {
    ReactHTMLParser(reply);
    if (reply.trim().length < 200) {
      setShowErr(true);
      return;
    }
    setComment((prev) => ({ ...prev, date: new Date() }));
    try {
      setLoadingBtn(true);

      const resp = await authFetch.post(UPDATE_COMMENT_URL, {
        ...comment,
        date: Date.now(),
        id: complaintId,
      });
      if (resp.status >= 200 && resp.status <= 299) {
        _setComment((prev) => [...resp.data.comment.comments]);
        setLoadingBtn(false);
        setShowEditor(false);
        console.log(resp.data.comment.comments);
      }
    } catch (ex) {
      console.log(ex);
      setOnError(ex);
      setLoadingBtn(false);
    }
  };

  return (
    <>
      {open && (
        <>
          <Box sx={{ p: 1 }}>
            <CKEditor
              data={data}
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
              <LoadingButton
                loading={loadingBtn}
                variant="contained"
                size="small"
                loadingIndicator="Attaching..."
                sx={{ textTransform: "lowercase", mt: 1, mb: 1 }}
                onClick={handleSend}
              >
                Attach a comment
              </LoadingButton>
            </Tooltip>
          </Box>
        </>
      )}

      {/* <div> {ReactHTMLParser(reply)} </div> */}
    </>
  );
};

export default ComplaintEditor;
