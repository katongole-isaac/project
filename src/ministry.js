import { makeStyles } from "@mui/styles";

const drawerWidth = 240;
const containerMarginTop = 65;
const useMinistryStyles = makeStyles({
	root: {
		display: "flex",
	},
	drawer: {
		width: drawerWidth,
	},
	paperDrawer: {
		width: drawerWidth,
		backgroundColor: "#212529",
	},
	bar: {
		maxWidth: `calc(100% - ${drawerWidth}px)`,
	},
	link: {
		width: "100%",
		textDecoration: "none",
		color: "black",
		"&:hover": {
			color: "lightblue",
		},
	},
	outlet: {
		width: "100%",
		padding: "0 5px",
	},
	title: {
		flexGrow: 1,
	},
	toolbar: {
		marginTop: containerMarginTop,
	},
	createUserContainer: {
		backgroundColor: "#f8f9fa",
		marginBottom: 0,
		height: "92vh",
	},
	dataGrid: {
		display: "flex",
		width: "100%",
	},
	accountsPage: {
		backgroundColor: "",
	},
});

export { useMinistryStyles };
