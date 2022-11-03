import { Card, CardContent, Stack, Typography } from "@mui/material";
import { green, lightBlue, red } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useMinistryStyles } from "./ministry";
const TitleSection = ({ totalAccounts, closedAccs, activeAccs }) => {
  const classes = useMinistryStyles();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          height: "100px",
          display: "flex",
          m: 1,
        }}
      >
        <CardItem
          label="Total Agencies"
          num={totalAccounts ?? totalAccounts}
          color={lightBlue[300]}
          classes={classes.titleSectionText}
        />
        <CardItem
          label="Active Accounts"
          color={green[500]}
          classes={classes.titleSectionText}
          num={activeAccs ?? activeAccs}
        />
        <CardItem
          label="Closed Accounts"
          color={red[400]}
          classes={classes.titleSectionText}
          num={closedAccs ?? closedAccs}
        />
      </Box>
    </>
  );
};

export default TitleSection;

const CardItem = ({ label, num, color, classes }) => {
  return (
    <Card
      sx={{ width: "200px", height: "100%", mr: 1, backgroundColor: color }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Stack>
          <Typography variant="h6" className={classes} textAlign="center">
            {label}
          </Typography>
          <Typography variant="h4" className={classes} textAlign="center">
            {num}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};
