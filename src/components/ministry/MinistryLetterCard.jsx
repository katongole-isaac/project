import {
  Box,
  Card,
  CardContent,
  Chip,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const INDIVIDUAL_LETTER_URL = `http://localhost:3001/api/letters/view`;
const COMPLAINT_URL = `/ministry/dashboard/complaints/`;
const MinistryLetterCard = ({
  createdAt,
  from,
  letters,
  migrantName,
  viewed,
  comment,
  color,
  complaintId,
}) => {
  return (
    <>
      <ListItem disablePadding sx={{ p: 0.4 }}>
        <Card
          elevation={2}
          sx={{
            width: "100%",
            height: "10%",
            borderRadius: "10px",
            borderLeft: `10px solid ${color}`,
            display: "flex",
            // backgroundColor: "#bde0fe",
            p: 0.5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "30%",
              borderRadius: "10px",
              display: "flex",
              height: "100%",
              p: 0.2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Chip
                clickable
                // href={`${}`}
                onClick={() => {
                  window.open(`${INDIVIDUAL_LETTER_URL}?path=${letters[0]}`);
                }}
                label={letters[0].replace("letters/", " ")}
                variant="outlined"
                sx={{ width: "300px" }}
              />
              <Link to={`${COMPLAINT_URL}${complaintId}`}>
                <Typography variant="body2" sx={{ color }}>
                  complaint of {migrantName} <strong> |</strong> {from}
                </Typography>
              </Link>
            </Stack>

            <Typography variant="body2" sx={{ color }}>
              {new Date(parseInt(createdAt)).toDateString()}
            </Typography>
          </Box>
        </Card>
      </ListItem>
    </>
  );
};
export default MinistryLetterCard;
