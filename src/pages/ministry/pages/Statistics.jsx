import { Box } from "@mui/material";
import { useMinistryStyles } from "../../../components/ministry/ministry";
import { MinistryStatisticsCardSection } from "../../../components/ministry/MinistryStatisticsCardSection";

const MinistryStatistics = () => {
  const classes = useMinistryStyles();
  return (
    <>
      <Box className={classes.ministryStatBox}>
        <MinistryStatisticsCardSection />
      </Box>
    </>
  );
};

export default MinistryStatistics;
