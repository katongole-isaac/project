import { FormControl, TextField } from "@mui/material";
import { useState } from "react";

const TextReason = ({ reason, setReason, reasonErr, setReasonErr }) => {
  const handleChange = ({ target }) => {
    setReason(target.value);
    setReasonErr(false);
  };
  return (
    <>
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <TextField
          label="Reason"
          sx={{ m: 1, width: "40ch" }}
          placeholder="enter a brief reason why you're complaining"
          value={reason}
          margin="normal"
          size="small"
          onChange={(e) => handleChange(e)}
          error={reasonErr}
          helperText={reasonErr ? "reason must atleast have 5 char(s).." : ""}
        />
      </FormControl>
    </>
  );
};

export default TextReason;
