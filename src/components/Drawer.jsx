import { LogoutOutlined } from "@mui/icons-material";
import Logout from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, Paper, Typography } from "@mui/material";
import { useStyles } from "../styles";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useContext } from "react";
import { DrawerContext } from "../pages/Dashboard";
import { useEffect } from "react";

const drawerWidth = 270;

const AppDrawer = () => {
	const { drawerStatus, setDrawerStatus } = useContext(DrawerContext);

	const navLinks = [
		{ name: "Complaint", path: "/dashboard" },
		{ name: "My complaint", path: "/dashboard/mycomplaints" },
		{ name: "Profile", path: "/dashboard/profile" },
	];
	const classes = useStyles();

	

	return (
		<Drawer
			anchor="left"
			variant="temporary"
			open={drawerStatus}
			className={classes.drawer}
			classes={{ paper: classes.drawerPage }}
		>
			<Paper
				sx={{ height: "100vh", backgroundColor: "#263238", color: "white" }}
			>
				<Typography variant="h4" align="center" className="p-2">
					<HomeIcon fontSize="large" />
					Dashboard
				</Typography>
				<hr />
				<NavList list={navLinks} />
			</Paper>
		</Drawer>
	);
};

export default AppDrawer;

const NavList = ({ list }) => {
	const classes = useStyles();
	const [active, setActive] = useState(0);

	function ActiveLink(index) {
		return active === index ? classes.active : "";
	}
	const handleChangeActive = (index) => {
		setActive(index);
	};

	return (
		<>
			<List sx={{ marginLeft: 0, marginRight: 0, padding: 0 }}>
				{list.map((item, i) => {
					return (
						<ListItem
							key={item.name}
							disablePadding
							onClick={() => handleChangeActive(i)}
							className={ActiveLink(i)}
						>
							<Link to={item.path} className={classes.drawerLinks}>
								<ListItemButton className={classes.drawerButton}>
									{item.name === "Profile" && (
										<ListItemIcon>
											<AccountCircleIcon className={classes.drawerIcon} />
										</ListItemIcon>
									)}
									{item.name === "Complaint" && (
										<ListItemIcon>
											<ArticleIcon className={[classes.drawerIcon]} />
										</ListItemIcon>
									)}
									{item.name === "My complaint" && (
										<ListItemIcon>
											<DraftsIcon className={classes.drawerIcon} />
										</ListItemIcon>
									)}
									<ListItemText primary={item.name} color="primary" />
								</ListItemButton>
							</Link>
						</ListItem>
					);
				})}
			</List>
		</>
	);
};
