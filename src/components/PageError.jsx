import { KeyboardBackspace } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
const usePageError = makeStyles({
  reload: {
    color: "blue",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
});

const PageError = ({ msg, path }) => {
  const classes = usePageError();
  const message = msg ?? "We couldn't process your request";
  return (
    <>
      <Box
        sx={{
          maxWidth: "800px",
          display: "flex",
          justifyContent: "center",
          // height: "100%",
          maxHeight: "90%",
          backgroundColor: "#ffffe",
          margin: "auto",
        }}
      >
        <Grid
          container
          flexGrow={1}
          justifyContent="center"
          alignContent="center"
          sx={{
            width: "100%",
          }}
        >
          <Grid
            item
            sm={12}
            md={12}
            justifyContent="center"
            sx={{
              display: "flex",
              padding: 1,
            }}
          >
            <Stack direction="row" spacing={1} justifySelf="center">
              <Link to={path ?? "#"}>
                <IconButton sx={{ mt: -1 }}>
                  <KeyboardBackspace />
                </IconButton>
              </Link>
              <Typography variant="body2">
                {message} {"   "}
                <span
                  onClick={() => window.location.reload()}
                  className={classes.reload}
                >
                  Reload
                </span>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PageError;
