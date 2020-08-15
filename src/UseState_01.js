import React from 'react';
import ButtonModal from './UseState-01/ButtonModal';
import Modal from './UseState-01/Modal';

const UseState = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default UseState;
