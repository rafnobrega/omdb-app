import React from "react";
import { Pagination } from "@mui/material";

const MoviePagination = (props) => {
  const {numberOfPages, currentPage, setCurrentPage} = props
  // console.log("🍕 props moviePagination::", props)
  // const numberOfPages = props.numberOfPages;
  // const currentPage = props.currentPage;
  // const setCurrentPage = props.setCurrentPage;

  console.log("numberOfPages", numberOfPages);
  console.log("currentPage", currentPage);
  console.log("setCurrentPage", setCurrentPage);

  // const handleChange = (event, value) => {
  //   props.setCurrentPage(event.target.value);
  // };
  return (
    <Pagination
      page={currentPage}
      // onChange={handleChange}
      onChange={(_, page) => setCurrentPage(page)}
      count={numberOfPages}
    />
  );
};

export default MoviePagination;
