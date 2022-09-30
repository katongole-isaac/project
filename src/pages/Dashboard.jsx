import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom";
import AppMenu from "../components/Appbar";
import AppDrawer from "../components/Drawer";
import { useStyles } from "../styles";
import { createContext, useContext, useState } from "react";
import { UserState } from "../userContext";

const DrawerContext = createContext();

const Dashboard = () => {
	const {  id } = useContext(UserState);
	const [drawerStatus, setDrawerStatus] = useState(false);

	const classes = useStyles();

	return (
		<>
			<DrawerContext.Provider value={{ drawerStatus, setDrawerStatus }}>
				<div >
					<AppMenu />
					<div className={classes.blankSpace}></div>
					<div className={classes.div}>
						<AppDrawer />
						<div className={classes.outlet}>
							<Outlet />
						</div>
					</div>
				</div>
			</DrawerContext.Provider>
		</>
	);
};

export { Dashboard, DrawerContext };
