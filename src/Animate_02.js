import React from 'react';
import './Animate_02/Slide.module.css';
import Slide from './Animate_02/Slide';

const Animate_02 = () => {
  const [ativar, setAtivar] = React.useState(false);

  const slides = [
    { id: 'slide01', text: 'Slide 01' },
    { id: 'slide02', text: 'Slide 02' },
    { id: 'slide03', text: 'Slide 03' },
  ];
  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default Animate_02;
