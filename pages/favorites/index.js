import React, { useState } from "react";
import Navigation from "../../components/Navbar";
import {
  StyledHeader,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledList,
} from "./style";
import { StyledImage } from "../../components/Header/style";

function FavoritesPage() {
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState([]);

  const handleListNameChange = (event) => {
    setListName(event.target.value);
  };

  const handleCreateList = (event) => {
    event.preventDefault();

    const newList = {
      id: Date.now(),
      name: listName,
    };

    setLists([...lists, newList]);
    setListName("");
  };

  return (
    <div>
      <StyledHeader>Favorites</StyledHeader>
      <StyledImage
        src="/favicon.ico"
        alt="Header Image"
        width={150}
        height={90}
      />

      <StyledForm onSubmit={handleCreateList}>
        <StyledInput
          type="text"
          placeholder="add a list title"
          value={listName}
          onChange={handleListNameChange}
        />
        <StyledButton type="submit">Add List</StyledButton>
      </StyledForm>

      {lists.map((list) => (
        <StyledList key={list.id}>{list.name}</StyledList>
      ))}
      <Navigation />
    </div>
  );
}

export default FavoritesPage;
