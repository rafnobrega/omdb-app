import { v4 as uuidv4 } from "uuid";
import { Card, Paper, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    // Remember that most keys from the OMDB Api objects have the first letter Capitalized (e.g. Poster)
    // Use the map function to display each movie from the array (props)
    <>
      {" "}
      <Paper
        key={uuidv4()}
        sx={{
          minHeight: "90vh",
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "60px",
          marginBottom: "20px",
          background: "#dfdfdf",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginTop: "30px",
            background: "white",
            width: "300px",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          🍿 {props.movies.length} movies found 🍿
        </Typography>
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
            <MovieCard movie={movie} />
          ))}
        </Card>
      </Paper>
    </>
  );
};

export default MovieList;
