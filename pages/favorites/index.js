import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navbar";
import axios from "axios";
import {
  
  StyledForm,
  StyledInput,
  StyledList,
  StyledMdDeleteOutline,
  StyledLiaEditSolid,
  StyledButton,
} from "./style";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledImage,
} from "../../components/Header/style";
import { StyledH2 } from "../../components/MovieList/style";
import { MdDeleteOutline } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";

function FavoritesPage() {
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState([]);
  const [editingListId, setEditingListId] = useState(null);
  const [editedListName, setEditedListName] = useState("");

  const handleListNameChange = (event) => {
    setListName(event.target.value);
  };

  useEffect(() => {
    axios
      .get("/api/list/[id]")
      .then((response) => {
        setLists(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch lists:", error);
      });
  }, []);
  const handleCreateList = (event) => {
    event.preventDefault();
    console.log("List Name:", listName);

    const newList = {
      name: listName,
    };

    axios
      .post("/api/list/[id]", newList)
      .then((response) => {
        setLists([...lists, response.data]);
        setListName("");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Failed to create a new list:", error);
      });
  };

  const handleDeleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const handleEditList = (id, newName) => {
    setLists(
      lists.map((list) => {
        if (list.id === id) {
          return { ...list, name: newName };
        }
        return list;
      })
    );
    setEditingListId(null);
  };

  const handleStartEditing = (id, name) => {
    setEditingListId(id);
    setEditedListName(name);
  };

  const handleSaveChanges = () => {
    console.log("Editing List ID:", editingListId);
    console.log("Edited List Name:", editedListName);
    handleEditList(editingListId, editedListName);
  };

  return (
    <div>
      <StyledHeaderContainer>
        <StyledHeader>
          <h1>Favorites</h1>
          <StyledImage
            src="/favicon.ico"
            alt="Header Image"
            width={150}
            height={90}
          />
        </StyledHeader>
      </StyledHeaderContainer>

      <StyledForm onSubmit={handleCreateList}>
        <StyledInput
          type="text"
          required
          placeholder="Add a list title"
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
            {editingListId === list.id ? (
              <>
                <StyledInput
                  type="text"
                  value={editedListName}
                  onChange={(e) => setEditedListName(e.target.value)}
                />
                <StyledButton onClick={handleSaveChanges}>
                  Save Changes
                </StyledButton>
              </>
            ) : (
              <>
                {list.name}
                <StyledLiaEditSolid
                  onClick={() => handleStartEditing(list.id, list.name)}>
                  <LiaEditSolid />
                </StyledLiaEditSolid>
                <StyledMdDeleteOutline
                  onClick={() => handleDeleteList(list.id)}>
                  <MdDeleteOutline />
                </StyledMdDeleteOutline>
              </>
            )}
          </StyledList>
        ))
      )}
      <Navigation />
    </div>
  );
}

export default FavoritesPage;
