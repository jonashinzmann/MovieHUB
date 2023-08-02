import { StyledImage, StyledSection } from "./style";
import { StyledButton } from "../SearchBar/style";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <StyledSection>
      <p>{movie.Title}</p>
      <StyledImage src={movie.Poster} alt={movie.Title} />
      <p>Publishing year: {movie.Year}</p>
      <StyledButton onClick={onClose}>Close</StyledButton>
    </StyledSection>
  );
};

export default MovieDetails;