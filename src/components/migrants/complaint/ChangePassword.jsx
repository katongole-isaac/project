import { Box, Button, FormControl, TextField } from "@mui/material";
import { useContext, useState } from "react";
import authFetch from "../../../authFetch";
import { UserState } from "../../../userContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DisplaySnack from "../../DisplaySnack";
import PasswordIcon from "@mui/icons-material/Password";

const PASSWD_LEN = 5;
const HELPER_TEXT_NEWPASSWD = `password must be atleast 6 char(s)`;
const HELPER_TEXT_OLDPASSWD = `doesnot match the old password`;

const ChangePassword = ({ showPasswordDialog, setShowPasswordDialog , UPDATE_PASSWD_URL }) => {
  const { user } = useContext(UserState);

  const [oldPasswdError, setOldpasswdError] = useState(false);
  const [newPasswdError, setNewpasswdError] = useState(false);
  // const [oldPasswdCompareError, setOldPasswdCompareError] = useState(false);
  const [showSnack, setShowSnack] = useState(false);

  const [data, setData] = useState({
    oldPass: "",
    newPass: "",
  });

  const handleClose = () => {
    setShowPasswordDialog(false);
  };

  const handleChange = ({ target }) => {
    setOldpasswdError(false);
    setNewpasswdError(false);
    setData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const handleSubmit = async () => {
    if (!data.oldPass) {
      setOldpasswdError(true);
      return;
    }
    if (!data.newPass || data.newPass.length < PASSWD_LEN) {
      setNewpasswdError(true);
      return;
    }

    try {
      const resp = await authFetch.put(UPDATE_PASSWD_URL, {
        id: user.user,
        ...data,
      });
      if (resp.status >= 200 && resp.status <= 299) {
        setShowSnack(true);
        setTimeout(() => {
          setShowPasswordDialog(false);
        }, 2000);

        setTimeout(() => {
          setShowSnack(false);
        }, 5000);
      }
    } catch (ex) {
      setOldpasswdError(true);
      console.log(ex);
    }
  };

  return (
    <>
      <DisplaySnack showSnack={showSnack} setShowSnack={setShowSnack} />
      <Dialog open={showPasswordDialog} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action will change your recent password to the lastest
            password. You are encourage to use alphanumeric and symbols when
            updating your password.
          </DialogContentText>
          <Box>
            <FormControl>
              <TextField
                name="oldPass"
                type="password"
                label="Old Password"
                value={data.oldPass}
                onChange={(e) => handleChange(e)}
                error={oldPasswdError}
                margin="normal"
                size="small"
                helperText={oldPasswdError ? HELPER_TEXT_OLDPASSWD : ""}
              />
            </FormControl>
            <FormControl>
              <TextField
                name="newPass"
                type="password"
                label="New Password"
                value={data.newPass}
                margin="normal"
                size="small"
                onChange={(e) => handleChange(e)}
                error={newPasswdError}
                helperText={newPasswdError ? HELPER_TEXT_NEWPASSWD : ""}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: "",
            }}
            endIcon={<PasswordIcon fontSize="15" />}
          >
            update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChangePassword;
