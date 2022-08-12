import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchBar = (props) => {
  return (
    <Stack spacing={2} sx={{ width: 400 }}>
      <input
        placeholder="Search for a movie"
        value={props.value}
        onChange={(event) => {props.setSearchInput(event.target.value)}}
             />
    </Stack>
  );
};

export default SearchBar;
