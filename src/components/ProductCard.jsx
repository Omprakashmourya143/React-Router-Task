import React from 'react'

const ProductCard = ({product, cart, setCart}) => {
    
  const isInCart = cart.some(item => item.id === product.id);

  const handleCart = () =>{
    if(isInCart){
        setCart(cart.filter(item => item.id !== product.id));
    }else{
        setCart([...cart, {...product, quantity:1 }])
    }
  }

  return (
    <div className='border mx-2 mb-6 p-4 shadow-xl rounded-xl'>
      <img src={product.image} alt={product.title} className='w-48 h-48 object-contain mb-4 mt-4 lg:pl-12' />
      <h2 className='font-bold text-lg mb-4 lg:h-14 md:h-20 h-28'>{(product.title).substring(0,51)}...</h2>
      <p className='mb-4 lg:h-24 text-justify md:h-28 h-20'>{(product.description).substring(0,108)}...</p>
      <p className='font-semibold text-lg mb-2'>$ {product.price}</p>
      <button onClick={handleCart} className='borer-solid border-2 border-lime-400 text-lime-600 p-2 rounded-lg w-full hover:bg-lime-500 hover:text-white hover:border-2 mt-2'>{isInCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </div>
  )
}

export default ProductCard
