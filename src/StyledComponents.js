import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 5rem;
  color: tomato;
`;

const ProdutosContainer = styled.div`
  display: flex;
`;
const Produtos = styled.div`
  flex: 1;
`;

const Preco = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%); /* ${({ cor }) => cor}; */
  color: white;
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? '#000' : '#e43')};

  font-size: 1rem;
  border: 2px solid;
  border-radius: 4px;
  padding: 0.5rem;
  color: ${({ ativo }) => (ativo ? '#e43' : '#000')};
  cursor: pointer;
  &:hover {
    background: red;
  }
  /*
    &::after/before;
  */
`;

const StyledComponents = () => {
  const [ativo, setAtivo] = React.useState(false);

  const template = (value, total) => {
    console.log(value);
    console.log(total);
  };
  const total = 1100;
  template`isto eh ${total} um teste`;

  return (
    <div>
      <ProdutosContainer>
        <Produtos>
          <Titulo>Notebook</Titulo>
          <Preco cor="red">R$ 2999,00</Preco>
        </Produtos>

        <Produtos>
          <Titulo>Smartphone</Titulo>
          <Preco cor="#3dc">R$ 1999,00</Preco>
        </Produtos>
      </ProdutosContainer>
      <br />
      <Comprar ativo={ativo} onClick={() => setAtivo(!ativo)}>
        Comprar
      </Comprar>
    </div>
  );
};

export default StyledComponents;
