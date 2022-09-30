import { Paper, Slide, Dialog, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

const PopUp = ({ respStatus, setRespStatus }) => {
	const handleClose = () => {
		setRespStatus((prev) => {
			return {
				...prev,
				isOpen: false,
			};
		});
	};

	return (
		<Dialog open={respStatus.isOpen} onClose={handleClose}>
			<Paper
				sx={{
					padding: 1,
					height: "60px",
					borderRadius: 2,
					width: "300px",
					maxWidth: "400px",
				}}
			>
				<Grid
					container
					columnSpacing={1}
					justifyContent="center"
					alignContent="center"
					sx={{ height: "100%" }}
				>
					<Grid item sm={2} alignSelf="center">
						{respStatus.statusCode === 0 ? (
							<CheckIcon color="success" />
						) : (
							<ErrorIcon className="text-danger" />
						)}
					</Grid>
					<Grid item sm={8} alignSelf="center" justifySelf="center">
						<Typography
							className={respStatus.statusCode === 0 ? "" : "text-danger"}
						>
							{respStatus.msg}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Dialog>
	);
};

export default PopUp;
