import React from 'react';
import { ref as RefData } from '../Data/Refrigerator';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function MobileList() {
    return (
        <Link to='/ref/:id'>
        <div className='ref' style={{display:'flex', flexWrap:'wrap',gap:'3%',padding:'3px'}}>
            {RefData.map((item) => (
                <div className='new' style={{border:'2px solid black', margin:'10px', color:'black'}}>
                    <img src={item.images} alt=''style={{height:'500px', width:'300px'}} />
                    <h2>Brand: {item.Brand}</h2>
                    <p>Capacity:{item.Capacity}</p>
                    <p>Configuration:{item.Configuration}</p>
                    <p>EnergyStar:{item.EnergyStar}</p>
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
