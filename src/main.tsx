import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

import Header from '../src/components/Header'
import Footer1 from './components/Footer1'
import Home from './pages/Home'
import CadastroDev from './pages/CadastroDev'
import ListaServicos from './pages/ListaServicos'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='lista/servicos' element={<ListaServicos />} />
        <Route path='cadastro/dev' element={<CadastroDev/>} />
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </React.StrictMode>
  </>
)

