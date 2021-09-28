import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato"

const Container = styled.div`
  min-height: 90vh;
  padding: 0px 15vw;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Conteudo = styled.section`
margin-top: 50px;
  display: flex;
  flex-direction: row;
  color: ${({theme}) => theme.text};
  justify-content: space-between;
`;

export default () => {
  return (
    <Container className="container">
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo className="conteudo">
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};
