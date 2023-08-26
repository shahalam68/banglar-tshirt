import React, { useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import { createContext } from 'react';

export const RingContext = createContext('gold ring');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const [money, setMoney] = useState(0);
    const ring = 'daimond'

    return (
        <div className='grandpa'>
            <h2>Grandpa </h2>
            <p>Has Money:{money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>

        </div>
    );
};

export default Grandpa;
/**
 * 1. Create context
 * 2.Create a Provider and pass a value
 * 3. use contex to receive value 
*/