import { KeyboardBackspace } from "@mui/icons-material";
import {
	Box,
	Button,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
const usePageError = makeStyles({
	reload: {
		color: "blue",
		"&:hover": {
			textDecoration: "underline",
			cursor: "pointer",
		},
	},
});

const PageError = ({ msg, path }) => {
	const classes = usePageError();
	const message = msg ?? "We couldn't process your request";
	return (
		<>
			<Box
				sx={{
					width: "calc(100vw - 240px )",
					display: "flex",
					justifyContent: "center",
					height: "calc(100vh - 70px )",
					backgroundColor: "#ffffe",
				}}
			>
				<Grid
					container
					flexGrow={1}
					justifyContent="center"
					alignContent="center"
				>
					<Grid item sm={12} md={6} justifyContent="center">
						<Stack direction="row" spacing={1}>
							<Link to={path ?? "#"}>
								<IconButton sx={{ mt: -1 }}>
									<KeyboardBackspace />
								</IconButton>
							</Link>
							<Typography variant="body2">
								{message} {"   "}
								
								<span
									onClick={() => window.location.reload()}
									className={classes.reload}
								>
									Reload
								</span>
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default PageError;
