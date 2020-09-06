import React from 'react';
/*
  npm i --save history react-router-dom@next
  >> @next eh a versão nova
  >> history eh uma dependencia do react-router-dom
*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Router/Home';
import Sobre from './Router/Sobre';
import Header from './Router/Header';
import NotFound from './Router/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
