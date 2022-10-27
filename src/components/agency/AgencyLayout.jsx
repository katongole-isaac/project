import { Outlet } from "react-router-dom";
import useAgencyStyles from "../../agency";
import AgencyAppBar from "./AgencyAppBar";
import AgencyDrawer from "./AgencyDrawer";

const AgencyLayout = () => {
	const classes = useAgencyStyles();

	return (
		<>
			<AgencyAppBar />
			<div className={classes.page}>
				<AgencyDrawer />
				<div className={classes.pageContent}>
					<div className={classes.toolbar}></div>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default AgencyLayout;
