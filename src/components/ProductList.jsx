import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';

const ProductList = ({cart, setCart}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () =>{
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      };
      fetchProducts();
    }, [])
    
  return (
    <div className='grid w-[80vw] m-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  )
}

export default ProductList

