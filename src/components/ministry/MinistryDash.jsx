import MinistryAppBar from "./Appbar";
import MinistryDrawer from "./MinistryDrawer";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useMinistryStyles } from "../../ministry";

const MinistryDash = () => {
	const classes = useMinistryStyles();
	return (
		<>
			<div className={classes.root}>
				<MinistryAppBar />
				<div>
					<MinistryDrawer />
				</div>

				<div className={classes.outlet}>
					<div className={classes.toolbar}></div>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default MinistryDash;
