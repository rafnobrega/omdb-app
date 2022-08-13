import { v4 as uuidv4 } from "uuid";
import { Card, CardMedia, Paper, Typography } from "@mui/material";

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
          width: "90vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "60px",
          background: "#dfdfdf",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginTop: "20px",
            background: "white",
            width: "300px",
            textAlign: "center",
            borderRadius: "5px"
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
            background: "#dfdfdf",
            mt: "50px",
          }}
        >
          {props.movies.map((movie, index) => (
            <Card
              key={uuidv4()}
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
                alignItems: "center",
                width: "300px",
                minHeight: "350px",
                mt: "20px",
              }}
            >
              <CardMedia
                component="img"
                image={movie.Poster}
                alt="movie-poster"
                sx={{
                  padding: "10px",
                  width: "200px",
                }}
              />
              <Typography>{movie.Title}</Typography>
              <Typography>{movie.Year}</Typography>
              <Typography>{movie.Type}</Typography>
            </Card>
          ))}
        </Card>
      </Paper>
    </>
  );
};

export default MovieList;
