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
    top: 6rem;
    display: flex;
    align-items: center;
    word-break: break-word;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 1.5rem;
      top: 3rem;
      justify-content: flex-start;
    }

    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      left: -1.5rem;
      font-size: 1rem;
      padding: 1rem;
      margin: 1rem;
      top: 1rem;
    }
  }
`;

export const StyledH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const StyledH3 = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const StyledHeart = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: ${(props) => (props.isLiked ? "white" : "white")};
  cursor: pointer;
  margin: 0.5rem;
  font-size: 4rem;

  @media (max-width: 768px) {
    top: 0.3rem;
    right: 0.3rem;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    top: 0rem;
    right: 0rem;
    font-size: 1.5rem;
  }
`;
