import React from 'react';
import { Earbuds as EarbudsData } from '../Data/Earbuds';
import { Button } from 'react-bootstrap';
function EarbudsList() {
    return (
        <div className='mobile'>
            {EarbudsData.map((item) => (
                <div> 
                    <img src={item.imgaes} alt=''/>
                    <h2>Brand: {item.Brand}</h2>
                    <p>Colour:{item.Colour}</p>
                    <p>EarPlacement:{item.EarPlacement}</p>
                    <p>FormFactor:{item.FormFactor}</p>
                    <p>Headphones:{item.Headphones}</p>
                    <p>Price: {item.price}</p>
                    <Button className='btn btn-warning'>
                        Add to cart
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default EarbudsList;
