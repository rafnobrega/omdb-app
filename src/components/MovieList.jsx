import { Card, CardMedia } from "@mui/material";

const MovieList = (props) => {
  return (
    // Remember that most keys from the OMDB Api objects are Capitalized
    // Use the map function to display each movie from the array (props)
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
        <CardMedia
          component="img"
          image={movie.Poster}
          alt="movie-poster"
          sx={{
            padding: "10px",
            width: "200px",
          }}
        />
      ))}
    </Card>
  );
};

export default MovieList;
