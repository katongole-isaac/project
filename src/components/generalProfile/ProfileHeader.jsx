import { Alert, Avatar, Button, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import authFetch from "../../authFetch";
import useFetch from "../../useFetch";
import BioInfo from "./BioInfo";
import useGenStyles from "./styles";

const UPLOAD_IMAGE_URL = `/migrant/image/upload`;
const GET_PROFILE_IMAGE = `http://localhost:3001/`;
const ImageLoadError = "Something went wrong";
const PROFILE_URL = `/user/`;

const ProfileHeader = ({ user }) => {
  const classes = useGenStyles();
  const image_Avatar = useRef();
  const [imageLoadError, setImageLoadError] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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

  useEffect(() => {
    setTimeout(() => {
      setImageLoadError("");
    }, 3000);
  });

  return (
    <>
      <Grid container sx={{}} alignItems="flex-start">
        <Grid
          item
          xs={12}
          sm={6}
          md={12}
          lg={12}
          sx={{
            height: "max-content",
            display: "flex",
            padding: 1,
            justifyContent: "center",
          }}
        >
          <Box className={classes.avatarBox}>
            <Stack
              spacing={2}
              display="flex"
              justifyContent={"center"}
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {imageLoadError ?? (
                <Alert severity="error"> {ImageLoadError} </Alert>
              )}

              <Box
                sx={{
                  width: "100%",
                  height: "120px",
                  position: "relative",
                  display: "flex",
                  justifySelf: "center",
                }}
              >
                <Avatar
                  alt="profile_pic"
                  ref={image_Avatar}
                  src={
                    imageUrl
                      ? `${GET_PROFILE_IMAGE}${imageUrl}`
                      : results?.user
                      ? `${GET_PROFILE_IMAGE}${results.user.profilePic}`
                      : ""
                  }
                  sx={{
                    width: "120px",
                    height: "120px",
                    position: "relative",
                    left: "30%",
                    top: "5px",
                    // justifySelf: "center",
                    // border: "1px solid yellow",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                  position: "relative",
                  width: "50%",
                  left: '5em'
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    position: "absolute",
                    width: "100%",
                  }}
                >
                  upload
                </Button>
                <input
                  type="file"
                  accept="image/jpeg, image/jpg"
                  className={classes.fileInput}
                  title=""
                  onChange={handleSaveImage}
                />
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={12}
          lg={12}
          direction="row"
          flexGrow={1}
          sx={(theme) => {
            return {
              height: "max-content",
              display: "flex",
              padding: 1,
              justifyContent: "center",
              [theme.breakpoints.only("sm")]: {
                justifyContent: "start",
              },
            };
          }}
        >
          <BioInfo user={user} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileHeader;
