import {
	FormControl,
	Grid,
	Typography,
	Paper,
	TextField,
	Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Container } from "@mui/system";
import { useState } from "react";
import {
	email as emailValidate,
	nameValidate,
	password as passValidate,
	phoneValidate,
	locationValidate,
} from "../../../validate";
import axios from "axios";
import { useRef } from "react";
import MinistryPopUp from "../popUp";
import { useMinistryStyles } from "../../../ministry";

const AGENCY_SIGNUP = `http://localhost:3001/api/agency/signup`;
const CreateUser = () => {
	const formRef = useRef();
	const btnRef = useRef();
	const nameRef = useRef();
	const [data, setData] = useState({
		name: "",
		phone: "",
		email: "",
		password: "",
		location: "",
	});

	const [respStatus, setRespStatus] = useState({
		statusCode: -1,
		msg: "",
		isOpen: false,
	});
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);
	const [locationError, setLocationError] = useState(false);

	const handleChange = ({ target }) => {
		setNameError(false);
		setEmailError(false);
		setPhoneError(false);
		setPasswordError(false);
		setLocationError(false);

		setData((prev) => {
			return {
				...prev,
				[target.name]: target.value,
			};
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { name, phone, email, password, location } = data;
		const isName = await nameValidate({ name });
		const isEmail = await emailValidate({ email });
		const isPassword = await passValidate({ password });
		const isPhone = await phoneValidate({ phone });
		const isLocation = await locationValidate({ location });

		if (!isName) {
			setNameError(true);
			return;
		}
		if (!isEmail) {
			setEmailError(true);
			return;
		}

		if (!isPhone) {
			setPhoneError(true);
			return;
		}
		if (!isPassword) {
			setPasswordError(true);
			return;
		}

		if (!isLocation) {
			console.log(location);
			setLocationError(true);
			return;
		}

		const fd = new FormData(formRef.current);
		console.log(respStatus.statusCode);
		try {
			const resp = await axios.post(AGENCY_SIGNUP, {
				name,
				phone,
				email,
				password,
				location,
			});
			if (resp.status >= 200 || resp.status <= 299) {
				console.log(resp);
				console.log(`...data sent`);
				nameRef.value = "";
				setRespStatus((prev) => {
					return {
						...prev,
						statusCode: 0,
						isOpen: true,
						msg: "Account has been created",
					};
				});
			}
		} catch (ex) {
			console.log(ex);
			setRespStatus((prev) => {
				return {
					...prev,
					msg: ex.response.data?.error ?? ex.response.data,
					isOpen: true,
					statusCode: -1,
				};
			});
		}
	};

	const classes = useMinistryStyles();
	return (
		<Container maxWidth className={classes.createUserContainer}>
			<MinistryPopUp respStatus={respStatus} setRespStatus={setRespStatus} />
			<Grid container justifyContent="center" sx={{ margin: 2 }}>
				<Grid item xs={11} md={8} lg={5} sx={{ marginTop: 5 }}>
					<Paper sx={{ padding: 2 }}>
						<Typography variant="h5" align="center">
							Create Account For Local Recruitment Agency
						</Typography>
						<hr color="info" />
						<form action="" autoComplete="off" ref={formRef}>
							<FormControl fullWidth margin="normal">
								<TextField
									label="Name"
									name="name"
									ref={nameRef}
									error={nameError}
									onChange={(e) => handleChange(e)}
									size="small"
									placeholder="Name of the local Recruitment Agency"
								/>
							</FormControl>
							<FormControl fullWidth margin="normal">
								<TextField
									label="Email"
									name="email"
									error={emailError}
									onChange={(e) => handleChange(e)}
									size="small"
									placeholder="Email of the Local Recruitment Agency"
								/>
							</FormControl>
							<FormControl fullWidth margin="normal">
								<TextField
									label="Telephone"
									name="phone"
									type="phone"
									error={phoneError}
									onChange={(e) => handleChange(e)}
									size="small"
									placeholder="Telephone number of the local Recruitment Agency"
								/>
							</FormControl>
							<FormControl fullWidth margin="normal">
								<TextField
									label="Password"
									name="password"
									type="password"
									error={passwordError}
									onChange={(e) => handleChange(e)}
									size="small"
									placeholder="Password"
								/>
							</FormControl>
							<FormControl fullWidth margin="normal">
								<TextField
									label="location"
									name="location"
									type="text"
									error={locationError}
									onChange={(e) => handleChange(e)}
									size="small"
									placeholder="Telephone number of the local Recruitment Agency"
								/>
							</FormControl>
						</form>
						<Button
							variant="contained"
							endIcon={<SendIcon />}
							onClick={handleSubmit}
						>
							submit
						</Button>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CreateUser;
