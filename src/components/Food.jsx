import React from 'react'
import { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
    const [foods, setFoods] = useState(data);
   

    //Filter Type
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button 
                    onClick={() => setFoods(data)} 
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        All
                    </button>
                    <button 
                    onClick={() => filterType('burger')} 
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        Burgers
                    </button>
                    <button 
                    onClick={() => filterType('pizza')} 
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        Pizza
                    </button>
                    <button 
                    onClick={() => filterType('salad')} 
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        Salad
                    </button>
                    <button 
                    onClick={() => filterType('chicken')} 
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        Chicken
                    </button>
                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button 
                    onClick={() => filterPrice('$')} 
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        $
                    </button>
                    <button 
                    onClick={() => filterPrice('$$')} 
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        $$
                    </button>
                    <button 
                    onClick={() => filterPrice('$$$')} 
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        $$$
                    </button>
                    <button 
                    onClick={() => filterPrice('$$$$')} 
                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        $$$$
                    </button>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Food