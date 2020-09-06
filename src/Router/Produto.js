import React from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  /*
    const location = useLocation();

    console.log('*** params =>', params);
    console.log('*** location =>', location);

    const search = new URLSearchParams(location.search);
    console.log('*** search =>', search.get());
    
    dentro do parametro get(), usa-se a KEY para selecionar os dados

    >> memoria=16
    >> cor=verde
  */

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="" end>
          Descrição
        </NavLink>{' '}
        <NavLink to="avaliacao">Avaliação</NavLink>{' '}
        <NavLink to="customizado">Customização</NavLink>
      </nav>
      <Outlet />{' '}
    </div>
  );
};

export default Produto;
