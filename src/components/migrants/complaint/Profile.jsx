import { Button, FormControl, TextField } from "@mui/material";
import { useContext, useState } from "react";
import authFetch from "../../../authFetch";
import { UserState } from "../../../userContext";

const UPDATE_PASSWD_URL = ``;
const PASSWD_LEN = 5;
const HELPER_TEXT_NEWPASSWD = `password must be atleast 6 char(s)`;
const HELPER_TEXT_OLDPASSWD = `password doesnot match the old password`;

const MigrantPro = () => {
  const { user } = useContext(UserState);

  const [oldPasswdError, setOldpasswdError] = useState(false);
  const [newPasswdError, setNewpasswdError] = useState(false);
  const [oldPasswdCompareError, setOldPasswdCompareError] = useState(false);

  const [data, setData] = useState({
    oldPasswd: "",
    newPasswd: "",
  });

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
    if (!data.oldPasswd) {
      setOldpasswdError(true);
      return;
    }
    if (!data.newPasswd || data.newPasswd.length < PASSWD_LEN) {
      setNewpasswdError(true);
      return;
    }

    try {
      const resp = await authFetch.put(UPDATE_PASSWD_URL, {
        id: user.user,
        ...data,
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <FormControl>
        <TextField
          name="oldPasswd"
          type="password"
          value={data.oldPasswd}
          onChange={(e) => handleChange(e)}
          error={oldPasswdError}
          helperText={oldPasswdCompareError ? HELPER_TEXT_OLDPASSWD : ""}
        />
      </FormControl>
      <FormControl>
        <TextField
          name="newPasswd"
          type="password"
          value={data.newPasswd}
          onChange={(e) => handleChange(e)}
          error={newPasswdError}
          helperText={newPasswdError ? HELPER_TEXT_NEWPASSWD : ""}
        />
      </FormControl>

      <Button onClick={handleSubmit}> update </Button>
    </>
  );
};

export default MigrantPro;
