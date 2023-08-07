import styled from "styled-components";
export const StyledHeader = styled.header`
  text-align: center;

  background-color: #1a1e26;
  color: white;
  padding-top: 1rem;
  padding-bottom: 3rem;
  font-size: 2rem;
  font-style: bold;
  position: fixed;
  top: 0;
  width: 100%;
`;
export const StyledForm = styled.form`
  margin-top: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  text-align: center;
  margin-bottom: 0.625rem;
  padding: 0.313rem;
  border-radius: 0.313rem;
  width: 20rem;
  height: 2.188rem;
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
`;

export const StyledList = styled.ul`
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
  cursor: pointer;
}
`;
