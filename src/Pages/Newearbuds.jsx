import React from 'react';
import { Earbuds as EarbudsData } from '../Data/Earbuds';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function EarbudsList() {
    return (
        <Link to='/earbuds/:id'>
        <div className='earbuds' style={{display:'flex', flexWrap:'wrap',gap:'3%',padding:'3px'}}>
            {EarbudsData.map((item) => (
                <div className='new'  style={{border:'2px solid black', margin:'10px', color:'black'}}> 
                    <img src={item.imgaes} alt='' style={{height:'350px', width:'300px'}}/>
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
        </Link>
    );
}

export default EarbudsList;
