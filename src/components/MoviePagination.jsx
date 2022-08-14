import { Pagination } from "@mui/material";

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
