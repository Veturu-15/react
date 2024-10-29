import React from 'react';
import Mobile from '../Data/Mobile';
import { Link } from 'react-router-dom';
function Newmobile() {
  return (
    <div className='hello' style={{display:'flex', flexWrap:'wrap'}}>
        {
            Mobile.map((item)=>{
                return(
                    <Link to={`/mobile/${item.id}`} style={{textDecoration:'none' ,color:'black'}} >
                         <div>
                            <img src={item.Image} alt="" style={{height:'300px', width:'200px', border:'1px solid black', padding:'5%', gap:'5%', margin:'50px'}} />
                            </div>
                        <div className='mob' style={{color:'black', marginLeft:"50px"}}>
                            <p>Brand:  {item.title}</p>
                            <p> price:  {item.price}</p>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Newmobile