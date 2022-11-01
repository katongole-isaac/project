import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHTMLParser from "react-html-parser";
import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const tooShortMsg = "Too short description... ";
const LetterEditor = ({ setLetterText }) => {
  //   const [letterText, setLetterText] = useState("");
  const [_data, setData] = useState("");
  const [tooShortText, setTooShortText] = useState(false);
  const handleChange = (event, editor) => {
    setTooShortText(false);
    const data = editor.getData();
    setData(data);
  };

  const handleCommit = () => {
    if (_data.length < 100) {
      setTooShortText(true);
      return;
    }
    setLetterText(_data);
  };
  return (
    <>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h6">Write a Letter to ministry</Typography>
          <Typography varaint="body2" className="text-muted">
            NOTE: You can describe the content of the complaint here,
          </Typography>
        </Box>

        <CKEditor
          editor={ClassicEditor}
          placeholder={"description of the complaint here"}
          onChange={(event, editor) => handleChange(event, editor)}
        />
        {tooShortText && (
          <Typography variant="body2" className="text-danger">
            {tooShortMsg}
          </Typography>
        )}

        <Box>
          <Button onClick={handleCommit}> commit changes</Button>
        </Box>
        {/* <p>{ReactHTMLParser(letterText)}</p> */}
      </Stack>
    </>
  );
};

export default LetterEditor;
