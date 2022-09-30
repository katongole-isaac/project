import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
	return {
		toolbar: {
			display: "flex",
			justifyContent: "space-between",
		},
		list: {
			display: "flex",
		},
		pageUpperSpace: {
			height: 80,
		},
	};
});

const Layout = () => {
	const links = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "login",
			path: "login",
		},
		{
			name: "sigUp",
			path: "signup",
		},
	];
	const classes = useStyles();
	const { toolbar, list, pages, pageUpperSpace } = classes;

	return (
		<>
			<AppBar color="transparent" elevation={2} sx={{ color: "black", backgroundColor: '#C3E0E5' }}>
				<Toolbar className={toolbar}>
					<Typography variant="h6" sx={{color: '#0C2D48'}}  > Immigrant Worker Incident Management System</Typography>

					<List className={list}>
						{links.map((link) => (
							<SingleList {...link} key={link.name} />
						))}
					</List>
				</Toolbar>
			</AppBar>

			<div className={pages}>
				<div className={pageUpperSpace}> </div>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;

const SingleList = ({ name, path }) => {
	return (
		<ListItem>
			<Button variant="text">
				<Link to={path} className="toolbar-link lis">
					<ListItemText primary={name} className="lis" />
				</Link>
			</Button>
		</ListItem>
	);
};
