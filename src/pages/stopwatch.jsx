import {
	Typography,
	Button,
	Grid,
	Card,
	CardHeader,
	CardMedia,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import audioSrc from "../../src/images/test.ogg";
import videoSrc from "../images/blob1663592488554";
import { useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";

const StopWatch = () => {
	const columns = [
		{ field: "name", width: 120, headerName: "Name" },
		{
			field: "name",
			width: 120,
			headerName: "Name",
			resizable: true,
			hideable: true,
		},
	];
	const rows = [
		{ id: 1, name: "Katongole" },
		{ id: 1, name: "Katongole" },
		{ id: 1, name: "Katongole" },
	];
	return (
		<>
			<Container sx={{ width: "100%" }}>
				<Grid container marginTop={10} marginLeft={2}>
					<Grid item sm={4} sx={{ height: "400px" }}>
						<div style={{ display: "flex", heigh: "1400px" }}>
							<div style={{ flexGrow: 1 }}>
								<DataGrid columns={columns} rows={rows} />
							</div>
						</div>
					</Grid>
					<Grid item sm={6}>
						<Card sx={{ maxWidth: 380 }}>
							<CardHeader
								title="Card Header Title"
								subheader="Sub Header here"
							/>
							<CardMedia>
								<video controls>
									<source src={videoSrc} type="video/mp4" />
								</video>
							</CardMedia>
						</Card>
					</Grid>
				</Grid>
				<ReactPlayer url={videoSrc} controls />
				<audio controls>
					<source src={audioSrc} type="audio/mpeg" />
				</audio>
			</Container>
		</>
	);
};

export default StopWatch;

// let [audioSec, setAudioSec] = useState(0);
// let [audioMin, setAudioMin] = useState(0);
// const stopWatch = useRef();
// const [intv, setIntv] = useState("");
// const [status, setStatus] = useState(0);

// const startTime = (sec, setSec, setMin) => {
// 	if (status === 0) {
// 		setSec(0);
// 		setMin(0);
// 		setIntv(
// 			setInterval(() => {
// 				sec = sec + 1;
// 				if (sec === 60) {
// 					setMin((min) => (min += 1));
// 					sec = 0;
// 					setSec(0);
// 				} else {
// 					setSec(sec);
// 				}
// 			}, 1000)
// 		);

// 		setStatus(1);
// 	}
// };

// const StopTime = (setSec, setMin) => {
// 	console.log(status);
// 	if (status === 1) {
// 		setSec(0);
// 		setMin(0);
// 		clearInterval(intv);
// 		setStatus(0);
// 	}
// };

// return (
// 	<>
// 		StopWatch
// <div className="mt-10 container justify-content-center ">
// 	<div className="row justify-content-center">
// 		<p></p>
// 		<p></p>
// 		<p></p>
// 		<p></p>

// 		<p className="text-center">Watch Stop </p>
// 		<Button
// 			onClick={() => {
// 				startTime(audioSec, setAudioSec, setAudioMin);
// 			}}
// 		>

// 			start
// 		</Button>
// 		<Button
// 			ref={stopWatch}
// 			onClick={() => {
// 				StopTime(setAudioSec, setAudioMin);
// 			}}
// 		>
// 			stop
// 		</Button>

// 		<Typography className="text-center" variant="h6">
// 			{`${audioMin < 10 ? "0" : ""}${audioMin}`}:
// 			{`${audioSec < 10 ? "0" : ""}${audioSec}`}
// 		</Typography>
// 	</div>
// </div>
// 	</>
