import { Divider, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/system";
import { useContext } from "react";
import React from "react";
import { Navigate, useParams } from "react-router-dom";

const useTestingStyles = makeStyles({
	listItem: {
		"&:hover": {
			backgroundColor: "#f8f9fa",
			cursor: "pointer",
		},
	},
});

const ComplaintContext = React.createContext();

const SingleComplaint = ({ fullname, desc, email, reason, date, _id }) => {
	return (
		<>
			<ComplaintContext.Provider value={{ fullname, desc, email, reason, _id }}>
				<MyLink />
				<Divider sx={{ backgroundColor: "black" }} />
			</ComplaintContext.Provider>
		</>
	);
};

export default SingleComplaint;

const MyLink = () => {
	const { _id } = useContext(ComplaintContext);
	const classes = useTestingStyles();

	return (
		<>
			<ListItem className={classes.listItem}>
				<MyStack />
			</ListItem>
		</>
	);
};

const MyStack = () => {
	const { fullname, desc, reason, email, date } = useContext(ComplaintContext);
	return (
		<>
			<Stack direction="row" spacing={1}>
				<Typography varaint="body2">
					{`${fullname} ${email} ${reason} ${desc ?? ""} `}{" "}
				</Typography>
			</Stack>
		</>
	);
};
