import { Pagination } from "@mui/material";

/*
💬 For different styles and API documentation, please visit the MUI page: https://mui.com/material-ui/react-pagination/
💬 Here we need to use the React onChange event with the setCurrentPage function (coming from MovieList <- App.js) to change the state
💬 the count property is based on numberOfPages, which is the total of results found (movies) divided by 10 and rounded up. 
*/

const MoviePagination = (props) => {
  const { numberOfPages, currentPage, setCurrentPage } = props;

  return (
    <Pagination
    color="warning"
      variant="outlined"
      shape="rounded"
      showFirstButton
      showLastButton
      sx={{ marginTop: "15px" }}
      page={currentPage}
      onChange={(_, page) => setCurrentPage(page)}
      count={numberOfPages}
    />
  );
};

export default MoviePagination;
