import React from 'react';
import ButtonModal from './UseState-01/ButtonModal';
import Modal from './UseState-01/Modal';

const UseState = () => {
  const [modal, setModal] = React.useState(() => {
    const ativo = window.localStorage.getItem
  });
  const [items, setItems] = React.useState('teste');

  const handleClick = () => {
    setItems('outro teste');
  };
  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>Trocar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default UseState;
