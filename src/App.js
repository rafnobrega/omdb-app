import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import { Container, Grid, Card } from "@mui/material";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getMovies = async (searchInput) => {
    const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=bf749c16`;
    const response = await fetch(url);
    const convertedResponse = await response.json();

    // Only add the response to the state if there is one or more search results
    if (convertedResponse.Search) {
      setMovies(convertedResponse.Search);
    }
  };

  // In this case, when the searchInput changes, we want to run the getMovies function and trigger the useEffect hook
  useEffect(() => {
    getMovies(searchInput);
  }, [searchInput]);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90vw",
        }}
      >
        <Header heading="Movies" />
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </Container>
      <MovieList movies={movies} />
    </>
  );
}

export default App;
