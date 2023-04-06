import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../header/Header';
import Tshirt from '../t-shirt/T-shirt';
import Cart from '../cart/Cart'
import './Home.css'

const Home = () => {

    const data = useLoaderData();
     const [cart, setCart] = useState([]);

     const handleCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(!exists){
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
       
     }

     const handleRemoveFromCart = id => {
            const remaining = cart.filter(tshirt => id!==tshirt._id);
            setCart(remaining);
     }
    
    return (
        <div className='home-container'>
           <div className='t-shirts-container'>
           {
                data.map(data => <Tshirt 
                    handleCart={handleCart}
                    key={data._id}
                    data={data}
                ></Tshirt>)
            }

           </div>


           <div className='cart-container'>
            
            <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
         </div>
        </div>
    );
};

export default Home;