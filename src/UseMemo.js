import React from 'react';

const operacaoLenta = () => {
  let c;
  for (let i = 0; i < 1000000000; i++) {
    c = i + i / 10;
  }
  return c;
};

const UseMemo = () => {
  const [contar, setContar] = React.useState(0);

  const time = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - time);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}></button>
    </div>
  );
};

export default UseMemo;
