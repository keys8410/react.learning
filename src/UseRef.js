import React from 'react';

const UseRef = () => {
  /*
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElem = React.useRef();

  const handleClick = () => {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElem.current.focus();
  };

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>

      <input
        type="text"
        ref={inputElem}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />

      <br />
      <br />

      <button onClick={handleClick}>Enviar</button>
    </div>
  );
  */

  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);

  const timeOutRef = React.useRef();

  const handleClick = () => {
    setCarrinho(carrinho + 1);
    setNotificacao('Novo item adicionado ao carrinho!');

    clearTimeout(timeOutRef); // limpando o timeOut anterior
    timeOutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  };

  return (
    <div>
      <small>{notificacao}</small>
      <br /> <br />
      <button onClick={handleClick}>Total no carrinho: {carrinho}</button>
    </div>
  );
};

export default UseRef;
