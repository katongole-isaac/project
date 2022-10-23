import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import VideoRec from "./VideoRec";
import AudioRecording from "./AudioRec";
import { Masonry } from "@mui/lab";
import { Grid } from "@mui/material";
import TextComplaint from "./TextComplaint";

const TabSelect = ({
  labels,
  complaintDesc,
  setComplaintDesc,
  setAudio,
  setVideo,
  compDescError,
  setCompDescError,
  onPressStop,
  setOnPressStop,
  toggleCameraSpace,
  setToggleCameraSpace,
  turnOnAudio,
  setTurnOnAudio,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} sm={12} md={2}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {labels.map((label) => (
              <Tab label={label} key={label} />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
          <Box sx={{ flexGrow: 1 }}>
            <TabPanel value={value} index={0}>
              <VideoRec
                setVideo={setVideo}
                onPressStop={onPressStop}
                setOnPressStop={setOnPressStop}
                toggleCameraSpace={toggleCameraSpace}
                setToggleCameraSpace={setToggleCameraSpace}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <AudioRecording
                setAudio={setAudio}
                turnOnAudio={turnOnAudio}
                setTurnOnAudio={setTurnOnAudio}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TextComplaint
                complaintDesc={complaintDesc}
                setComplaintDesc={setComplaintDesc}
                compDescError={compDescError}
                setCompDescError={setCompDescError}
              />
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TabSelect;

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
