import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import { Container, Grid, Card } from "@mui/material";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Trainspotting",
      Year: "1996",
      imdbID: "tt0117951",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      Title: "T2 Trainspotting",
      Year: "2017",
      imdbID: "tt2763304",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0MTE1ODkzMl5BMl5BanBnXkFtZTgwMTQ1MTg5MDI@._V1_SX300.jpg",
    },
    {
      Title: "T2 Trainspotting",
      Year: "2017",
      imdbID: "tt2763304",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0MTE1ODkzMl5BMl5BanBnXkFtZTgwMTQ1MTg5MDI@._V1_SX300.jpg",
    },
    {
      Title: "T2 Trainspotting",
      Year: "2017",
      imdbID: "tt2763304",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0MTE1ODkzMl5BMl5BanBnXkFtZTgwMTQ1MTg5MDI@._V1_SX300.jpg",
    },
    {
      Title: "T2 Trainspotting",
      Year: "2017",
      imdbID: "tt2763304",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0MTE1ODkzMl5BMl5BanBnXkFtZTgwMTQ1MTg5MDI@._V1_SX300.jpg",
    },
    {
      Title: "T2 Trainspotting",
      Year: "2017",
      imdbID: "tt2763304",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0MTE1ODkzMl5BMl5BanBnXkFtZTgwMTQ1MTg5MDI@._V1_SX300.jpg",
    },
    {
      Title: "T2 Trainspotting",
      Year: "2017",
      imdbID: "tt2763304",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0MTE1ODkzMl5BMl5BanBnXkFtZTgwMTQ1MTg5MDI@._V1_SX300.jpg",
    },
  ]);

  const getMovie = async () => {
    const url = `http://www.omdbapi.com/?s=trainspotting&apikey=bf749c16`;
    const response = await fetch(url);
    const convertedResponse = await response.json();
    console.log(convertedResponse);
  };

  // In this case, the useEffect will have the getMovie function called only when the page is load, hence the empty dependency []
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Grid item xs={12} sm={6}>
        {/* <Card elevation={4} sx={{ display: "flex", padding: "10px" }}> */}
        <MovieList movies={movies} />
        {/* </Card> */}
      </Grid>
    </>
  );
}

export default App;
