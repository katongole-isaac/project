import { KeyboardArrowLeftTwoTone } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import StyledReactDomLink from "./StyledReactDomLink";

const NoContent = ({ msg, addAccount, pathToAddAccPage, height, back }) => {
  return (
    <>
      <Grid
        container
        sx={{ height: height || "90%", backgroundColor: "#f8f9fa", mt: 1 }}
        justifyContent="center"
      >
        <Grid
          item
          xs={8}
          alignSelf="center"
          textAlign="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid solid",
          }}
        >
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {back && (
              <>
                <Link to={back}>
                  <KeyboardArrowLeftTwoTone />
                </Link>
              </>
            )}
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {msg}
            </Typography>
            {addAccount && (
              <>
                <StyledReactDomLink to={pathToAddAccPage}>
                  Add Agency Account
                </StyledReactDomLink>
              </>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default NoContent;
