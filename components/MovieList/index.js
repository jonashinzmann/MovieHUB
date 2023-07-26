import useSWR from "swr";
import { StyledDiv, StyledList } from "./style";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const MovieList = () => {
  const { data, error } = useSWR("/api/movies", fetcher);

  if (error) return <h1>{error.message}</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <StyledList>
        {data.Search.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </StyledList>
    </div>
  );
};

export default MovieList;
