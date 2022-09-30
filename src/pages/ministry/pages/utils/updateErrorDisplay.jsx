import { Dialog, DialogTitle, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const UpdateError = ({ updateError, setUpdateError }) => {
	const handleClose = () => {
		setUpdateError((prev) => {
			return {
				...prev,
				isOpen: false,
			};
		});
	};
	return (
		<>
			<Dialog open={updateError.isOpen} onClose={handleClose}>
				<DialogTitle sx={{ display: "flex" }}>
					<ErrorIcon color="error" />
					<Typography variant="body1" sx={{ mr: 1, ml: 1 }} color="error">
						{updateError.msg}
					</Typography>
				</DialogTitle>
			</Dialog>
		</>
	);
};

export default UpdateError;
