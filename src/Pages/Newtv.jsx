import React from 'react';
import { Tv as TvData } from '../Data/Tv';
import { Button } from 'react-bootstrap';
function MobileList() {
    return (
        <div className='mobile'>
            {TvData.map((item) => (
                <div >
                    <img src={item.images} alt='' />
                    <h2>Brand: {item.Brand}</h2>
                    <p>DisplayTechnology:{item.DisplayTechnology}</p>
                    <p>Resolution:{item.Resolution}</p>
                    <p>RefreshRate:{item.RefreshRate}</p>
                    <p>AspectRatio:{item.AspectRatio}</p>
                    <p>ProductDimensions:{item.ProductDimensions}</p>
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
