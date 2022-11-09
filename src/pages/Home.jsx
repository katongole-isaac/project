import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import ImagePic from "../images/complaints-handling.jpeg";

const Home = () => {
  // window.localStorage.setItem("token", "testing");
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${ImagePic})`,
          height: "92vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundColor: "transparent",
        }}
      >
        {/* <Typography variant="h3" sx={{ zIndex: 1 }}>
          Immigrant Worker Incident Management System
        </Typography> */}
      </Box>
    </>
  );
};

export default Home;
