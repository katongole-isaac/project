import { Container } from "@mui/material";
import ComplaintList from "./ComplaintList";
import SearchComplaint from "./SearchComplaint";
import Title from "./Title";

const MigrantLayout = () => {
  return (
    <Container fullwidth sx={{ backgroundColor: "pink" }}>
      <Title />
      <SearchComplaint />
      <ComplaintList />
    </Container>
  );
};

export default MigrantLayout;
