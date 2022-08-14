import { v4 as uuidv4 } from "uuid";
import { Card, Paper, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import MoviePagination from "./MoviePagination";

const MovieList = (props) => {
  return (
    // Remember that most keys from the OMDB Api objects have the first letter Capitalized (e.g. Poster)
    // Use the map function to display each movie from the array (props)
    // Use the uuid package to avoid warnings about unique keys
    <>
      {" "}
      <Paper
        sx={{
          minHeight: "90vh",
          width: "85vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "100px",
          marginBottom: "20px",
          background: "#dfdfdf",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginTop: "30px",
            background: "#232323",
            color: "white",
            fontSize: "1rem",
            padding: "5px",
            width: "200px",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          {props.totalNumberOfMovies} movies found
        </Typography>

        <MoviePagination
          numberOfPages={props.numberOfPages}
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
        />

        <Card
          sx={{
            maxWidth: "90vw",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            marginBottom: "50px",
            background: "#dfdfdf",
            boxShadow: "none",
          }}
        >
          {props.movies.map((movie) => (
            <MovieCard key={uuidv4()} movie={movie} />
          ))}
        </Card>
      </Paper>
    </>
  );
};

export default MovieList;
