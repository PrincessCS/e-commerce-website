import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';


function App() {
  

  return (
    <BrowserRouter>
       <div>
    <Routes>
    <Route path = '/' element = {<Home />} />
    <Route path = '/products' element = {<Products/>} />
    <Route path = '/cart' element = {<Cart/>} />
    <Route path = '/navbar' element = {<NavBar />} />
    <Route path = '/footer' element = {<Footer />} />
    </Routes>

    
    </div>
    </BrowserRouter>
  )
}

export default App;
