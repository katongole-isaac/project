import {
	IconButton,
	Container,
	Box,
	Button,
	Typography,
	Divider,
	ButtonGroup,
	Grid,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import { makeStyles } from "@mui/styles";
import ReactPlayer from "react-player";
import useFetch from "../useFetch";
import Loading from "./Loading";
import PageError from "./PageError";
import NoContent from "./NoContent";
import { useState } from "react";
import { useEffect } from "react";
import Editor from "./Editor";
import { Masonry } from "@mui/lab";
import ReactHtmlParser from "react-html-parser";

const noContentMsg = "No content available";
const useTestingView = makeStyles({
	bioNav: {
		display: "flex",
		justifyContent: "space-between",
		margin: "0px 5px",
	},
	complaintTitle: {
		margin: 10,
	},
});

const COMPLAINT_URL = `/complaints/views/`;
const BASE_URL = `http://localhost:3001`;

const TestingView = ({ audioUrl, videoUrl, desc }) => {
	const { complaintId } = useParams();
	const [pageErrorMsg, setPageErrorMsg] = useState("");

	const { isLoading, errorDetails, results, error } = useFetch(
		`${COMPLAINT_URL}${complaintId}`
	);
	const [showEditor, setShowEditor] = useState(false);
	const handleClick = () => {
		setShowEditor((prev) => !prev);
	};

	const [letter, setLetter] = useState("");

	const classes = useTestingView();

	useEffect(() => {
		if (errorDetails.code === "ERR_BAD_REQUEST") {
			setPageErrorMsg(errorDetails.response.data.error);
		} else if (errorDetails.code === "ERR_NETWORK") {
			setPageErrorMsg(errorDetails.message);
		}
	}, [errorDetails]);

	let load = true;
	if (isLoading) return <Loading />;

	if (Object.keys(errorDetails).length !== 0) {
		return <PageError msg={pageErrorMsg} path="../" />;
	}

	// if (results.accounts === "undefined" || results.accounts.length === 0)
	// 	return <NoContent msg={noContentMsg} />;
	const { res, profilePic } = results;

	return (
		<>
			<Container>
				<Box
					sx={
						{
							// border: "2px solid black",
							// height: "100vh",
						}
					}
				>
					<div>
						<Link to="/agency">
							<IconButton>
								<KeyboardBackspaceIcon />
							</IconButton>
						</Link>
					</div>

					<div className={classes.complaintTitle}>
						<Typography variant="h6">
							Complaint Reason: {res.reason.toUpperCase()}
						</Typography>
					</div>
					<div className={classes.bioNav}>
						<Stack direction="row" spacing={2}>
							<Avatar src={`${BASE_URL}${profilePic}`} />
							<Typography variant="body2">
								<strong> {res.fullname} </strong>
							</Typography>
							<Typography variant="body2">
								<strong> {res.email} </strong>
							</Typography>
						</Stack>
						<div>
							<Typography variant="body2">
								{parseInt(res.date)
									? new Date(parseInt(res.date)).toLocaleString()
									: res.date}
							</Typography>
						</div>
					</div>
					<div>
						<Stack
							sx={{ m: 2 }}
							direction="row"
							spacing={2}
							divider={<Divider orientation="vertical" flexItem />}
						>
							{res.desc && (
								<Stack spacing={1} sx={{ width: "100%" }}>
									<Grid container columns={2} spacing={1}>
										<GridElem editor={showEditor}>
											<Typography> Testing {res.desc}</Typography>
										</GridElem>
										{showEditor && (
											<Grid container spacing={1}>
												<Grid item sm={12} md={12} justifyContent="center">
													<EditorComp letter={letter} setLetter={setLetter} />
												</Grid>
											</Grid>
										)}
									</Grid>
								</Stack>
							)}

							{res.videoUrl && (
								<Grid container>
									<Stack spacing={2} sx={{ width: "100%" }}>
										{/* <video
												src={`${BASE_URL}/api/uploads/blob1663871487156`}
												controls
												width="100%"
											></video> */}
										<ReactPlayer
											url="http://localhost:3001/api/uploads/blob1663871487156"
											config={{
												file: {
													attributes: {
														crossOrigin: "true",
													},
												},
											}}
											controls
										/>
										{showEditor && (
											<Grid container spacing={1}>
												<Grid item sm={12} md={12} justifyContent="center">
													<EditorComp letter={letter} setLetter={setLetter} />
												</Grid>
											</Grid>
										)}
									</Stack>
								</Grid>
							)}
							{res.audioUrl && (
								<Stack direction="row" width="100%" spacing={2}>
									<Grid container spacing={1}>
										<GridElem editor={showEditor}>
											<audio controls></audio>
										</GridElem>

										{showEditor && (
											<Grid container spacing={1}>
												<Grid item sm={12} md={12} justifyContent="center">
													<EditorComp letter={letter} setLetter={setLetter} />
												</Grid>
											</Grid>
										)}
									</Grid>
								</Stack>
							)}
						</Stack>
					</div>

					<div>
						<Stack spacing={2} direction="row" sx={{ m: 1 }}>
							<Button onClick={handleClick}> Transcribe </Button>

							<Button> Forward</Button>
						</Stack>
					</div>
				</Box>
			</Container>
		</>
	);
};

export default TestingView;

const GridElem = ({ children, editor }) => {
	return (
		<Grid
			item
			sm={12}
			md={editor ? 12 : 12}
			flexGrow={1}
			padding={1}
			spacing={1}
			sx={{ height: "max-content" }}
		>
			{children}
		</Grid>
	);
};

const EditorComp = ({ setLetter, letter }) => {
	return (
		<>
			<Masonry columns={2} spacing={2}>
				<div>
					<Editor setLetter={setLetter} />
					<Divider orientation="vertical" />
				</div>
				<div>
					<Divider />
					<Typography variant="h6" align="center">
						Preview
					</Typography>
					<div>{ReactHtmlParser(letter)}</div>
					<Divider />
				</div>
			</Masonry>
		</>
	);
};
