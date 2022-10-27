import { Grid, Typography } from "@mui/material";


const NoContent = ({ msg }) => {
	return (
		<>
			<Grid
				container
				sx={{ height: "90vh", backgroundColor: "#f8f9fa" }}
				justifyContent="center"
			>
				<Grid item xs={8} alignSelf="center" textAlign="center">
					<Typography variant="body1">{msg}</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default NoContent;
