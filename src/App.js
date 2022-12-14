import React, { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Category from './components/Category';
import DisplayFood from './components/DisplayFood';
import Food from './components/Food';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';



function App() {    
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
 

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item])
        
    };

    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;

      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);
    };

    /* useEffect(() => {
      const quantidadeTotal = cart.reduce(
        (total, {amount}) => total + (Number(amount) || 0),
        0
      );
      setCart(quantidadeTotal)
    }, [cart]);*/

    
  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} handleClick={handleClick}/>
      { show ? <Hero /> : ''}
      { show ? <HeadlineCards /> : ''}
      { show ? <Food /> : ''}
      { show ? 
      (<DisplayFood handleClick={handleClick}/>
      ) : (
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      { show ? <Category /> : ''}
    </React.Fragment>
  );
}

export default App;
