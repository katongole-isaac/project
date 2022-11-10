import DesktopAudio from "./DesktopAudio";
import DesktopText from "./DesktopText";
import DesktopVideo from "./DesktopVideo";

const DesktopComplaintDisplay = ({ audioUrl, videoUrl, desc }) => {
  if (audioUrl) return <DesktopAudio audioUrl={audioUrl} />;
  if (videoUrl) return <DesktopVideo videoUrl={videoUrl} />;
  if (desc) return <DesktopText desc={desc} />;
};
export default DesktopComplaintDisplay;
