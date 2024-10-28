import React from 'react';
import { Tv as TvData } from '../Data/Tv'; 
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MobileList() {
    return (
        <div className='tv' style={{ display: 'flex', flexWrap: 'wrap', gap: '3%', padding: '3px' }}>
            {TvData.map((item) => (
                <div key={item.id} className='new' style={{ border: '2px solid black', margin: '10px', color: 'black', padding: '10px' }}>
                    <Link to={'/tv/:id'} style={{ textDecoration: 'none', color: 'black' }}>
                        <img src={item.images} alt={item.Brand} style={{ height: '350px', width: '300px' }} />
                        <h2>Brand: {item.Brand}</h2>
                        <p>Display Technology: {item.DisplayTechnology}</p>
                        <p>Resolution: {item.Resolution}</p>
                        <p>Refresh Rate: {item.RefreshRate}</p>
                        <p>Aspect Ratio: {item.AspectRatio}</p>
                        <p>Product Dimensions: {item.ProductDimensions}</p>
                        <p>Price: {item.price}</p>
                    </Link>
                    <Button className='btn btn-warning' style={{ marginTop: '10px' }}>
                        Add to cart
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default MobileList;
