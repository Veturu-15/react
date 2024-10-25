import React from 'react';
import { ref as RefData } from '../Data/Refrigerator';
function MobileList() {
    return (
        <div className='ref'>
            {RefData.map((item) => (
                <div >
                    <p>ID: {item.id}</p> 
                    <img src={item.images} alt='' />
                    <h2>Brand: {item.Brand}</h2>
                    <p>Capacity:{item.Capacity}</p>
                    <p>Configuration:{item.Configuration}</p>
                    <p>EnergyStar:{item.EnergyStar}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default MobileList;
