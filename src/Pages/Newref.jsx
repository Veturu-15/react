import React from 'react';
import { ref as RefData } from '../Data/Refrigerator';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RefrigeratorList() {
    return (
        <div className='ref' style={{ display: 'flex', flexWrap: 'wrap', gap: '3%', padding: '3px' }}>
            {RefData.map((item) => (
                <div key={item.id} className='new' style={{ border: '2px solid black', margin: '10px', color: 'black' }}>
                    <Link to={'/ref/:id'} style={{ textDecoration: 'none', color: 'black' }}>
                        <img src={item.images} alt={item.Brand} style={{ height: '500px', width: '300px' }} />
                        <h2>Brand: {item.Brand}</h2>
                        <p>Capacity: {item.Capacity}</p>
                        <p>Configuration: {item.Configuration}</p>
                        <p>Energy Star: {item.EnergyStar}</p>
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

export default RefrigeratorList;
