import React from 'react'
import Card from './Card'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <Card 
        title="Sun's Out BOGO's Out"
        subtittle='Through 10/15' 
        src='https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='Imagem de café da manhã'
        />
        <Card 
        title='New Restaurants'
        subtittle='Added Daily' 
        src='https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='Imagem de restaurante'
        />
        <Card 
        title='We Deliver Desserts Too'
        subtittle='Tasty Treats' 
        src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='Imagem de sobremesa'
        />
    </div>
  )
}

export default HeadlineCards