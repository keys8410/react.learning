import React from 'react';
import Exemplo from './UseReducer/Exemplo';

const reducer = (state, action) => {
  console.log();

  switch (action) {
    case 'AUMENTAR':
      return state + 1;

    case 'DIMINUIR':
      return state - 1;

    default:
      // podemos retornar o estado puro - caso caia nesta exception
      throw new Error('Action doenst exists.');
  }
};

const UseReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <h1>{state}</h1>

      <button onClick={() => dispatch('DIMINUIR')}>-</button>
      <button onClick={() => dispatch('AUMENTAR')}>+</button>
      <br />
      <br />
      <Exemplo />
    </div>
  );
};

export default UseReducer;

/* <button onClick={diminuir}>-</button>
      <button onClick={aumentar}>+</button>
 */
