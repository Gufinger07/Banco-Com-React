import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";


import {
  Icone,
  Box,
  Botao,
  Saldo,
  Detalhe,
  IconeTema,
  Input,
} from "../../Components/ui/index";

const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

const Span = styled.span`
  color: red;
  font-size: 12px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const [saldo, setSaldo] = useState(500);

  const [getSaldo, setInput] = useState(0);

  const [mensagemErro, setMensagem] = useState("");

  const atualizaSaldo = () => {
    if (getSaldo > 0) {
      setSaldo(getSaldo);
      setMensagem("");
    } else {
      setMensagem("Não foi possível atualizar seu saldo");
    }
  };

  const obterSaldo = (event) => {
    setInput(event.target.value);
  };

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
    setMensagem("");
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> {saldo}{" "}
          </Saldo>
        ) : null}
        <Span>{mensagemErro}</Span>
        <Botao onClick={atualizaSaldo}>Atualizar</Botao>
        <Input onChange={obterSaldo} type="number" />
        <Botao onClick={toggleHandler}>
          <IconeMargin
            src={toggleState ? privado : olho_icone}
            alt="Privacidade do Saldo"
          />
        </Botao>
      </div>
      
    </Box>
  );
};

export default Conta;
