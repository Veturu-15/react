import React from 'react';
import { Tv as TvData } from '../Data/Tv';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MobileList() {
    return (
        <Link to='/tv/:id'>
        <div className='tv'style={{display:'flex', flexWrap:'wrap',gap:'3%',padding:'3px'}}>
            {TvData.map((item) => (
                <div className='new' style={{border:'2px solid black', margin:'10px', color:'black'}} >
                    <img src={item.images} alt='' style={{height:'350px', width:'300px'}} />
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
        </Link>
    );
}

export default MobileList;
