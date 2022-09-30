import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import useFetch from "../../../useFetch";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import NotesIcon from "@mui/icons-material/Notes";
import { Link } from "react-router-dom";
import { useStyles } from "../../../styles";
import ComplaintCard from "../../../components/complaintCard";
import Loading from "../../../components/Loading";
import { useContext } from "react";
import { UserState } from "../../../userContext";

const MyComplaints = () => {
	const { user } = useContext(UserState);
	const classes = useStyles();

	const data = {
		fullname: `${user.firstname} ${user.lastname}`,
		email: user.email,
	};

	const { isLoading, error, results } = useFetch(
		`/complaints/views?email=${data.email}`
	);

	if (error) {
		return <>{"error	"}</>;
	}

	if (isLoading) {
		return (
			<>
				<Loading />
			</>
		);
	}

	if (results.res.length === 0) {
		return (
			<>
				<Typography variant="h4">No complaints</Typography>
			</>
		);
	} else {
		return (
			<>
				<Grid container columnSpacing={1}>
					{results.res.map((complaint) => (
						<Grid item xs={12} sm={10} md={4} key={complaint._id}>
							<ComplaintCard {...complaint} />
						</Grid>
					))}
				</Grid>
			</>
		);
	}
};

export default MyComplaints;

// <>
// 	<Typography variant="div">
// 		<Grid container columnSpacing={2} justifyContent="center" marginTop={2}>
// 			<Grid item xs={4}>
// 				<Link to="/" className={classes.complaintLinks}>
// 					<VideoLibraryIcon />
// 					<Typography className={classes.complaintTypo}>Videos</Typography>
// 				</Link>
// 			</Grid>
// 			<Grid item xs={4}>
// 				<Link to="/" className={classes.complaintLinks}>
// 					<AudiotrackIcon />
// 					<Typography>Audio </Typography>
// 				</Link>
// 			</Grid>
// 			<Grid item xs={4}>
// 				<Link to="/" className={classes.complaintLinks}>
// 					<NotesIcon />
// 					<Typography className={classes.complaintTypo}>Text</Typography>
// 				</Link>
// 			</Grid>
// 		</Grid>
// 	</Typography>
// </>
