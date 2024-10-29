import React from 'react'
import Earbuds from '../Data/Earbuds'
import { Link } from 'react-router-dom'
function Newearbuds() {
  return (
    <div style={{display:'flex', flexWrap:'wrap'}}>
        {
            Earbuds.map((item)=>{
                return(
                    <Link to={`/earbuds/${item.id}`} style={{textDecoration:'none' ,color:'black'}}>
                        <div>
                            <img src={item.imgaes} alt=""style={{height:'300px', width:'200px', border:'1px solid black', padding:'5%', gap:'5%', margin:'50px'}} />
                        </div>
                        <div style={{marginLeft:"90px"}}>
                            <p>Brand:{item.Brand}</p>
                            <p>Colour:{item.Colour}</p>
                            <p>EarPlacement:{item.EarPlacement}</p>
                            <p>FormFactor:{item.FormFactor}</p>
                            <p>Headphones:{item.Headphones}</p>
                            <p>price:{item.price}</p>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Newearbuds