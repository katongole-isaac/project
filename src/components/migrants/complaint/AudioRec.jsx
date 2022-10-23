import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Box } from "@mui/system";
import {
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import ReactPlayer from "react-player";

import { useStopwatch } from "react-timer-hook";
import useStyles_ from "./videoStyles";

import { useAudioRecorder } from "@awkravchuk/react-audio-recorder";
import useAudioStyles from "./AudioStyle.styles";
import MicIcon from "@mui/icons-material/Mic";
import CircularButton from "../styledComponents/circularButton";
import StopIcon from "@mui/icons-material/Stop";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseIcon from "@mui/icons-material/Pause";

const audioConstraints = {
  audio: true,
};

const AudioRecording = ({ setAudio, turnOnAudio, setTurnOnAudio }) => {
  const classes = useStyles_();
  const audioClasses = useAudioStyles();
  const {
    audioResult,
    timer,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    status,
    errorMessage,
  } = useAudioRecorder();

  const [url, setUrl] = useState("");
  const [recordingStarted, setRecordingStarted] = useState(false);
  // const [turnOnAudio, setTurnOnAudio] = useState(true);
  const [permissionError, setPermissionError] = useState(false);
  const [micWasOffDuringRec, setMicWasOffDuringRec] = useState(false);

  const checkMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        audioConstraints
      );
    } catch (ex) {
      setPermissionError(true);
      setMicWasOffDuringRec(true);
      setRecordingStarted(false);
    }
  };

  const handleRecordStart = () => {
    checkMic();
    startRecording();
  };

  const handleRecordStop = () => {
    checkMic();
    stopRecording();
    setAudio(audioResult);
  };

  useEffect(() => {
    setTurnOnAudio(true);
  }, []);

  useEffect(() => {
    if (audioResult) {
      setUrl(window.URL.createObjectURL(audioResult));
      setAudio(audioResult);
    }
  }, [status, audioResult]);

  const handleRecordPause = () => {
    checkMic();
    pauseRecording();
    console.log(status);
  };

  const getAudio = async () => {
    setRecordingStarted(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        audioConstraints
      );
      setTurnOnAudio(false);
      setPermissionError(false);
      setRecordingStarted(true);
    } catch (ex) {
      if (ex instanceof DOMException) {
        console.log(`Error`, ex);
        setPermissionError(true);
      }
    }
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {(turnOnAudio || permissionError) && (
          <Box className={audioClasses.turnOnBox}>
            {!permissionError ? (
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
                  onClick={getAudio}
                >
                  Turn my mic ON
                </Button>
              </>
            ) : (
              <>
                {micWasOffDuringRec ? (
                  <>
                    <Typography sx={{ color: "black" }}>
                      Oh snap! Mic was turned off during recording.. Please
                      restart it and try again 👍
                    </Typography>
                  </>
                ) : (
                  <Typography sx={{ color: "black" }}>
                    Oh snap! Your browser failed to turn the mic on. Please
                    restart it and try again 👍
                  </Typography>
                )}

                <Button onClick={() => window.location.reload()}>
                  {" "}
                  reload{" "}
                </Button>
              </>
            )}
          </Box>
        )}
        {recordingStarted && !turnOnAudio && (
          <Box className={audioClasses.audioContentBox}>
            <Stack className={audioClasses.stackNote}>
              <Typography>You can send an audio complaint here. </Typography>
            </Stack>
            <Stack>
              <Stack spacing={2} sx={{ mb: 2 }}>
                <Typography
                  textAlign="center"
                  variant="h4"
                  sx={{ color: "black", fontSize: "40px" }}
                >
                  {new Date(timer * 1000).toISOString().substr(11, 8)}
                </Typography>
                <Typography
                  textAlign="center"
                  variant="h6"
                  sx={{ color: "black" }}
                >
                  status: <b>{status}</b>
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                className={audioClasses.stackBtns}
              >
                <CircularButton height="35px" width="35px" color="#673ab7">
                  {status === "recording" ? (
                    <IconButton
                      onClick={handleRecordPause}
                      sx={{ width: "100%", height: "100%", color: "white" }}
                    >
                      <PauseIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={resumeRecording}
                      sx={{ width: "100%", height: "100%", color: "white" }}
                    >
                      <PlayCircleOutlineIcon />
                    </IconButton>
                  )}
                </CircularButton>
                <CircularButton background="linear-gradient(purple, palevioletred)">
                  <IconButton
                    onClick={handleRecordStart}
                    sx={{
                      fontSize: "40px",
                      width: "100%",
                      height: "100%",
                      color: "white",
                    }}
                  >
                    <MicIcon />
                  </IconButton>
                </CircularButton>
                <CircularButton height="35px" width="35px" color="#651fff">
                  <IconButton
                    onClick={handleRecordStop}
                    sx={{ width: "100%", height: "100%", color: "white" }}
                  >
                    <StopIcon />
                  </IconButton>
                </CircularButton>
              </Stack>
              {audioResult && <ReactAudioPlayer src={url} autoPlay controls />}
            </Stack>
          </Box>
        )}
      </Container>
    </>
  );
};

export default AudioRecording;
