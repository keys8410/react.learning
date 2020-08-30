import React from 'react';

const Input_01 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  /*
  * const [nome, setNome] = React.useState('');
  * const [email, setEmail] = React.useState('');

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <p>{nome}</p>
      <p>{email}</p>

      <button>Enviar</button>
    </form>
  );
  */

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <p>{form.nome}</p>
      <p>{form.email}</p>

      <button>Enviar</button>
    </form>
  );
};

export default Input_01;
