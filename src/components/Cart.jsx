import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'



const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    }

    useEffect(() => {
        handlePrice();
    })


    return (
        <div className=' w-[60%] m-auto'>            
            {cart.map((item) => (
                <div className='flex justify-between m-auto' key={item.id}>
                    <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img 
                        className='w-full h-[50px] object-cover rouded-t-lg'
                        src={item.image} 
                        alt={item.name}                    
                        />
                        <p className='font-bold pt-1'>{item.name}</p>
                    </div>
                    <div className='flex mt-5 border-b-orange-200 pb-1'>
                        <button
                        className='bg-transparent border-orange-600 text-orange-600 px-1 py-2 mr-1 font-bold'
                        onClick={() => handleChange(item, 1)}
                        >
                            +
                        </button>
                        <button
                        className='bg-transparent border-orange-600 text-orange-600 p-2 rounded-4'
                        >
                            {item.amount}
                        </button>
                        <button
                        onClick={() => handleChange(item, -1)}
                        className='bg-transparent border-orange-600 text-orange-600 p-2'
                        >
                            -
                        </button>
                    </div>
                    <div className='flex mt-5 border-b-orange-200 pb-1' > 
                        <span className='text-orange-600 p-2 mt-2'>
                            {item.price}
                        </span>
                        <button
                        onClick={() => handleRemove(item.id)}
                        className='bg-transparent border-orange-600 text-orange-600 p-2 rounded-4'
                        >   
                            Remove
                        </button>
                    </div>                    

                </div>
            ))}
            {cart.length !==0 ? <div className='flex justify-between'>
                        <p>Total Price of your Cart</p>
                        <span>R$ {price}</span>
                    </div> : "Your cart is empty"}
                
        </div>
  )
}

export default Cart