import { Container } from "@mui/material";
import { useState } from "react";
import ComplaintList from "./ComplaintList";
import SearchButtons from "./SearchButtons";
import SearchComplaint from "./SearchComplaint";
import Title from "./Title";

const MigrantLayout = () => {
  const [state, setState] = useState("video");
  
  return (
    <Container fullwidth sx={{ backgroundColor: "pink" }}>
      <Title />
      <SearchComplaint />
      <SearchButtons state={state} setState={setState} />
      <ComplaintList state={state} setState={setState} />
    </Container>
  );
};

export default MigrantLayout;
