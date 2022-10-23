import { InterestsTwoTone } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useCallback, useEffect } from "react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import VideoRecorder from "react-video-recorder/lib/video-recorder";
import useStyles_ from "./videoStyles";

const constraints = {
  audio: true,
  video: {
    facingMode: "user",
  },
};

const VideoRec = ({
  setVideo,
  onPressStop,
  setOnPressStop,
  toggleCameraSpace,
  setToggleCameraSpace,
}) => {
  const classes = useStyles_();
  const videoRef = useRef();
  const [intv, setIntv] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const [showVideoCtrls, setShowideoCtrls] = useState(false);
  const [permissionError, setPermissionError] = useState(false);
  const [recordingStarted, setRecordingStarted] = useState(false);
  const [showBtnAfterStartRec, setShowBtnAfterStartRec] = useState(false);
  // const [toggleCameraSpace, setToggleCameraSpace] = useState(true);

  const [showFinishedVideo, setShowFinishedVideo] = useState(false);
  const [startRecPressed, setStartRecPressed] = useState(false);
  const startRec = useRef();
  const stopRec = useRef();
  const [stop, setStop] = useState(true);
  const [start, setStart] = useState(false);
  const [intId, setId] = useState("");
  const [countLimit, setCountLimit] = useState(3);

  const checkCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        constraints,
        () => {
          console.log("webcam is on");
        },
        () => {
          console.log("webcam is off");
        }
      );
    } catch (ex) {
      if (ex instanceof DOMException) {
        setPermissionError(true);
        console.log(ex, permissionError);
      }
    }
  });

useEffect(() => {
  setToggleCameraSpace(true);
}, []);

  useEffect(() => {
    if (start) {
      const id = setInterval(checkCamera, 1000);
      setId(id);
    }
  }, [start]);

  useEffect(() => {
    if (permissionError && intId) {
      clearInterval(intId);
    }
  }, [intId, permissionError]);

  const countDown = () => {
    setCountLimit((prev) => {
      if (prev === 0) {
        return 0;
      }
      return (prev -= 1);
    });
  };

  const countDownDisplay = () => {
    setShowideoCtrls(false);
    const id = setInterval(countDown, 1000);
    console.log(countLimit);
    if (countLimit === 0) {
      clearInterval(id);
      setCountLimit(3);
    }
  };

  //   Recording time in the upper left corner of the video
  const countRecordingTime = () => {
    const id = setInterval(() => {
      setRecordingTime((prev) => (prev += 1));
    }, 1000);
    setIntv(id);
  };

  useEffect(() => {
    if (!stop) {
      clearInterval(intv);
      setRecordingTime(0);
    }
  }, [stop]);

  const getMedia = async () => {
    setShowFinishedVideo(false);
    setOnPressStop(true);
    setStartRecPressed(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = function () {
        videoRef.current.play();
        setShowideoCtrls(true);
        setShowBtnAfterStartRec(false);
        setToggleCameraSpace(false);
      };
      setStart(false);
      setStop(true);
      setToggleCameraSpace(true);

      let chunks = [];
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        if (!permissionError) chunks.push(e.data);
        console.log("permis Error");
      };

      startRec.current.onclick = () => {
        if (mediaRecorder.state !== "recording") {
          setStart(true);

          countDownDisplay();
          setTimeout(() => {
            try {
              // showing the stop buttons and recording time
              setShowBtnAfterStartRec(true);
              setRecordingStarted(true);
              mediaRecorder.start();
              countRecordingTime();
              setStartRecPressed(true);
            } catch (ex) {
              setPermissionError(true);
            }
          }, 3000);
        }
      };

      stopRec.current.onclick = () => {
        if (mediaRecorder.state !== "inactive") {
          mediaRecorder.stop();
          setStart(false);
          setOnPressStop(false);
          setShowFinishedVideo(true);
        }
      };

      mediaRecorder.onstop = () => {
        const video = new Blob(chunks, { type: "video/mp4" });
        chunks = [];

        const videoUrl = window.URL.createObjectURL(video);
        setVideoURL(videoUrl);
        setStart(false);
        setVideo(video);
        setStop(false);
        console.log(video);
      };

      console.log("video");
    } catch (ex) {
      if (ex instanceof DOMException) {
        setPermissionError(true);
        console.log(ex);
      }
    }
  };

  return (
    <>
      <Container
        fixed
        sx={{
          display: "flex",
          backgroundColor: "#FAFAFA",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        {toggleCameraSpace && !permissionError && (
          <Box className={classes.Box}>
            <>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "white",
                    opacity: 0.9,
                    position: "relative",
                  },
                }}
                onClick={getMedia}
              >
                Turn my camera ON
              </Button>
            </>
          </Box>
        )}

        {permissionError && (
          <>
            <Box className={classes.Box}>
              <Typography sx={{ color: "black" }}>
                Oh snap! Your browser failed to record your video. Please
                restart it and try again 👍
              </Typography>
              <Button onClick={() => window.location.reload()}>reload</Button>
            </Box>
          </>
        )}

        {onPressStop && !permissionError && (
          <div className={classes.videoContainer}>
            <video ref={videoRef}></video>

            {/* seconds counter */}
            {showBtnAfterStartRec && !showVideoCtrls && (
              <div className={classes.recordCount}>
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "55px",
                  }}
                >
                  <Box className={classes.circularDot}></Box>
                  <Typography variant="body2"> {recordingTime} s</Typography>
                </Stack>
              </div>
            )}
            {/* seconds counter */}

            {/* count down */}
            {countLimit > 0 && start && (
              <Typography
                variant="h3"
                sx={{ color: "white", left: "6em", position: "absolute" }}
              >
                {countLimit}
              </Typography>
            )}

            {/* count down */}

            <div className={classes.videoContent}>
              {/* showVideoCtrls && */}
              {!startRecPressed && (
                <>
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      opacity: showVideoCtrls ? 1 : 0, // to show and hide , because when we use conditional rendering element are not yet ready , therefore there will be an error
                    }}
                  >
                    <Typography sx={{ color: "white" }}>
                      PRESS <span style={{ color: "coral" }}> REC</span> WHEN
                      READY
                    </Typography>
                    <Box className={classes.circularBtn}>
                      <Button
                        ref={startRec}
                        sx={{
                          width: "100%",
                          height: "100%",
                          color: "white",
                          zIndex: showBtnAfterStartRec ? -1 : 1,
                          borderRaduis: "50%",
                          "&:hover": { color: "none" },
                        }}
                      >
                        Rec
                      </Button>
                    </Box>
                  </Stack>
                </>
              )}

              {/* showBtnAfterStartRec && !showVideoCtrls && */}
              <Box
                className={classes.circularBtn}
                sx={{
                  opacity: showBtnAfterStartRec && !showVideoCtrls ? 1 : 0,
                  position: "relative",
                  left: "-1em",
                  zIndex: showVideoCtrls ? -1 : 1,
                  display: startRecPressed ? "block" : "none",
                }}
              >
                <Button
                  ref={stopRec}
                  sx={{
                    width: "100%",
                    height: "100%",
                    color: "white",
                    borderRaduis: "50%",
                    "&:hover": { color: "none" },
                  }}
                >
                  Stop
                </Button>
              </Box>
              <></>
            </div>
          </div>
        )}
        {showFinishedVideo && !permissionError && !toggleCameraSpace && (
          <Box sx={{ position: "relative" }}>
            <video src={videoURL} controls />

            <Box sx={{ position: "absolute", top: -1, p: 1 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "white",
                    opacity: 0.9,
                  },
                }}
                onClick={getMedia}
              >
                Record another video
              </Button>
            </Box>
          </Box>
        )}
      </Container>
      {/* {videoData && ( */}
    </>
  );
};

export default VideoRec;
