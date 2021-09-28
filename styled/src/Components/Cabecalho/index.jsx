import React from "react";
import styled from "styled-components";

import { corPrimaria } from "../ui/variaveis";

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  position: fixed;
  width: 100%;
`;

const Titulo = styled.h1`
  font-size: 45px;
  color: white;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Titulo>GF Bank</Titulo>
    </StyledHeader>
  );
};

export default Cabecalho;
