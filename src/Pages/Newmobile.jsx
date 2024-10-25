import React from 'react';
import { Mobile as MobileData } from '../Data/Mobile';
function MobileList() {
    return (
        <div className='mobile'>
            {MobileData.map((item) => (
                <div >
                    <p>ID: {item.id}</p> 
                    <h2>Title: {item.title}</h2>
                    <img src={item.Image} alt={item.title} />
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default MobileList;
