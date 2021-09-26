import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const channleProduct of cart) {
        total = total + channleProduct.price;
    }
    return (
        <div>
            <h3>Total Added {props.cart.length} Channels </h3>
            {/* <h5>Channel Subscribes: {cart.length}</h5> */}
            <br />
            <p>Total Monthly Income: ${total}</p>
        </div>
    );
};

export default Cart;