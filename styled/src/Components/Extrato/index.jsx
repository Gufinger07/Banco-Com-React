import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "../ui";
import { extratoLista } from "../../info";
import Itens from "../Itens";

const Total = styled.h3`
margin-top: 20px;
  align-self: flex-end;
`;

const Extrato = () => {
  var totalExtrato = 0;

  const [total, setTotal] = useState(500);

  const atualizaTotal = () => {
    setTotal(totalExtrato);
  };
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        totalExtrato += parseInt(value);
        return (
          <Itens
            key={id}
            type={type}
            from={from}
            value={value}
            date={date}
          ></Itens>
        );
      })}

      <Total>
        Total: <span> R$ {totalExtrato} </span>
      </Total>
    </Box>
  );
};

export default Extrato;
