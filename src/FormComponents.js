import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

const ComponentInput = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('vermelho');
  const [fruta, setFruta] = React.useState('');
  const [ling, setLing] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <h2>Termos:</h2>
      <Checkbox
        options={['li os termos']}
        value={termos}
        setValue={setTermos}
      />
      <br />

      <h2>Checkbox</h2>
      <Checkbox
        options={['javascript', 'CSS', 'HTML', 'PHP', 'ruby']}
        value={ling}
        setValue={setLing}
      />
      <h2>Cor selecionada: {cor}</h2>
      <Radio
        options={['azul', 'vermelho', 'roxo']}
        value={cor}
        setValue={setCor}
      />
      <h2>Fruta selecionada: {fruta}</h2>
      <Radio
        options={['melão', 'morango', 'abacaxi']}
        value={fruta}
        setValue={setFruta}
        required
      />
      <br />
      <br />
      <Select
        options={['smartphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <br />
      <br />
      <Input id="nome" label="Nome" setValue={setNome} />
      <Input id="mail" label="Email" setValue={setEmail} required />
      <br />
      <button>Enviar</button>
    </form>
  );
};

export default ComponentInput;
