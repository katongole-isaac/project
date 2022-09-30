import { makeStyles } from "@mui/styles";

const drawerWidth = 240;
const containerMarginTop = 65;
const useAgencyStyles = makeStyles({
	title: {
		flexGrow: 1,
	},
	drawer: {
		width: drawerWidth,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	appbar: {
		maxWidth: `calc(100% - ${drawerWidth}px)`,
	},
	page: {
		display: "flex",
	},
	toolbar: {
		marginTop: containerMarginTop,
	},
	accounts_table: {
		display: "flex",
		width: "100%",
	},
	dataGrid: {
		flexGrow: 1,
	},
	pageContent: {
		width: `calc(100vw - ${drawerWidth}px)`,
	},
});

export default useAgencyStyles;
