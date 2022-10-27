import {
	Button,
	FormControl,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import { useRef } from "react";
import Grid from "@mui/material/Grid";
import { useStyles } from "../../../styles";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Image from "../../../images/video.svg";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MicIcon from "@mui/icons-material/Mic";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CreateIcon from "@mui/icons-material/Create";
import authFetch from "../../../authFetch";
import PopUp from "../../../components/_Dialog";
import { useNavigate } from "react-router-dom";
import { UserState } from "../../../userContext";
import { useContext } from "react";

const constraints = {
	audio: true,
	video: {
		facingMode: "user",
	},
};
const audioConstraints = {
	audio: true,
};

const errorMsg = "something went wrong!!!";
const enableMediaMsg = "Enable the camera and microphone";

const Complaint = () => {
	const classes = useStyles();
	const { user } = useContext(UserState);
	const navigate = useNavigate();

	const [reason, setReason] = useState("");
	const [reasonError, setReasonError] = useState(false);
	const [videoData, setVideoData] = useState({});
	const [audioData, setAudioData] = useState({});
	const [videoBtnClicked, setVideoBtn] = useState(false);

	let [audioSec, setAudioSec] = useState(0);
	let [audioMin, setAudioMin] = useState(0);

	const textField = useRef();
	const stopRec = useRef();
	const audioEl = useRef();
	const videoRef = useRef();
	const startRec = useRef();
	const recordAudio = useRef();
	const stopRecAudio = useRef();
	const videoDestRef = useRef();
	const [interval, setInterv] = useState("");
	const [status, setStatus] = useState(0);
	const [descError, setDescError] = useState({
		msg: "",
		error: false,
	});
	const [description, setDescription] = useState("");
	const [videoReady, setVideoReady] = useState(false);
	const [permissionError, setPermError] = useState("");
	const [showAudioBtns, setShowAudioBtns] = useState(false);
	const [audioDataReady, setAudioDataReady] = useState(false);
	const [stopVideoRecBtn, setStopVideoRecBtn] = useState(true);
	const [stopAudioRecBtn, setStopAudioRecBtn] = useState(true);
	const [writeIconClicked, setWriteIconClicked] = useState(false);

	const [respStatus, setRespStatus] = useState({
		//config options for dialog
		isOpen: false,
		msg: "Your complaint has been recieved",
		statusCode: -1,
	});

	const fullname = `${user.firstname} ${user.lastname}`;

	const sendComplaint = async () => {
		const reasonLimit = 5;
		const desc = checkDescription(description);
		if (reason.length < reasonLimit) {
			setReasonError(true);
			return;
		}
		const fd = new FormData();

		if (desc !== "") fd.append("desc", desc);

		if (audioData.size) fd.append("audio", audioData);

		if (videoData.size) fd.append("video", videoData);

		fd.append("email", user.email);
		fd.append("fullname", fullname);
		fd.append("reason", reason);
		fd.append("id", user.user);

		try {
			const resp = await authFetch.post("/complaints", fd, {
				headers: { "Content-Type": "multipart/form-data" },
			});

			console.log(resp);

			if (resp.status >= 200 && resp.status <= 299) {
				setRespStatus((prev) => {
					return {
						...prev,
						isOpen: true,
						statusCode: 0,
						msg: "Your complaint has been recieved",
					};
				});

				setTimeout(() => {
					navigate("/dashboard/mycomplaints");
				}, 3500);
			}
		} catch (ex) {
			console.log(ex);
			setRespStatus((prev) => {
				return {
					...prev,
					isOpen: true,
					msg: errorMsg,
				};
			});
		}
		return;
	};

	const checkDescription = (desc) => {
		const wordLimit = 30;
		if (desc === null) return;
		if (desc && desc.length < wordLimit) {
			let msg = "Too short description provided....";
			setDescError((prev) => {
				return {
					...prev,
					msg,
					error: true,
				};
			});
			return "";
		}

		return desc;
	};

	const handleChangeReason = (e) => {
		setReasonError(false);
		setReason(e.target.value);
	};

	const handleCreateIconClick = () => {
		setVideoBtn(false);
		setShowAudioBtns(false);
		setWriteIconClicked(!writeIconClicked);
	};

	const startTime = (sec, setSec, setMin) => {
		if (status === 0) {
			setStatus(1);

			// clearInterval(interval);
			setSec(0);
			setMin(0);
			let seconds = sec;
			setInterv(
				setInterval(() => {
					seconds = seconds + 1;
					if (seconds / 60 === 1) {
						setMin((min) => (min += 1));
						seconds = 0;
					}
					setSec(seconds);
				}, 1000)
			);
			console.log("StartTime: ", status);
		}
	};

	const stopTime = (setSec, setMin, interval) => {
		//stopping the audio timer
		console.log("Stop Time", status);
		if (status === 1) {
			setSec(0);
			setMin(0);
			clearInterval(interval);
			setStatus(0);
			console.log("onStopped");
		}
	};

	//Audio stream and recording
	const getAudio = async () => {
		setShowAudioBtns(!showAudioBtns);
		setStopAudioRecBtn(true);
		setVideoBtn(false);
		setAudioDataReady(false);
		setWriteIconClicked(false);

		try {
			const stream = await navigator.mediaDevices.getUserMedia(
				audioConstraints
			);

			const mediaRecorder = new MediaRecorder(stream); //recording the audio stream
			let audio = [];

			mediaRecorder.ondataavailable = (e) => {
				audio.push(e.data);
			};

			recordAudio.current.onclick = () => {
				if (mediaRecorder.state !== "recording") {
					setAudioDataReady(false);
					startTime(audioSec, setAudioSec, setAudioMin);
					console.log("audio recording");
					mediaRecorder.start();
					setTimeout(() => {
						setStopAudioRecBtn(false);
					}, 3000);
				}
			};

			stopRecAudio.current.onclick = () => {
				if (mediaRecorder.state !== "inactive") {
					stopTime(setAudioSec, setAudioMin, interval);
					mediaRecorder.stop();
				}
			};
			mediaRecorder.onstop = () => {
				setAudioDataReady(true);
				// stopTime(setAudioSec, setAudioMin);

				const audioTrack = new Blob(audio, { type: "audio/ogg; codecs=opus" });
				audio = [];
				const trackUrl = window.URL.createObjectURL(audioTrack);

				setTimeout(() => {
					// waitng for the audio element to mount and then access the .src property
					audioEl.current.src = trackUrl;
				}, 1000);

				setAudioData(audioTrack);
			};
		} catch (ex) {
			setPermError(ex);
			console.log(permissionError);
			if (ex instanceof DOMException) {
				setRespStatus((prev) => {
					return {
						...prev,
						isOpen: true,
						msg: enableMediaMsg,
					};
				});
			}
		}
	};

	useEffect(() => {
		setTimeout(() => {});
	}, [permissionError]);

	useEffect(() => {
		setTimeout(() => {
			setDescError((prev) => {
				return {
					msg: "",
					error: false,
				};
			});
		}, 3000);
	}, [descError]);

	//video streams and recording
	const getMedia = async () => {
		setVideoBtn(!videoBtnClicked);
		setVideoReady(false);
		setStopVideoRecBtn(true);
		setWriteIconClicked(false);
		try {
			const stream = await navigator.mediaDevices.getUserMedia(constraints);
			videoRef.current.srcObject = stream;
			videoRef.current.onloadedmetadata = function () {
				videoRef.current.play();
			};
			let chunks = [];
			const mediaRecorder = new MediaRecorder(stream);

			mediaRecorder.ondataavailable = (e) => {
				chunks.push(e.data);
			};

			startRec.current.onclick = () => {
				if (mediaRecorder.state !== "recording") {
					setTimeout(() => {
						setStopVideoRecBtn(false);
					}, 3000);
					mediaRecorder.start();
					console.log("recording in progress");
				}
			};

			stopRec.current.onclick = () => {
				if (mediaRecorder.state !== "inactive") {
					setVideoReady(true);
					mediaRecorder.stop();
				}
			};

			mediaRecorder.onstop = () => {
				const video = new Blob(chunks, { type: "video/mp4" });
				chunks = [];

				const videoUrl = window.URL.createObjectURL(video);
				videoDestRef.current.src = videoUrl;
				setVideoData(video);
				console.log(video);
				setVideoReady(true);
				setVideoBtn(false);
			};
			console.log("video");
		} catch (ex) {
			setPermError(ex);
			if (ex instanceof DOMException) {
				setRespStatus((prev) => {
					return {
						...prev,
						isOpen: true,
						msg: enableMediaMsg,
					};
				});
				console.log("Error", permissionError);
			}
		}
	};

	return (
		<>
			<PopUp respStatus={respStatus} setRespStatus={setRespStatus} />
			<div className="d-flex justify-content-center complaintNavIcons ">
				<TextField
					size="small"
					label="Reason"
					value={reason}
					error={reasonError}
					onChange={handleChangeReason}
				/>
				<IconButton onClick={getMedia} disabled={showAudioBtns}>
					<CameraAltIcon />
				</IconButton>

				<IconButton
					ref={recordAudio}
					onClick={() => getAudio()}
					disabled={videoBtnClicked}
				>
					<MicIcon />
				</IconButton>
				<IconButton onClick={handleCreateIconClick}>
					<CreateIcon />
				</IconButton>
			</div>
			<Grid container justifyContent="center" columnSpacing={2}>
				<Grid
					item
					xs={12}
					sm={10}
					md={6}
					sx={{ marginTop: 1.5 }}
					justifyContent="center"
				>
					{writeIconClicked && (
						<div className={classes.description}>
							<FormControl fullWidth sx={{ marginTop: 2 }}>
								<TextField
									rows={5}
									label="Description"
									placeholder="You can describe your issue here ..."
									multiline
									onChange={(e) => setDescription(e.target.value)}
									value={description}
									error={descError.error}
									helperText={descError.msg}
									inputRef={textField}
								/>
							</FormControl>
						</div>
					)}

					{!videoReady &&
						!videoBtnClicked &&
						!writeIconClicked &&
						!showAudioBtns && (
							<>
								<div className={classes.videoDiv}>
									<img src={Image} className={classes.videoIcon} />
								</div>
							</>
						)}

					{videoBtnClicked && (
						<>
							<div className={classes.videoContainer}>
								<video ref={videoRef} className={classes.videoBox}></video>
							</div>
							<Typography></Typography>
							<Button ref={startRec} endIcon={<PlayCircleOutlineIcon />}>
								start
							</Button>
							<Button
								ref={stopRec}
								disabled={stopVideoRecBtn}
								endIcon={<StopCircleIcon />}
							>
								stop
							</Button>
						</>
					)}

					{videoReady && (
						<>
							<div className={classes.videoContainer}>
								<video
									ref={videoDestRef}
									controls
									className={classes.videoDone}
								></video>
							</div>
						</>
					)}

					{showAudioBtns && (
						<>
							<div className="d-flex justify-content-center mt-5">
								<Button ref={recordAudio}>audio start</Button>
								<Button ref={stopRecAudio} disabled={stopAudioRecBtn}>
									stop Audio
								</Button>
							</div>

							{!audioDataReady && (
								<div className="d-flex justify-content-center mt-5">
									<Typography variant="h6">
										Recording Time:
										{`   ${audioMin < 10 ? "0" : ""}${audioMin} `}:
										{` ${audioSec < 10 ? "0" : ""}${audioSec}`}
									</Typography>
								</div>
							)}
						</>
					)}
					{audioDataReady && (
						<>
							<div className="d-flex justify-content-center m-4">
								<div>
									<audio ref={audioEl} controls></audio> <br />
								</div>
							</div>
						</>
					)}

					{audioDataReady || videoReady || description ? (
						<div className="d-flex justify-content-center">
							<Button variant="contained" size="small" onClick={sendComplaint}>
								send complaint
							</Button>
						</div>
					) : (
						""
					)}
				</Grid>
				<Grid item sm={12} md={4} className={classes.gridItemLast}>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
						voluptatum consequuntur quasi, deleniti deserunt ducimus beatae
						asperiores quibusdam quia totam.
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Complaint;
