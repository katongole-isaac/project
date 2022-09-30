import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import {
	Button,
	CircularProgress,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useContext } from "react";
import { UserState } from "../../../userContext";

const PendingAccounts = () => {
	const { user } = useContext(UserState);

	const handleClick = () => {
		localStorage.removeItem("user");
		let id = localStorage.getItem("id_token");
		localStorage.removeItem(id);
		localStorage.removeItem("id_token");
		window.location.href = "/login";
	};
	return (
		<>
			<Container>
				<Grid container justifyContent="center" padding={3}>
					<Grid
						item
						xs={12}
						md={6}
						justifyContent="center"
						sx={{ padding: 4, backgroundColor: "" }}
					>
						<Typography variant="h6" align="center" sx={{ mb: 2 }}>
							Immigrant Worker Incident Management System
						</Typography>
						<hr className="text-danger" />
						<Typography variant="body1" align="center" sx={{ mb: 2 }}>
							Waiting for Account Approval
						</Typography>

						<Divider />
						<Typography>
							{user.myAgency.name} has received your request. please kindly wait
						</Typography>
						<Divider sx={{ mb: 2 }} />
						<Typography variant="h6" align="center">
							Your Bio Info
						</Typography>

						<Stack>
							<Typography variant="body1" sx={{ mb: 1 }}>
								Fullname: {user.firstname} {user.lastname}
							</Typography>
							<Typography variant="body1" sx={{ mb: 1 }}>
								Email: {user.email}
							</Typography>
							<Typography variant="body1" sx={{ mb: 1 }}>
								Phone: {user.phone}
							</Typography>
							<Typography variant="body1" sx={{ mb: 1 }}>
								Passport: {user.passport}
							</Typography>
							<Typography variant="body1" sx={{ mb: 1 }}>
								Agency {user.myAgency.name}
							</Typography>
							<Typography variant="body1" sx={{ mb: 1 }}>
								Account Status: {user.status}
							</Typography>
						</Stack>

						<Divider sx={{ mt: 2, mb: 2 }} />

						<Typography variant="body2" align="center">
							Thanks
						</Typography>

						<Button
							onClick={handleClick}
							startIcon={<KeyboardBackspaceOutlined />}
						>
							back
						</Button>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default PendingAccounts;
