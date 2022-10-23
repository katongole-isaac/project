import { FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const TextComplaint = ({
  complaintDesc,
  setComplaintDesc,
  setCompDescError,
  compDescError,
}) => {
  const handleChange = ({ target }) => {
    setComplaintDesc(target.value);
    setCompDescError(false);
  };
  return (
    <>
      {compDescError && (
        <Typography className="text-danger " sx={{ p: 0.5 }}>
          Too short description...
        </Typography>
      )}
      <FormControl fullWidth>
        <TextareaAutosize
          label="complaint"
          placeholder="you can explain your complaint here"
          value={complaintDesc}
          margin="normal"
          minRows={6}
          onChange={(e) => handleChange(e)}
          sx={{ padding: 1 }}
        />
      </FormControl>
    </>
  );
};

export default TextComplaint;
