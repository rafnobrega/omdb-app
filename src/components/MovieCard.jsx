import { Button, Card, CardMedia, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import moviePosterPlaceholder from "../images/film-poster-placeholder.png";

const MovieCard = ({ movie }) => {
  return (
    <>
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
          marginTop: "20px",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <CardMedia
          component="img"
          image={movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder}
          alt="movie-poster"
          sx={{
            padding: "10px",
            width: "200px",
            height: "300px",
            objectFit: "contain",
            transition: "all 1s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <Typography
          sx={{
            marginLeft: "5px",
            marginRight: "5px",
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
          }}
        >
          {movie.Title}
        </Typography>
        <Typography
          sx={{ fontStyle: "italic", marginTop: "2px", marginBottom: "2px" }}
        >
          {movie.Year}
        </Typography>
        <Button
          sx={{
            marginBottom: "15px",
            background: "#efc944",
            color: "#232323",
            "&:hover": {
              background: "#ffde65",
            },
          }}
          variant="contained"
          onClick={() => {
            window.open(`https://www.imdb.com/title/${movie.imdbID}`);
          }}
        >
          IMDb Page
        </Button>
      </Card>
    </>
  );
};

export default MovieCard;
