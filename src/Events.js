import React from 'react';

const App = () => {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return <button onClick={handleClick}>Clique-me!</button>;
};

export default App;
