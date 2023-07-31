import React, { useState } from "react";
import { StyledList, StyledH2, StyledH3 } from "./style";
import SearchBar from "../SearchBar";
import fetchMovies from "../../pages/api/movies";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchError && <StyledH2>No movies found.</StyledH2>}
      {searchQuery && <StyledH3>You searched for: {searchQuery}</StyledH3>}
      <StyledList>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </StyledList>
    </div>
  );
};

export default MovieSearch;
