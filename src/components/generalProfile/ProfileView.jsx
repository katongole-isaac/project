import { Chip, Divider, FormControl, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import useGenStyles from "./styles";
import {
  phoneValidate,
  email as emailValidate,
  passport as passportValidate,
} from "../../validate";
import SuccessNotify from "../notify/successNotify";
import { UserState } from "../../userContext";
import authFetch from "../../authFetch";
import { useContext } from "react";
import ChangePassword from "../migrants/complaint/ChangePassword";

const UPDATE_PRO_URL = `/user/accounts/update`;
const MSG = "account updated successfully";
const UPDATE_PASSWD_URL = `/user/update/password`;

const ProfileView = ({ user, setUser }) => {
  const classes = useGenStyles();
  const [data, setData] = useState({
    email: user.email,
    passport: user.passport,
    phone: user.phone,
  });

  const fullname = `${user.firstname} ${user.lastname}`;
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passportError, setPassportError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [onError, setOnError] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  const handleChange = ({ target }) => {
    setEmailError(false);
    setPassportError(false);
    setPasswordError(false);
    setPhoneError(false);

    setData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });

    console.log(target.name, target.value);
  };

  const { email, passport, phone } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmail = await emailValidate({ email });
    const isPhone = await phoneValidate({ phone: phone });
    const isPassport = await passportValidate({ passport });

    if (!isEmail) {
      setEmailError(true);
      return;
    }
    if (isPhone === false) {
      setPhoneError(true);
      return;
    }
    if (isPassport === false) {
      setPassportError(true);
      return;
    }
    try {
      const resp = await authFetch.put(`${UPDATE_PRO_URL}/${user.user}`, {
        _id: user.user,
        ...data,
        firstname: user.firstname,
        lastname: user.lastname,
        accountStatus: user.status,
      });
      if (resp.status >= 200 && resp.status <= 299) {
        setOnSuccess(true);
        //updating the localStorage user
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, ...resp.data.result })
        );
        setUser((prev) => ({ ...prev, ...resp.data.result }));
        console.log(resp.data.result);
      }
    } catch (ex) {
      setOnError(true);
      console.log(ex);
    }
  };

  return (
    <>
      <SuccessNotify
        success={onSuccess}
        setOnSuccess={setOnSuccess}
        onError={onError}
        setOnError={setOnError}
        msg={MSG}
      />
      {showPasswordDialog && (
        <>
          <ChangePassword
            showPasswordDialog={showPasswordDialog}
            setShowPasswordDialog={setShowPasswordDialog}
            UPDATE_PASSWD_URL={UPDATE_PASSWD_URL}
          />
        </>
      )}
      <Box sx={{}}>
        <form autoComplete="off">
          <Box className={classes.formWrapperBox}>
            <Divider>
              <Chip
                label="Bio Information"
                sx={{
                  backgroundColor: "palevioletred",
                  color: "white",
                }}
              />
            </Divider>
            <div className={classes.formDiv}>
              <FormControl>
                <TextField
                  variant="outlined"
                  label="FullName"
                  value={fullname}
                  size="small"
                  disabled
                  margin="normal"
                  sx={{ width: "90%", mr: 0.2 }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  variant="outlined"
                  label="Gender"
                  value={user.gender === "M" ? "Male" : "Female"}
                  name="passport"
                  size="small"
                  type="text"
                  disabled
                  sx={{ width: "80%" }}
                  margin="normal"
                />
              </FormControl>
            </div>
            <FormControl fullWidth sx={{ margin: 1 }}>
              <TextField
                variant="outlined"
                label="email"
                onChange={handleChange}
                name="email"
                value={email}
                size="small"
                type="email"
                sx={{ width: "100%" }}
                error={emailError}
                helperText={emailError ? "Invalid email..." : ""}
              />
            </FormControl>
            <FormControl fullWidth sx={{ margin: 1 }}>
              <TextField
                variant="outlined"
                label="Tel"
                onChange={handleChange}
                value={phone}
                name="phone"
                size="small"
                type="tel"
                sx={{ width: "100%" }}
                error={phoneError}
                helperText={phoneError ? "Invalid phone number..." : ""}
              />
            </FormControl>

            <FormControl fullWidth sx={{ margin: 1 }}>
              <TextField
                variant="outlined"
                label="Passport No."
                value={passport}
                name="passport"
                size="small"
                onChange={handleChange}
                type="text"
                sx={{ width: "100%" }}
                error={passportError}
                helperText={passportError ? "Invalid passport number..." : ""}
              />
            </FormControl>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={(e) => handleSubmit(e)}
                sx={{
                  textTransform: "lowercase",
                  backgroundColor: "palevioletred",
                  "&:hover": {
                    backgroundColor: "palevioletred",
                    opacity: 0.8,
                  },
                }}
              >
                save changes
              </Button>
              <Button
                variant="contained"
                onClick={() => setShowPasswordDialog(true)}
                sx={{
                  textTransform: "lowercase",
                  backgroundColor: "palevioletred",
                  "&:hover": {
                    backgroundColor: "palevioletred",
                    opacity: 0.8,
                  },
                }}
              >
                change password
              </Button>
            </Stack>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default ProfileView;
