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
        <div className=' w-[50%] m-auto pt-4'>            
            {cart.map((item) => (
                <div className='flex items-center flex-col md:flex-row justify-between m-auto border-b border-b-orange-500 mb-2 pb-2' key={item.id}>
                    <div className='w-[100px] shadow-lg rounded-lg hover:scale-105 duration-300 mr-2'>
                    <img 
                    className='w-full h-[50px] object-cover rouded-t-lg'
                    src={item.image} 
                    alt={item.name}                    
                    />
                        <p className='font-bold pt-1 '>{item.name}</p>
                    </div>
                    <div className='flex  mt-5 pb-1'>
                        <button
                        className='box-content h-[30px] w-[10px] bg-transparent border-orange-600 text-orange-600 font-bold mr-2 hover:bg-orange-600 hover:text-white'
                        onClick={() => handleChange(item, 1)}
                        >
                            +
                        </button>
                        <button
                        className='box-content h-[30px] w-[10px] bg-transparent border-orange-600 text-orange-600 mr-2'
                        >
                            {item.amount}
                        </button>
                        <button
                        onClick={() => handleChange(item, -1)}
                        className='box-content h-[30px] w-[10px] bg-transparent border-orange-600 text-orange-600 mr-2 hover:bg-orange-600 hover:text-white'
                        >
                            -
                        </button>
                    </div>
                    <div className='flex mt-5 border-b-orange-200 pb-1' > 
                        <span className='text-orange-600 pt-2 mr-2'>
                            R$ {item.price.toFixed(2)}
                        </span>
                        <button
                        onClick={() => handleRemove(item.id)}
                        className='box-content h-[30px] w-[60px] bg-transparent border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                        >   
                            Remove
                        </button>
                    </div>                    

                </div>
            ))}
            {cart.length !==0 ? <div className='flex justify-between'>
                        <p className='font-bold'>Total Price of your Cart</p>
                        <span className='font-bold'>R$ {price.toFixed(2)}</span>
                    </div> : <p className='font-bold text-xl '>Ops, loks like your cart is empty!</p>}
                
        </div>
  )
}

export default Cart