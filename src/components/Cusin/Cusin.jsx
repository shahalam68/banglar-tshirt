import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children,hasFrind,ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {hasFrind && <Friend ring={ring}></Friend> }
        </div>
    );
};

export default Cusin;