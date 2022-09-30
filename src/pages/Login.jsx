import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Alert, Button, FormLabel, TextField, Typography } from "@mui/material";
import { password, email } from "../validate";
import { useEffect, useContext } from "react";
import { loginUser, UserState } from "../userContext";

const url = "http://localhost:3001/api/user/login";

const useStyles = makeStyles((theme) => {
	return {
		page: {
			backgroundColor: "#f8f9fa",
		},
		input: {
			margin: 10,
		},
	};
});

const Login = () => {
	const { dispatch, id } = useContext(UserState);

	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const accounts = ["migrant", "agency", "ministry"];
	const [accType, setAccType] = useState(accounts[0]);
	const [error, setError] = useState("");

	const handleChange = ({ target }) => {
		//forms input change
		if (emailError) {
			setEmailError(false);
		}
		if (passwordError) {
			setPasswordError(false);
		}

		setData((prev) => {
			return {
				...prev,
				[target.name]: target.value,
			};
		});
	};

	const handleSelect = (e) => {
		//select option
		setAccType(e.target.value);
	};

	useEffect(() => {
		if (error) {
			//removing error after 3secs
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	}, [error]);

	const navigate = useNavigate(); // for navigation

	//Go to , redirection, for successfull users. login
	const goTo = async (url, data, path) => {
		try {
			const res = await loginUser(url, data);
			localStorage.setItem(`${res.data.user}`, res.data.token);
			localStorage.setItem("user", JSON.stringify({ ...res.data }));
			localStorage.setItem(`id_token`, res.data.user);
			dispatch({ type: "LOGIN", id });

			if (res.data.status && res.data.status === "pending") {
				navigate("/accounts/pending");
				return;
			}

			navigate(path);

			return;
		} catch (ex) {
			if (ex.code === "ERR_NETWORK") {
				setError(ex.message);
				return;
			}
			setError(ex.response.data.message);
			console.log(ex);
			return;
		}
	};

	const finalData = { ...data, accType };

	const handleSubmit = async (e) => {
		e.preventDefault();
		setEmailError(false);
		setPasswordError(false);

		const isEmail = await email({ email: data.email });

		if (isEmail === false) {
			setEmailError(true);
			return;
		}

		if (data.password === "") {
			setPasswordError(true);
			return;
		}
		//check accType
		if (accType === "migrant") {
			goTo(url, finalData, "/dashboard");
			return;
		}

		if (accType === "agency") {
			goTo(url, finalData, "/agency/");
			return;
		}
		if (accType === "ministry") {
			await goTo(url, finalData, "/ministry/dashboard");
			return;
		}
	};

	const classes = useStyles();
	const { page, input } = classes;
	return (
		<Container className={page} maxWidth="false" disableGutters>
			<Grid
				container
				justifyContent="center"
				alignItems="flex-start"
				direction="row"
				spacing={2}
				sx={{ maxHeight: "100vh", height: "88vh" }}
			>
				<Grid item xs={10} sm={8} md={5} lg={4}>
					<Paper elevation={3} sx={{ marginTop: 12 }}>
						{error && <Alert severity="error"> {error} </Alert>}
						<Typography variant="h4" align="center" sx={{ color: "#0C2D48" }}>
							Login
						</Typography>
						<hr />
						<form action="" noValidate autoComplete="off">
							<FormControl fullWidth>
								<InputLabel id="acc" sx={{ margin: 1 }}>
									Account Type
								</InputLabel>
								<Select
									value={accType}
									label="Account Type"
									defaultValue={accType}
									labelId="acc"
									name="account"
									sx={{ margin: 1 }}
									size="small"
									onChange={handleSelect}
								>
									<MenuItem value="migrant"> Migrant</MenuItem>
									<MenuItem value="agency"> Agency</MenuItem>
									<MenuItem value="ministry"> Ministry</MenuItem>
								</Select>
							</FormControl>
							<FormControl fullWidth margin="normal">
								<TextField
									label="Email"
									value={data.email}
									onChange={handleChange}
									name="email"
									size="small"
									error={emailError}
									sx={{ marginLeft: 1, marginRight: 1 }}
								/>
							</FormControl>
							<br />
							<FormControl fullWidth margin="normal">
								<TextField
									label="password"
									type="password"
									value={data.password}
									name="password"
									size="small"
									error={passwordError}
									onChange={handleChange}
									sx={{ marginLeft: 1, marginRight: 1 }}
								/>
							</FormControl>
							<Button
								type="sumbit"
								variant="contained"
								onClick={handleSubmit}
								size="small"
								sx={{ margin: 1 }}
							>
								login
							</Button>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;
