import React from 'react';
import Input from './Form/Input';

const Validacoes = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  const validateCep = (value) => {
    if (value.length === 0) {
      setError('Preencha um valor');

      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');

      return false;
    } else {
      setError(null);

      return true;
    }
  };

  const handleBlur = ({ target }) => {
    validateCep(target.value);
  };

  const handleChange = ({ target }) => {
    if (error) validateCep(target.value);
    setCep(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateCep(cep)) console.log('Enviado!');
    else console.log('Não enviado...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        setValue={setCep}
      />
      <br />
      {error && <p>{error}</p>}
    </form>
  );
};

export default Validacoes;
