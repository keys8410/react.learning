import React from 'react';

const Produto = ({ dados }) => {
  React.useEffect(() => {
    const handleScroll = (event) => {
      console.log(event);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <h1>Meu Produto</h1>
    </div>
  );
};

export default Produto;
