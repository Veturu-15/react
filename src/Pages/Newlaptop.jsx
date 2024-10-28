import React from 'react';
import { Laptop as LaptopData } from '../Data/Laptop';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LaptopList() {
    return (
        <Link to='/laptop/:id'style={{ textDecoration: 'none', color: 'black' }}>
        <div className='laptop'style={{display:'flex', flexWrap:'wrap',gap:'3%',padding:'3px'}}>
            {LaptopData.map((item) => (
                <div className='new'  style={{border:'2px solid black', margin:'10px', color:'black'}}>
                    <p>ID: {item.id}</p> 
                    <img src={item.Image} alt=''style={{height:'350px', width:'300px'}} />
                    <h2>Brand: {item.Brand}</h2>
                    <p>ModelName:{item.ModelName}</p>
                    <p>ScreenSize:{item.ScreenSize}</p>
                    <p>ColourSilver:{item.ColourSilver}</p>
                    <p>HardDiskSize:{item.HardDiskSize}</p>
                    <p>CPUModel:{item.CPUModel}</p>
                    <p>RAMMemoryInstalledSize:{item.RAMMemoryInstalledSize}</p>
                    <p >Price: {item.price}</p>
                    <Button className='btn btn-warning'>
                        Add to cart
                    </Button>
                </div>
            ))}
        </div>
        </Link>
    );
}

export default LaptopList;
