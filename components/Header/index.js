import React from "react";
import { StyledHeader, StyledHeaderContainer, StyledImage } from "./style";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <h1>MovieHUB</h1>
        <StyledImage
          src="/favicon.ico"
          alt="Header Image"
          width={150}
          height={90}
        />
      </StyledHeader>
    </StyledHeaderContainer>
  );
}
