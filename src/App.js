import { useState } from "react";
import MovieList from "./components/MovieList";

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
  ]);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
