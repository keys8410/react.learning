import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './DesafioRouter/Components/Produtos';
import Header from './DesafioRouter/Components/Header';
import Footer from './DesafioRouter/Components/Footer';
import Contato from './DesafioRouter/Components/Contato';
import Produto from './DesafioRouter/Components/Produto';
import NotFound from './DesafioRouter/Components/NotFound';

import './DesafioRouter/App.css';

const DesafioRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />}></Route>
            <Route path="/produto/:id" element={<Produto />}></Route>
            <Route path="contato" element={<Contato />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default DesafioRouter;
