import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import "video-react/dist/video-react.css";
import Poster from "../../../images/poster.jpg";
const VIDEO_URL = `http://localhost:3001/api/`;

const VideoPlayer = ({ videoUrl, width, height }) => {
  return (
    <Player poster={Poster} height={height || "100%"} width={width || "100%"}>
      <source src={`${VIDEO_URL}${videoUrl}`} />
      {/* <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" /> */}

      <ControlBar>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
  );
};

export default VideoPlayer;
