import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect } from "react";
import authFetch from "../../../../authFetch";

const DeleteUser = ({ param, setConfirmOpen, setParam }) => {
  const handleClick = () => {
    setConfirmOpen(true);
    setParam(param.id);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <DeleteIcon sx={{ color: red[800] }} />
      </IconButton>
    </>
  );
};

export default DeleteUser;
