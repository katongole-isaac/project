import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom";
import AppMenu from "../components/Appbar";
import AppDrawer from "../components/Drawer";
import { useStyles } from "../styles";
import { useContext } from "react";
import { UserState } from "../userContext";

const Dashboard = () => {
	const { user } = useContext(UserState);
	const classes = useStyles();
	return (
		<>
			<AppMenu />
			<div className={classes.blankSpace}></div>
			<div className={classes.div}>
				<AppDrawer />
				<Container maxWidth="xl" sx={{ margin: 0, width: "100%" }}>
					<Outlet />
				</Container>
			</div>
		</>
	);
};

export default Dashboard;
