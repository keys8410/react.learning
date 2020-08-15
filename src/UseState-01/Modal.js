import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <div>
        Esse é o modal. <button onClick={() => setModal(false)}>&times;</button>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
