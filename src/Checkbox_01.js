import React from 'react';

const Checkbox_01 = () => {
  /* const [termos, setTermos] = React.useState(false);

  return (
    <form>
      <label htmlFor="">
        <input
          type="checkbox"
          value="termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Li e aceito os termos
        {termos && (
          <p>
            <br />
            Aceitou os termos
          </p>
        )}
      </label>
    </form>
  );*/

  const [cores, setCores] = React.useState(['azul']);

  const constArray = ['azul', 'vermelho', 'roxo', 'laranja', 'verde', 'cinza'];

  const handleChanges = ({ target }) => {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  };

  return (
    <form>
      <ul>
        {constArray &&
          constArray.map((cor) => (
            <label key={cor} htmlFor="" style={{ textTransform: 'capitalize' }}>
              <input
                type="checkbox"
                value={cor}
                checked={cores.includes(cor)}
                onChange={handleChanges}
              />
              {cor}
            </label>
          ))}
      </ul>
    </form>
  );
};

export default Checkbox_01;
