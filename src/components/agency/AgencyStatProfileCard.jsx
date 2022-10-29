import { Box, Card, CardContent, Stack } from "@mui/material";
import ProfileView from "../generalProfile/agency/AgencyProView";
const AgencyStatProfileCard = ({ setUser, user }) => {
  return (
    <>
      <Card sx={{ width: "97%", p: 1, m: 1, backgroundColor: "#FAFAFA" }}>
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <ProfileView setUser={setUser} user={user} />
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default AgencyStatProfileCard;
