import { Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import StyledSearchButton from "./styled/SearchButton";
import useMyCompStyles from "./styles";

const SearchButtons = ({ state, setState }) => {
  const classes = useMyCompStyles();

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={6} sx={{ m: 1 }}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <StyledSearchButton
              variant={state === "all" ? "contained" : "outlined"}
              onClick={() => setState("all")}
              size="small"
              state={state === "all" ? true : false}
            >
              All
            </StyledSearchButton>
            <StyledSearchButton
              variant={state === "video" ? "contained" : "outlined"}
              onClick={() => setState("video")}
              size="small"
              state={state === "video" ? true : false}
            >
              video
            </StyledSearchButton>
            <StyledSearchButton
              variant={state === "text" ? "contained" : "outlined"}
              size="small"
              onClick={() => setState("text")}
              state={state === "text" ? true : false}
            >
              text
            </StyledSearchButton>
            <StyledSearchButton
              variant={state === "audio" ? "contained" : "outlined"}
              size="small"
              onClick={() => setState("audio")}
              state={state === "audio" ? true : false}
            >
              audio
            </StyledSearchButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchButtons;
