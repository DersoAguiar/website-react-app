import React, { useState } from 'react'
import { data } from '../data/data';

const DisplayFood = ({handleClick}) => {

    const [foods, setFoods] = useState(data);

    

  return (
    <div>
        {/* Display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item) => (
                <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img 
                    className='w-full h-[200px] object-cover rouded-t-lg'
                    src={item.image} 
                    alt={item.name}                    
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold pt-1'>{item.name}</p>
                        <p>
                        <button onClick={() => handleClick(item)} className='border-orange-500 bg-white text-orange-500 mx-2  hover:bg-orange-600 hover:text-white'>
                            Add
                        </button>
                            <span 
                            className='bg-orange-500 text-white p-1 rounded-full '>
                                R${item.price}                                
                            </span>
                        </p>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default DisplayFood