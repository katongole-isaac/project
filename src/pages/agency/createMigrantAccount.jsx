import { Alert, Box, Button, Typography, Grid } from "@mui/material";
import { loginUser, UserState } from "../../userContext";
import { useState, useEffect } from "react";
import SignUpComp from "../../components/SignUpComp";
import { useContext } from "react";
import authFetch from "../../authFetch";

const url = "http://localhost:3001/api/user/signup/agency";

const CreateMigrantAccount = () => {
	const { user } = useContext(UserState);

	const title = "Add User Account";
	const errorMsg = "check the fields and try again !!";
	const [data, setData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		passport: "",
		phone: "",
		agency: user.name,
	});
	const [error, setError] = useState("");
	const [isLogin, setIsLogin] = useState(false);

	const loginFunc = async (url, data) => {
		try {
			const res = await authFetch.post(url, data, {
				headers: { "Content-Type": "application/json" },
			});
			return res;
			return res;
		} catch (ex) {
			if (ex.code === "ERR_BAD_REQUEST") {
				setError(ex.response.data.error);
				return;
			} else if (ex.code === "ERR_NETWORK") {
				setError(ex.message);
				return;
			}
			console.log(ex);

			// if (ex.response.data?.error) {
			// 	setError(ex.response.data.error);
			// 	return;
			// }
			// setError(errorMsg);
			// return;
		}
	};

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	}, [error]);

	return (
		<>
			<Grid container>
				<Grid item sm={12} md={6}>
					<SignUpComp
						title={title}
						data={data}
						setData={setData}
						error={error}
						url={url}
						register={loginFunc}
						isLogin={isLogin}
						setError={setError}
						signup={false}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default CreateMigrantAccount;
