import styled from "styled-components";

export const StyledSection = styled.section`
  text-align: center;
  padding: 1rem;
  color: white;
  background-color: #436073;
  padding: 2rem;
  list-style: none;
  margin: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  border-radius: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1.5rem;
    margin: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 1rem;
    margin: 0.5rem;
  }
`;

export const StyledImage = styled.img`
  border: 0.625rem solid #ffffff;
  border-radius: 0.313rem;

  @media (max-width: 768px) {
    border-width: 0.4rem;
    border-radius: 0.25rem;
  }

  @media (max-width: 480px) {
    border-width: 0.3rem;
    border-radius: 0.2rem;
    width: 50%; /* Add this line to make the image 50% of its original size */
  }
`;

