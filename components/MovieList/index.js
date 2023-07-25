import useSWR from "swr";
import { StyledDiv } from "./style";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const MovieList = () => {
  const API_KEY = process.env.NEXT_PUBLIC_MOVIE_HUB_API_KEY;
  const { data, error } = useSWR(
    `http://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`,
    fetcher
  );

  if (error) return <h1>{error.message}</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <StyledDiv>
      <ul>
        {data.Search.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </StyledDiv>
  );
};

export default MovieList;
