import React from 'react'

const Cart = ({cart, setCart}) => {

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const discountedPrice = totalPrice * 0.9; 

  const handleQuantityChange = (id, change) =>{
    setCart(cart.map(item => item.id === id ? {...item, quantity: Math.max(item.quantity + change, 1)} : item ));
  };

  return (
    <div className='w-[80vw] m-auto p-4'>
    <div>
      <h1 className='font-bold text-3xl text-center m-4'>Your Cart</h1>
      {cart.map(item =>(
        <div key={item.id} className='flex justify-between w-[60vw] m-auto p-4 items-center'>
            <div className='w-[30vw] font-bold text-lg'>
            <h2>{item.title}</h2>
            <p className='font-medium text-xl font-mono mt-2'>$ {item.price} x {item.quantity}</p>
            </div>
            <div>
                <button onClick={()=> handleQuantityChange(item.id, -1)} className='px-2 mr-4 text-2xl border-solid border-2 border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-white'>-</button>
                <button onClick={()=> handleQuantityChange(item.id, +1)} className='px-2 text-2xl border-solid border-2 border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-white'>+</button>
            </div>
            <div>
                <button onClick={()=> setCart(cart.filter(i => i.id !== item.id))} className='p-2 border-solid border-2 border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-white'>Remove</button>
            </div>
        </div>
      ))}
    </div>
    <div className='font-bold text-2xl font-mono mt-4 w-[60vw] m-auto'>
        <h2 className='ml-4'>Total : <span className='font-medium'>$ {(totalPrice).toFixed(2)}</span></h2>
        <h2 className='ml-4'>Discounted Total : <span className='font-medium'>$ {(discountedPrice).toFixed(2)}</span></h2>
    </div>
    </div>
  )
}

export default Cart
