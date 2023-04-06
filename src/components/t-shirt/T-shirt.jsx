import React from 'react';
import './Tshirt.css'

const Tshirt = ({data,handleCart}) => {
 
    const {picture, name, price} = data;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={()=> handleCart(data)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;