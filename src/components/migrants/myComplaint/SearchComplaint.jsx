import { FormControl, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import authFetch from "../../../authFetch";
import useFetch from "../../../useFetch";
import useMyCompStyles from "./styles";

const SEARCH_URL = `/complaints/search`;
const SearchComplaint = ({ setSearchResults, user }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = async ({ target }) => {
    setSearch(target.value);
    if (search.match(/^\s+$/g)) return;
    setIsLoading(true);
    try {
      const resp = await authFetch.get(
        `${SEARCH_URL}?q=${search}&email=${user.email}`
      );
      console.log(`reason`, resp.data.res);
      setSearchResults((prev) => [...prev, ...resp.data.res]);
    } catch (ex) {
      console.log(ex);
    }
  };
  const classes = useMyCompStyles();

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <Box className={classes.searchBox}>
            <FormControl>
              <TextField
                label="search complaint"
                name="search"
                size="small"
                value={search}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchComplaint;
