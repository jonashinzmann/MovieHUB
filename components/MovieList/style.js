import styled from "styled-components";

export const StyledList = styled.ul`
  ul {
    text-align: center;
    padding: 1rem;
  }
  li {
    position: relative;
    color: white;
    background-color: #436073;
    padding: 2rem;
    list-style: none;
    margin: 2rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    top: 3rem;
  }
`;

export const StyledH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  z-index: 1;
`;
export const StyledH3 = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

export const StyledHeart = styled.div`
  position: absolute;
  top: 1rem;
  right: 6rem;
  color: ${(props) => (props.isLiked ? "white" : "white")};
  cursor: pointer;
  margin: 0.5rem;
  font-size: 4rem;
`;
