import React from 'react';
/*
  npm i --save history react-router-dom@next
  >> @next eh a versão nova
  >> history eh uma dependencia do react-router-dom
*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Router/Home';
import Sobre from './Router/Sobre';
import Login from './Router/Login';
import Produto from './Router/Produto';
import Header from './Router/Header';
import NotFound from './Router/NotFound';

import ProdutoDesc from './Router/ProdutoDesc';
import ProdutoAval from './Router/ProdutoAval';
import ProdutoCustomizado from './Router/ProdutoCustomizado';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />}>
          <Route path="/" element={<ProdutoDesc />} />
          <Route path="avaliacao" element={<ProdutoAval />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
