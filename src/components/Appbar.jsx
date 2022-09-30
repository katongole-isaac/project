import { AppBar, IconButton, Toolbar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@mui/styles";
import { signOut, UserState } from "../userContext";
import { useContext, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerContext } from "../pages/Dashboard";

const useStyles = makeStyles({});

const AppMenu = () => {
	const btnRef = useRef();
	const { dispatch, id,  user } = useContext(UserState);
	const { setDrawerStatus, drawerStatus } = useContext(DrawerContext);

	const showHideDrawer = () => {
		setDrawerStatus((value) => !value);
	};

	useEffect(() => {
		const isDrawerOpen = (e) => {
			if (e.path[0] !== btnRef.current) {
				setDrawerStatus(false);
			}
		};

		document.body.addEventListener("click", isDrawerOpen);

		return () => {
			document.body.addEventListener("click", isDrawerOpen);
		};
	}, [drawerStatus]);

	return (
		<AppBar
			sx={{
				width: `100%`,
				backgroundColor: "#263238",
				color: "black",
			}}
			elevation={0}
		>
			<Toolbar className="d-flex justify-content-between">
				<Typography variant="h6" component="div">
					<MenuIcon
						onClick={showHideDrawer}
						ref={btnRef}
						sx={{ marginRight: 2, color: "white" }}
					/>
					Dashboard
				</Typography>
				<div className="d-flex">
					<Typography variant="h6" component="div" className="text-muted">
						Hi, {user && user.firstname}
					</Typography>
					<IconButton onClick={() => signOut(dispatch, id)}>
						<LogoutIcon />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default AppMenu;
