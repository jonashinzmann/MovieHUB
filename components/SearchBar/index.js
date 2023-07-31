import React, { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./style";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};

export default SearchBar;
