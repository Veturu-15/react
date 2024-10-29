import React from 'react';
import Laptop from '../Data/Laptop';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Newlaptop() {
  return (
    <div  style={{display:'flex', flexWrap:'wrap'}}>
        {
            Laptop.map((item)=>{
                return(
                    <Link to={`/Laptop/${item.id}`} style={{textDecoration:'none' ,color:'black'}} >
                        <div style={{color:'black', marginLeft:"150px"}}>
                            <img src={item.Image} alt="" style={{height:'300px', width:'200px', border:'1px solid black', padding:'5%', gap:'5%', margin:'50px'}} />
                            <p>Brand: {item.Brand}</p>
                            <p>ModelName: {item.ModelName}</p>
                            <p>ScreenSize: {item.ScreenSize}</p>
                            <p>ColourSilver:{item.ColourSilver}</p>
                            <p>HardDiskSize:{item.HardDiskSize}</p>
                            <p>CPUModel:{item.CPUModel}</p>
                            <p>RAMMemoryInstalledSize:{item.RAMMemoryInstalledSize}</p>
                            <p>price{item.price}</p>
                            <Button className='btn btn-warning' style={{ marginTop: '10px' }}>
                                    Add to cart
                          </Button>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Newlaptop