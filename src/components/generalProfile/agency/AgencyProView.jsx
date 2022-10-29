import { Chip, Divider, FormControl, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import useGenStyles from "../styles";
import { Box } from "@mui/system";
import {
  phoneValidate,
  email as emailValidate,
  locationValidate,
  nameValidate,
} from "../../../validate";
import SuccessNotify from "../../notify/successNotify";
import { UserState } from "../../../userContext";
import authFetch from "../../../authFetch";
import { useContext } from "react";
import ChangePassword from "../../migrants/complaint/ChangePassword";

const UPDATE_PRO_URL = `/agency/account/update`;
const MSG = "account updated successfully";
const UPDATE_PASSWD_URL = `/agency/account/password/update`;

const ProfileView = ({ setUser, user }) => {
  const classes = useGenStyles();
  const [data, setData] = useState({
    email: user.email,
    location: user.location,
    phone: user.phone,
    name: user.name,
  });

  const fullname = `${user.firstname} ${user.lastname}`;
  const [emailError, setEmailError] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [nameError, setNameError] = useState(false);
  const [locationError, setlocationError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [onError, setOnError] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  const handleChange = ({ target }) => {
    setEmailError(false);
    setlocationError(false);
    setPhoneError(false);
    setNameError(false);
    setData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });

    console.log(target.name, target.value);
  };

  const { email, location, phone, name } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmail = await emailValidate({ email });
    const isPhone = await phoneValidate({ phone: phone });
    const islocation = await locationValidate({ location });
    const isName = await nameValidate({ name });

    if (isName === false) {
      setNameError(true);
      return;
    }
    if (!isEmail) {
      setEmailError(true);
      return;
    }
    if (isPhone === false) {
      setPhoneError(true);
      return;
    }
    if (islocation === false) {
      setlocationError(true);
      return;
    }
    try {
      const resp = await authFetch.put(`${UPDATE_PRO_URL}/${user.user}`, {
        _id: user.user,
        ...data,
        status: user.status,
        createdAt: user.createdAt,
      });
      if (resp.status >= 200 && resp.status <= 299) {
        setOnSuccess(true);
        //updating the localStorage user
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, ...resp.data.result })
        );
        setUser((prev) => ({ ...prev, ...resp.data.result })); // updating the view
      }
    } catch (ex) {
      setOnError(true);
      if (ex.response.data?.success === false) setErrorMsg("");
      if (ex.response.data?.error) setErrorMsg(ex.response.data.error);
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
        errorMsg={errorMsg}
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
      <Box
        sx={{
          maxWidth: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form autoComplete="off">
          <Box className={classes.formWrapperBox}>
            <Divider>
              <Chip
                label="Agency Information"
                sx={{
                  backgroundColor: "#219ebc",
                  color: "white",
                }}
              />
            </Divider>
            <FormControl fullWidth sx={{ margin: 1 }}>
              <TextField
                variant="outlined"
                label="Agency Name"
                value={name}
                name="name"
                size="small"
                margin="normal"
                sx={{ width: "90%", mr: 0.2 }}
                onChange={handleChange}
                error={nameError}
                helperText={
                  nameError ? "name must atleast be more than 3 char(s)..." : ""
                }
              />
            </FormControl>

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
                label="location "
                value={location}
                name="location"
                size="small"
                onChange={handleChange}
                type="text"
                sx={{ width: "100%" }}
                error={locationError}
                helperText={
                  locationError ? "location must be atleast 3 char(s) ..." : ""
                }
              />
            </FormControl>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={(e) => handleSubmit(e)}
                sx={{
                  textTransform: "lowercase",
                  backgroundColor: "#219ebc",
                  "&:hover": {
                    backgroundColor: "#219ebc",
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
                  backgroundColor: "#219ebc",
                  "&:hover": {
                    backgroundColor: "#219ebc",
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
