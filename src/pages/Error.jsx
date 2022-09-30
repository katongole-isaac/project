import { Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<Grid
			container
			sx={{ height: "100vh", backgroundColor: "#fffdff" }}
			justifyContent="center"
		>
			<Grid
				item
				xs={8}
				alignSelf="center"
				alignItems="center"
				textAlign="center"
				sx={{ padding: 5 }}
			>
				<Typography variant="h6">Page Not Found | 404</Typography>
				<Link to="/login" className="error_page_link">
					<Button variant="outlined" size="small" sx={{ mt: 3 }}>
						Back Home
					</Button>
				</Link>
			</Grid>
		</Grid>
	);
};

export default Error;
