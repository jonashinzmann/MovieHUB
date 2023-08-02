import React, { useState } from "react";
import { StyledList, StyledH2, StyledH3 } from "./style";
import SearchBar from "../SearchBar";
import MovieDetails from "../MovieDetails";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (searchQuery) => {
    setSearchQuery(searchQuery);

    const API_KEY = "b8b14d4f";
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
      setSearchError(false);
    } else {
      setMovies([]);
      setSearchError(true);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    window.scrollTo({ top: 230, behavior: "smooth" });
  };

  const handleCloseMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchError && <StyledH2>No movies found.</StyledH2>}
      {searchQuery && <StyledH3>You searched for: {searchQuery}</StyledH3>}
      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={handleCloseMovieDetails} />
      )}
      <StyledList>
        {movies.map((movie) => (
          <li key={movie.imdbID} onClick={() => handleMovieClick(movie)}>
            {movie.Title}
          </li>
        ))}
      </StyledList>
    </div>
  );
};

export default MovieSearch;
