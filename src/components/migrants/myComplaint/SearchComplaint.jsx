import { FormControl, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import authFetch from "../../../authFetch";
import useFetch from "../../../useFetch";
import useMyCompStyles from "./styles";

const SEARCH_URL = `/complaints/search`;
const SearchComplaint = ({
  setSearchResults,
  user,
  setSearchIsLoading,
  size,
  label,
  agency,
  sx,
  varaint,
  InputProps,
  plcHolder
}) => {
  console.log(sx);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = async ({ target }) => {
    setSearch(target.value);

    let resp;
    if (search.match(/^\s+$/g)) return;
    setSearchIsLoading(true);
    try {
      if (agency) {
        resp = await authFetch.get(
          `${SEARCH_URL}?q=${search}&agencyName=${user.name}`
        );
      } else {
        resp = await authFetch.get(
          `${SEARCH_URL}?q=${search}&email=${user.email}`
        );
      }
      setSearchResults((prev) => [...resp.data.res]);
      setSearchIsLoading(false);
    } catch (ex) {
      setSearchIsLoading(false);
      console.log(ex);
    }
  };
  const classes = useMyCompStyles();

  return (
    <>
      <FormControl>
        <TextField
          placeholder={plcHolder}
          label={label || "search complaint"}
          name="search"
          size={size || "small"}
          value={search}
          onChange={(e) => handleChange(e)}
          sx={sx}
          variant={varaint ?? varaint}
          InputProps={InputProps ?? InputProps}
        />
      </FormControl>
    </>
  );
};

export default SearchComplaint;
