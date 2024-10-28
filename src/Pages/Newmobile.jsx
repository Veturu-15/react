import React from 'react';
import { Mobile as MobileData } from '../Data/Mobile';
import { Button } from 'react-bootstrap';
function MobileList() {
    return (
        <div className='mobile'>
            {MobileData.map((item) => (
                <div >
                    <h2>Title: {item.title}</h2>
                    <img src={item.Image} alt={item.title} />
                    <p>Price: {item.price}</p>
                    <Button className='btn btn-warning'>
                        Add to cart
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default MobileList;
