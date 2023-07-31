const fetchMovies = async (searchQuery) => {
  const API_KEY = process.env.REACT_APP_MOVIE_HUB_API_KEY;
  const url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.Search;
};

export default fetchMovies;
