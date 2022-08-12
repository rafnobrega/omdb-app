
const MovieList = (props) => {
  return (
    // Remember that most keys from the OMDB Api objects are Capitalized 
    // Use the map function to display each movie from the array (props)
    <>
      {props.movies.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt="movie-poster"></img> 
        </div>
      ))}
    </>
  );
};

export default MovieList;
