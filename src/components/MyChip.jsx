import { Chip } from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";

const MyChip = ({ label, color }) => {
  return (
    <>
      <Chip label={label} size="small" sx={{ backgroundColor: color, color: '#fff' }} />
    </>
  );
};

export default MyChip;
