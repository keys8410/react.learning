import React from 'react';

const Input_02 = () => {
  const formFields = [
    { id: 'nome', label: 'Nome:', type: 'text' },
    { id: 'email', label: 'Email:', type: 'email' },
    { id: 'senha', label: 'Senha:', type: 'password' },

    { id: 'cep', label: 'CEP:', type: 'text' },
    { id: 'rua', label: 'Rua:', type: 'text' },
    { id: 'numero', label: 'Numero:', type: 'text' },
    { id: 'bairro', label: 'Bairro:', type: 'text' },
    { id: 'cidade', label: 'Cidade:', type: 'text' },
    { id: 'estado', label: 'Estado:', type: 'text' },
  ];

  const [form, setForm] = React.useState(
    formFields.reduce((acc, { id }) => {
      return { ...acc, [id]: '' };
    }, {}),
  );
  const [response, setResponse] = React.useState(null);

  /**/
  const handleChange = ({ target }) => {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const json = await res.json();
    setResponse(json);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            name={id}
            id={id}
            value={form[id]}
            onChange={handleChange}
          />
        </div>
      ))}
      {response && response.ok && <p>Usuário cadastrado!</p>}
      <button>Enviar</button>
    </form>
  );
};

export default Input_02;
