import React from 'react';
import { Mobile as MobileData } from '../Data/Mobile';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MobileList() {
    return (
        <Link to='/mobile/:id' style={{ textDecoration: 'none', color: 'black' }}>
        <div className='mobile' style={{display:'flex', flexWrap:'wrap',gap:'3%',padding:'3px'}}>
            {MobileData.map((item) => (
                <div className='new'  style={{border:'2px solid black', margin:'10px'}}>
                    <h2>Title: {item.title}</h2>
                    <img src={item.Image} alt={item.title} style={{height:'350px', width:'300px'}} />
                    <p className='hero' style={{color:'black'}}>Price: {item.price}</p>
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
