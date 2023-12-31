import React from 'react';
import './Tshitr.css'

const Tshirt = ({tshirt,handleAddTocart}) => {
    const {picture,name,price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price:${price}</p>
            <button onClick={() =>handleAddTocart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;