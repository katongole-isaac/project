import {
	Avatar,
	Grid,
	IconButton,
	Paper,
	Typography,
	Button,
} from "@mui/material";
import Image from "../../../images/isaac.jpeg";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import { useContext, useRef } from "react";
import authFetch from "../../../authFetch";
import { useState } from "react";
import useFetch from "../../../useFetch";
import { UserState } from "../../../userContext";

const useInput = makeStyles({
	fileBtn: {
		position: "absolute",
		width: "100%",
		// height: "100%",
		zIndex: 1,
		top: -40,
		// top: 39,
		// width: "100%",
		// padding: 10,
		// margin: 1,
	},
});

const UPLOAD_IMAGE_URL = `/migrant/image/upload`;
const GET_PROFILE_IMAGE = `http://localhost:3001/`;
const ImageLoadError = "Something went wrong";
const PROFILE_URL = `/user/`;

const Profile = () => {
	const { user } = useContext(UserState);

	const image_Avatar = useRef();
	const classes = useInput();
	const [imageUrl, setImageUrl] = useState("");
	const [imageLoadError, setImageLoadError] = useState("");

	const { results } = useFetch(`${PROFILE_URL}${user.user}`);

	const handleSaveImage = async (e) => {
		console.log("image saved....");
		const file = e.target.files[0];

		const fd = new FormData();

		fd.append("id", user.user);
		fd.append("file", file);

		try {
			const resp = await authFetch.put(UPLOAD_IMAGE_URL, fd, {
				headers: {
					"Content-Type": "mutlipart/form-data",
				},
			});

			if (resp.status >= 200 && resp.status <= 299) {
				setImageUrl(resp.data.image_url);
			}
		} catch (ex) {
			console.log(ex);
			setImageLoadError(ImageLoadError);
		}
	};

	return (
		<div className="migrant-profile">
			<Typography variant="h2">Profile</Typography>
			<Grid container justifyContent="center">
				<Grid item xs={12} sm={11} md={6}>
					<Paper>
						<Typography variant="h6" align="center">
							Profile
						</Typography>
						{imageLoadError && (
							<>
								<Typography variant="body1" color="error" align="center">
									{imageLoadError}
								</Typography>
							</>
						)}
						<div className="div-file">
							<input
								type="file"
								accept="image/jpeg, image/jpg"
								onChange={handleSaveImage}
							/>
							<Button
								size="large"
								variant="contained"
								className={classes.fileBtn}
								startIcon={<AddIcon />}
							>
								upload
							</Button>
						</div>
						<div className="d-flex justify-content-center mt-4">
							<Avatar
								alt="test-image"
								ref={image_Avatar}
								src={
									imageUrl
										? `${GET_PROFILE_IMAGE}${imageUrl}`
										: results?.user
										? `${GET_PROFILE_IMAGE}${results.user.profilePic}`
										: ""
								}
								variant="rounded"
								className="image-center"
								sx={{ width: 150, height: 150 }}
							/>
						</div>
						<hr />
						<div className="d-flex justify-content-around m-2 p-2">
							<div>
								<Typography>Name:</Typography>
								<Typography>Email</Typography>
								<Typography>Phone:</Typography>
								<Typography>Passport</Typography>
								<Typography>Profile</Typography>
							</div>
							<div>
								<Typography>{`${user?.firstname} ${user?.lastname}`}</Typography>
								<Typography>{`${user?.email}`}</Typography>
								<Typography>{user?.phone}</Typography>
								<Typography>{user?.passport}</Typography>
								<Typography>Ugandan</Typography>
							</div>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
