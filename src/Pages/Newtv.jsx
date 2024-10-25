import React from 'react';
import { Tv as TvData } from '../Data/Tv';
function MobileList() {
    return (
        <div className='mobile'>
            {TvData.map((item) => (
                <div >
                    <p>ID: {item.id}</p> 
                    <img src={item.images} alt='' />
                    <h2>Brand: {item.Brand}</h2>
                    <p>DisplayTechnology:{item.DisplayTechnology}</p>
                    <p>Resolution:{item.Resolution}</p>
                    <p>RefreshRate:{item.RefreshRate}</p>
                    <p>AspectRatio:{item.AspectRatio}</p>
                    <p>ProductDimensions:{item.ProductDimensions}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default MobileList;
