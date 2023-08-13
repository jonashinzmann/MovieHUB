import styled from "styled-components";

export const StyledHeader = styled.header`
  text-align: center;
  background-color: #1a1e26;
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-top: 0.3rem;
    padding-bottom: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding-top: 0.2rem;
    padding-bottom: 0.4rem;
  }
`;

export const StyledHeaderContainer = styled.div`
  margin-bottom: 13rem;
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0rem;
  left: -1rem;

  @media (max-width: 768px) {
    width: 80px;
    height:70px
  }

  @media (max-width: 480px) {
    width: 8rem;
  }
`;
