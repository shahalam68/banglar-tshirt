import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message=<p>Please Add Some Products</p>
    }
    else{
        message =<div>
            <h3>Borlolox</h3>
            <p><small>Thanks for giving me a money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ?'blue' : 'red'}>Order summery:{cart.length}</h2>
            <p className={`bold borderd ${cart.length === 3 ? 'yelow' : 'orange'}`}>Somthing</p>
            {cart.length >2 ? <span className='purple'>Aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => 
                <p key={tshirt._id}
                >{tshirt.name}<button 
                onClick={() => handleRemoveFromCart(tshirt._id)}
                >X</button></p>)
            }
            {
                cart.length === 2 && <p> Duble bonanza!!1</p>
            }
            {
                cart.length === 3 || <h4>tinta tho hoilona </h4>
            }
        </div>
    );
};

export default Cart;



/**
 * conditional rendering
 * 1. use if else to set a variable that will contain an element or componenets
 * 2. ternery condition ? 'for true' : false
 * 3. &&: if the condition is true then the next thing will display
 * 4. || if the condition is false then the next thing will display 
 */
/**
 * Conditional css class
 * 1. use ternary
 * 2. ternary inside template string
 */