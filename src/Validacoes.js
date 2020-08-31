import React from 'react';
import Input from './Form/Input';
import useForm from './CustomHooks/UseForm';

const Validacoes = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  console.log(cep);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cep.validate() && email.validate() && nome.validate())
      console.log('Enviado!');
    else console.log('Não enviado...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <br />
      <Input label="Email" id="email" type="email" {...email} />
      <br />
      <Input label="Nome" id="nome" type="text" {...nome} />
      <br />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <br />
      <button>Enviar</button>
    </form>
  );
};

export default Validacoes;
