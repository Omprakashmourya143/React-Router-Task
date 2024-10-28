import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList cart={cart} setCart={setCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App

