import styled from "styled-components";

export const StyledHeader = styled.header`
  text-align: center;
  background-color: #1a1e26;
  color: white;
  padding-top: rem;
  padding-bottom: 2.5rem;
  font-size: 2rem;
  font-style: bold;
  position: fixed;
  top: 0;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledForm = styled.form`
  margin-top: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10rem;
  }
`;

export const StyledInput = styled.input`
  text-align: center;
  margin-bottom: 0.625rem;
  padding: 0.313rem;
  border-radius: 0.313rem;
  width: 20rem;
  height: 2.188rem;

  @media (max-width: 768px) {
    width: 15rem;
  }

  @media (max-width: 480px) {
    width: 18rem;
  }
`;

export const StyledButton = styled.button`
background-color: #7693a6;
color: white;
padding: 0.625rem 1.25rem;
border: none;
border-radius: 0.313rem;
cursor: pointer;
width: 8rem;
font-size: 1rem;

  @media (max-width: 768px) {
    width: 8rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 8rem;
    font-size: 1rem;
  }
`;

export const StyledList = styled.ul`
  text-align: center;
  padding: 1rem;
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1.5rem;
    margin: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 1rem;
    margin: 1rem;
  }
`;

export const StyledMdDeleteOutline = styled.div`
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 3.125rem;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  color: white;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    right: 2.5rem;
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    right: 2rem;
    font-size: 1.5rem;
  }
`;

export const StyledLiaEditSolid = styled.div`
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 5rem;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    right: 4rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    right: 4rem;
    font-size: 1.5rem;
  }
`;
