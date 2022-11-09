import { Dialog } from "@mui/material";

const AvatarDialog = ({ open, setOpen, imageUrl }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        sx={{ m: 5, p: 5 }}
      >
        <img src={`${imageUrl}`} alt="Profile image " />
      </Dialog>
    </>
  );
};

export default AvatarDialog;
