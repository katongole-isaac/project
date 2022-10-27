import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import useAgencyStyles from "../../agency";
import { signOut, UserState } from "../../userContext";
import { useContext } from "react";

const AgencyAppBar = () => {
	const classes = useAgencyStyles();
	const { user } = useContext(UserState);
	const { dispatch, id } = useContext(UserState);
	return (
		<>
			<AppBar className={classes.appbar}>
				<Toolbar>
					<Typography variant="body1" className={classes.title}>
						Dashboard
					</Typography>
					<Typography>{user.name}</Typography>
					<IconButton onClick={() => signOut(dispatch, id)}>
						<PowerSettingsNewIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default AgencyAppBar;
