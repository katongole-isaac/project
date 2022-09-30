import { Card, CardContent, CardHeader, Typography } from "@mui/material";

import ReactPlayer from "react-player";
const ComplaintCard = ({ date, reason, audioUrl, videoUrl, desc }) => {
	const VIDEO_URL = `http://localhost:3001/api/`;
	const AUDIO_URL = `http://localhost:3001/api/uploads/audio/`;
	return (
		<>
			<Card sx={{ width: "340px" }}>
				<CardHeader title={`Reason: ${reason}`} subheader={date} />
				<CardContent>
					<Typography>{desc && desc}</Typography>
				</CardContent>
				<CardContent>
					{videoUrl && (
						<>
							{/* <ReactPlayer url={`${VIDEO_URL}${videoUrl}`} controls /> */}

							<video
								src={`${VIDEO_URL}${videoUrl}`}
								controls
								width={"100%"}
							></video>
						</>
					)}
					{audioUrl && (
						<>
							<audio
								src={`${AUDIO_URL}${audioUrl.replace("uploads/", "")}`}
								controls
							></audio>
						</>
					)}
				</CardContent>
			</Card>
		</>
	);
};

export default ComplaintCard;
