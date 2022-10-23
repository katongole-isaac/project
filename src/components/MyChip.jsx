import { Chip } from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";

const MyChip = ({ label, color }) => {
  return (
    <>
      <Chip label={label} icon={<PendingIcon />} size="small" color={color} />
    </>
  );
};

export default MyChip;
