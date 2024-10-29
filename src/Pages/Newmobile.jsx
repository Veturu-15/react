import React from 'react';
import Mobile from '../Data/Mobile';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Newmobile() {
  return (
    <div className='hello' style={{display:'flex', flexWrap:'wrap'}}>
        {
            Mobile.map((item)=>{
                return(
                    <Link to={`/mobile/${item.id}`} style={{textDecoration:'none' ,color:'black'}} >
                         <div>
                            <img src={item.Image} alt="" style={{height:'300px', width:'200px', padding:'5%', gap:'5%', margin:'50px', border:'1px solid black'}} />
                            </div>
                        <div className='mob' style={{color:'black', marginLeft:"50px"}}>
                            <p>Brand:  {item.title}</p>
                            <p> price:  {item.price}</p>
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

export default Newmobile