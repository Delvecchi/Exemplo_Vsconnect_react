import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
import Header from '../src/components/Header'
import Footer1 from './components/Footer1'
import Home from './pages/Home'
import ListaServicos from './pages/ListaServicos'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    {/* <ListaServicos /> */}
    <Footer1/>
  </React.StrictMode>,
)

