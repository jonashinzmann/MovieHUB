import React, { useState } from "react";
import Navigation from "../../components/Navbar";
import {
  StyledHeader,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledList,
  StyledMdDeleteOutline,
  StyledLiaEditSolid,
} from "./style";
import { StyledImage } from "../../components/Header/style";
import { StyledH2 } from "../../components/MovieList/style";
import { MdDeleteOutline } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";

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

  const handleDeleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
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
          required
          placeholder="add a list title"
          value={listName}
          onChange={handleListNameChange}
        />
        <StyledButton type="submit">Add List</StyledButton>
      </StyledForm>

      {lists.length === 0 ? (
        <StyledH2>No lists created</StyledH2>
      ) : (
        lists.map((list) => (
          <StyledList key={list.id}>
            {list.name}
            <StyledLiaEditSolid>
              <LiaEditSolid />
            </StyledLiaEditSolid>
            <StyledMdDeleteOutline onClick={() => handleDeleteList(list.id)}>
              <MdDeleteOutline />
            </StyledMdDeleteOutline>
          </StyledList>
        ))
      )}
      <Navigation />
    </div>
  );
}

export default FavoritesPage;
