import { makeStyles } from "@mui/styles";

const drawerWidth = 200;
const useStyles = makeStyles({
	div: {
		display: "flex",
	},
	blankSpace: {
		marginTop: 64,
	},

	drawer: {
		width: drawerWidth,
	},
	drawerPage: {
		width: drawerWidth,
	},
	drawerLinks: {
		display: "flex",
		justifyItems: "center",
		color: "whitesmoke",
		textDecoration: "none",
		width: "100%",
		"&:hover": {
			color: "white",
		},
	},
	drawerButton: {
		"&:hover": {
			color: "#cfd8dc",
		},
	},
	paper: {
		width: drawerWidth,
	},

	appbar: {
		width: `calc(100% - ${drawerWidth}px)`,
	},
	outlet: {
		width: "100vw",
		padding: "0 5px",
	},
	"fonts-style": {
		fontSize: 14,
	},
	drawerIcon: {
		color: "whitesmoke",
	},
	active: {
		backgroundColor: "#57606f36",
	},
	videoBox: {
		"max-width": "100%",
		height: "100%",
		marginBottom: 2,
	},
	videoDone: {
		"max-width": "80%",
		alignSelf: "center",
		justifySelf: "center",
	},
	videoBtn: {
		display: "flex",
		width: "100vw",
		justifyItems: "space-between",
	},
	videoContainer: {
		display: "flex",
		justifyContent: "center",
		width: "100%",
	},
	videoDiv: {
		margin: 6,
		width: "100%",
		padding: "1",
		display: "flex",
		justifyContent: "center",
	},
	videoIcon: {
		position: "relative",
		right: -15,
		width: "60%",
		height: "30%",
		"z-index": -1,
		opacity: 0.1,
	},
	audioControls: {
		marginTop: 1,
	},
	description: {
		justifyItems: "center",
		margin: "auto",
		width: "90%",
		marginBottom: 10,
	},
	gridItemLast: {
		alignSelf: "center",
	},
	complaintLinks: {
		display: "flex",
		padding: 2,
		"text-decoration": "none",
		color: "black",
		"&:hover": {
			color: "",
		},
		alignItems: "center",
	},
	complaintTypo: {
		marginLeft: 3,
	},
});

export { useStyles, drawerWidth };
