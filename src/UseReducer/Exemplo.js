import React from 'react';

const reducer = (state, { type, content }) => {
  switch (type) {
    case 'REMOVER':
      return state.filter((fruta) => fruta !== content);

    case 'ADICIONAR':
      return [...state, content];

    default:
      throw new Error();
  }
};

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, ['banana', 'uva']);

  return (
    <div>
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'REMOVER', content: 'banana' })}>
        Remover: BANANA
      </button>
      <br />

      <button
        onClick={() => dispatch({ type: 'ADICIONAR', content: 'banana' })}
      >
        Adicionar: BANANA
      </button>
      <br />

      <button onClick={() => dispatch({ type: 'ADICIONAR', content: 'limão' })}>
        Adicionar: LIMÃO
      </button>

      <h1>
        {state.map((item) => (
          <p>{item}</p>
        ))}
      </h1>
    </div>
  );
};

export default Exemplo;
