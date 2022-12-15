import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import {
  email as emailValidate,
  nameValidate,
  passport as passportValidate,
  password as passValidate,
  phoneValidate,
} from "../validate";
import { useEffect } from "react";

const SignUpComp = ({
  isLogin,
  url,
  loginFunc,
  data,
  setData,
  error,
  setError,
  isLoading,
  register,
  title,
  selectItems,
  signup,
}) => {
  const accountCreationMsg = "Account has been created";
  const formTitle = title ?? "Create Account";
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passportError, setPassportError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectError, setSelectError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [religionError, setReligionError] = useState(false);
  const [tribeError, setTribeError] = useState(false);
  const [ninError, setNinError] = useState(false);

  const handleChange = ({ target }) => {
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPassportError(false);
    setPasswordError(false);
    setPhoneError(false);
    setSelectError(false);
    setAgeError(false);
    setTribeError(false);
    setReligionError(false);
    setNinError(false);

    setData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };
  const {
    firstname,
    lastname,
    email,
    passport,
    password,
    phone,
    agency,
    gender,
    age,
    tribe,
    religion,
    marital,
    nin,
  } = data;

  const regexp = /^[a-zA-Z\s]{3,}$/;
  const ninRegexp = /^C(M|F)[a-zA-Z\d]{12}$/i; //NIN

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPassportError(false);
    setPasswordError(false);
    setPhoneError(false);
    setNinError(false);

    const isFirstName = await nameValidate({ name: firstname });
    const isLastName = await nameValidate({ name: lastname });
    const isEmail = await emailValidate({ email });
    const isPassword = await passValidate({ password });
    const isPhone = await phoneValidate({ phone: phone });
    const isPassport = await passportValidate({ passport });
    const isReligon = regexp.test(religion);
    const isTribe = regexp.test(tribe);
    const isAge = /^\d{2}$/.test(age);
    const isNIN = ninRegexp.test(nin);

    if (isFirstName === false) {
      setFirstNameError(true);
      return;
    }
    if (isLastName === false) {
      setLastNameError(true);
      return;
    }
    if (isEmail === false) {
      setEmailError(true);
      return;
    }
    if (isPhone === false) {
      setPhoneError(true);
      return;
    }
    if (isPassword === false) {
      setPasswordError(true);
      return;
    }

    if (isPassport === false) {
      setPassportError(true);
      return;
    }

    if (isNIN === false) {
      setNinError(true);
      return;
    }

    if (isAge === false || age < 17) {
      setAgeError(true);
      return;
    }
    if (isTribe === false) {
      setTribeError(true);
      return;
    }

    if (isReligon === false) {
      setReligionError(true);
      return;
    }
    if (signup && agency == "") {
      setSelectError(true);
      return;
    }

    if (isLogin || signup) {
      await loginFunc(url, data);
    } else if (!signup) {
      const res = await register(url, data);
      if (res.status >= 200 && res.status <= 299) {
        setSuccess(true);
        setData((prev) => {
          return {
            ...prev,
            firstname: "",
            lastname: "",
            email: "",
            passport: "",
            password: "",
            phone: "",
            agency: "",
            gender: "M",
          };
        });
      }
    }
  };

  return (
    <div className={signup ? "container-register" : "agency-register"}>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={8} md={6} lg={4} sx={{ marginTop: 4 }}>
          <Paper sx={{ padding: 2 }} elevation={3}>
            {error && <Alert severity="error">{error}</Alert>}
            {success && (
              <Alert severity="success"> {accountCreationMsg} </Alert>
            )}
            <Typography variant="h4" align="center" sx={{ color: "#0C2D48" }}>
              {formTitle}
            </Typography>
            <hr style={{ color: "#0C2D48" }} />
            <form action="" autoComplete="off">
              <Box sx={{ display: "flex", mb: 1 }}>
                <FormControl>
                  <TextField
                    variant="standard"
                    label="firstname"
                    onChange={handleChange}
                    value={firstname}
                    name="firstname"
                    size="small"
                    error={firstNameError}
                    helperText={firstNameError && "invalid name format... "}
                  />
                </FormControl>
                <FormControl sx={{ marginLeft: 3 }}>
                  <TextField
                    variant="standard"
                    label="lastname"
                    onChange={handleChange}
                    size="small"
                    name="lastname"
                    value={lastname}
                    error={lastNameError}
                    helperText={
                      lastNameError && "name should contain only char(s)... "
                    }
                  />
                </FormControl>
              </Box>
              <FormControl fullWidth sx={{ margin: 1 }}>
                <TextField
                  variant="standard"
                  label="email"
                  onChange={handleChange}
                  name="email"
                  value={email}
                  size="small"
                  type="email"
                  error={emailError}
                  helperText={emailError && "invalid email.."}
                />
              </FormControl>
              <FormControl fullWidth sx={{ margin: 1 }}>
                <TextField
                  variant="standard"
                  label="Tel"
                  onChange={handleChange}
                  value={phone}
                  name="phone"
                  size="small"
                  type="tel"
                  error={phoneError}
                  helperText={phoneError && "Invalid phone number format"}
                />
              </FormControl>
              <FormControl fullWidth sx={{ margin: 1 }}>
                <TextField
                  variant="standard"
                  label="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  size="small"
                  type="password"
                  error={passwordError}
                  helperText={
                    passwordError &&
                    "password must contains chars , digits or symbols of length 6  e.g Ex@mp1e "
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ margin: 1 }}>
                <TextField
                  variant="standard"
                  label="Passport No."
                  value={passport}
                  name="passport"
                  size="small"
                  onChange={handleChange}
                  type="text"
                  error={passportError}
                  helperText={
                    passportError && "valid passport format e.g A780934921"
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ margin: 1 }}>
                <TextField
                  variant="standard"
                  label="NationalID"
                  value={nin}
                  name="nin"
                  size="small"
                  onChange={handleChange}
                  type="text"
                  error={ninError}
                  helperText={
                    ninError && "valid NationalID format e.g CM0238FV23AD8A"
                  }
                />
              </FormControl>

              <FormControl fullWidth sx={{ margin: 1 }}>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  defaultValue="male"
                  value={gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="M"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="F"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>

              <Box sx={{ display: "flex" }}>
                <FormControl sx={{ mr: 1 }}>
                  <TextField
                    label="Age"
                    type="number"
                    name="age"
                    onChange={handleChange}
                    value={age}
                    variant="standard"
                    size="small"
                    error={ageError}
                    helperText={
                      ageError && "age must be 18 and above and only digit"
                    }
                  />
                </FormControl>
                <FormControl sx={{ mr: 1 }}>
                  <TextField
                    label="Tribe"
                    type="text"
                    name="tribe"
                    onChange={handleChange}
                    value={tribe}
                    variant="standard"
                    size="small"
                    error={tribeError}
                    helperText={
                      tribeError && "only char(s) and atleast 3 char(s)"
                    }
                  />
                </FormControl>
                <FormControl sx={{ mr: 1 }}>
                  <TextField
                    label="Religion"
                    type="text"
                    name="religion"
                    onChange={handleChange}
                    value={religion}
                    variant="standard"
                    size="small"
                    error={religionError}
                    helperText={
                      religionError && "length must be 3 and only char(s)"
                    }
                  />
                </FormControl>
              </Box>
              <FormControl fullWidth sx={{ margin: 1 }}>
                <FormLabel>Marital Status</FormLabel>
                <RadioGroup
                  row
                  name="marital"
                  defaultValue="single"
                  value={marital}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="married"
                    control={<Radio />}
                    label="Married"
                  />
                  <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label="Single"
                  />
                </RadioGroup>
              </FormControl>

              {signup && (
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel> Agency</InputLabel>
                  {isLoading ? (
                    <CircularProgress />
                  ) : selectItems !== null || selectItems !== " undefined" ? (
                    selectItems?.length !== 0 && (
                      <>
                        {
                          <Select
                            label="Agency"
                            name="agency"
                            size="small"
                            error={selectError}
                            value={agency}
                            onChange={handleChange}
                          >
                            {selectItems?.map((item) => (
                              <MenuItem value={item.name}>{item.name}</MenuItem>
                            ))}
                          </Select>
                        }
                      </>
                    )
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
              <Button onClick={handleSubmit}>Register </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUpComp;
