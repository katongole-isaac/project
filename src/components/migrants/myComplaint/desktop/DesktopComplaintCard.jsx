import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { colorsForComplaintStatus } from "../../../../utils/colorsForComplaintStatus";
import { useDesktopStyles } from "./styles";
// import { blue } from "@mui/material/colors";

const DesktopComplaintCard = ({
  reason,
  status,
  sent,
  _id,
  desc,
  audioUrl,
  videoUrl,
  setComplaintId,
}) => {
  const handleClick = () => {
    setComplaintId(_id);
  };
  const date = new Date(parseInt(sent)).toLocaleDateString();
  const color = colorsForComplaintStatus(status);
  const classes = useDesktopStyles();

  const checkStatus = (audio, text, video) => {
    if (video !== "") return "video";
    if (audio !== "") return "audio";
    if (text !== "") return "text";
  };

  return (
    <>
      <ListItem sx={{ p: 0 }}>
        <Card
          sx={{
            ml: 0.5,
            mr: 0.5,
            mb: 0.3,
            width: "100%",
            p: 0.8,
            height: "50px",
          }}
          elevation={0}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Stack>
                <Typography
                  onClick={handleClick}
                  sx={{
                    "&: hover": {
                      textDecoration: "underline",
                      color: blue[800],
                      cursor: "pointer",
                    },
                  }}
                >
                  {reason}
                </Typography>
                <Typography variant="body2" className="text-muted">
                  {checkStatus(audioUrl, desc, videoUrl)}
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Stack display="flex">
                <Typography variant="body2" className="text-muted">
                  {date}
                </Typography>
                <Typography sx={{ color: color }} variant="body2">
                  {status}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Card>
      </ListItem>
    </>
  );
};
export default DesktopComplaintCard;
