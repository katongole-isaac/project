import CircularProgress from "@mui/material/CircularProgress";
import {Grid }from '@mui/material'
const Loading = () => {
	return (
		<>
			<Grid container sx={{ height: "90vh" }} justifyContent="center">
				<Grid item xs={8} alignSelf="center" textAlign="center">
					<CircularProgress color="inherit" />
				</Grid>
			</Grid>
		</>
	);
};

export default Loading;
