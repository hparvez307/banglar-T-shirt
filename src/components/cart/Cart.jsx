import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h1>order review</h1>

            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;