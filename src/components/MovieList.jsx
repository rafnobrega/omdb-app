import { Card, CardMedia, Typography } from "@mui/material";

const MovieList = (props) => {
  console.log(props)
  return (
    // Remember that most keys from the OMDB Api objects have the first letter Capitalized (e.g. Poster)
    // Use the map function to display each movie from the array (props)
    // Use the index as a key to avoid warning messages
    <>
      {" "}
      <Typography variant="p">{props.movies.length} movies found</Typography>
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
          <Card>
            <CardMedia
              key={index}
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
          </Card>
        ))}
      </Card>
    </>
  );
};

export default MovieList;
