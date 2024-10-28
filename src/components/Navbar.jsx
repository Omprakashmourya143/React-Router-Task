import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className='p-4 bg-lime-400 text-white text-lg font-semibold flex justify-around items-center mb-6 shadow-lg'>
        <Link to="/" className='text-4xl font-bold font-serif'>Big Fashion Store</Link>
        <Link to="/" className='lg:relative lg:left-60'>Products</Link>
        <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Navbar
