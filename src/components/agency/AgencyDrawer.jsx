import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import useAgencyStyles from "../../agency";

const AgencyDrawer = () => {
	const classes = useAgencyStyles();
	const navLink = [
		{
			name: "Complaints",
			path: "/agency",
			icon: `${(<LocalPostOfficeIcon />)}`,
		},
		{
			name: "Add Migrant",
			path: "/agency/create",
			icon: `${(<LocalPostOfficeIcon />)}`,
		},
		{
			name: "Accounts",
			path: "accounts",
			icon: `${(<LocalPostOfficeIcon />)}`,
		},
	];
	return (
		<>
			<Drawer
				anchor="left"
				variant="permanent"
				className={classes.drawer}
				classes={{ paper: classes.drawerPaper }}
			>
				<Typography variant="h6">Agency Dash</Typography>
				<AgencyList navLink={navLink} />
			</Drawer>
		</>
	);
};

export default AgencyDrawer;

const AgencyList = ({ navLink }) => {
	return (
		<div>
			<List>
				{navLink.map((link) => {
					return (
						<>
							<ListItem disablePadding key={link.name}>
								<Link to={link.path}>
									<ListItemButton>
										{link.name === "Complaints" && (
											<ListItemIcon>
												<TextSnippetIcon />
											</ListItemIcon>
										)}
										{link.name === "Add Migrant" && (
											<ListItemIcon>
												<PersonAddIcon />
											</ListItemIcon>
										)}
										{link.name === "Accounts" && (
											<ListItemIcon>
												<LocalPostOfficeIcon />
											</ListItemIcon>
										)}
										<ListItemText primary={link.name} />
									</ListItemButton>
								</Link>
							</ListItem>
						</>
					);
				})}
			</List>
		</div>
	);
};
