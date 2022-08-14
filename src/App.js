import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import "./App.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNumberOfMovies, setTotalNumberOfMovies] = useState(0);

  const getMovies = async (searchInput, currentPage, totalNumberOfMovies) => {
    // We need to add "type=movie" to the url query so it only returns movies, otherwise we also get games and other types
    const url = `http://www.omdbapi.com/?s=${searchInput}&type=movie&page=${currentPage}&apikey=bf749c16`;

    const response = await fetch(url);
    const convertedResponse = await response.json();

    // Only add the response to the state if there is one or more search results
    if (convertedResponse.Search) {
      setMovies(convertedResponse.Search);
      // The OMDb API only returns 10 results per request, unless we add the parameter "page" in the URL to inquiry more than 10. Once this step is done, we need to set the number of pages for the pagination:
      setTotalNumberOfMovies(convertedResponse.totalResults);
      setNumberOfPages(Math.ceil(convertedResponse.totalResults / 10));
    }
  };

  // In this case, when the searchInput changes, we want to run the getMovies function and trigger the useEffect hook
  useEffect(() => {
    getMovies(searchInput, currentPage, totalNumberOfMovies);
  }, [searchInput, currentPage, totalNumberOfMovies]);

  return (
    <>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <MovieList
        totalNumberOfMovies={totalNumberOfMovies}
        movies={movies}
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
