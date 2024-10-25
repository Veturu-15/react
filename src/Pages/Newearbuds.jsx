import React from 'react';
import { Earbuds as EarbudsData } from '../Data/Earbuds';

function EarbudsList() {
    return (
        <div className='mobile'>
            {EarbudsData.map((item) => (
                <div>
                    <p>ID: {item.id}</p> 
                    <img src={item.imgaes} alt=''/>
                    <h2>Brand: {item.Brand}</h2>
                    <p>Colour:{item.Colour}</p>
                    <p>EarPlacement:{item.EarPlacement}</p>
                    <p>FormFactor:{item.FormFactor}</p>
                    <p>Headphones:{item.Headphones}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default EarbudsList;
