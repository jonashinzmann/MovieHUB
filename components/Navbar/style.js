import styled from "styled-components";

export const Footer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #1a1e26;
  padding: 0.5rem 0;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
  }

  li {
    margin-right: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }

  li:not(:last-child) {
    margin-right: 30rem;
  }

  a:hover {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    li {
      margin-right: 1rem;
    }

    li:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
