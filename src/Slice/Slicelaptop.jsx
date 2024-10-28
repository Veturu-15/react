import React from 'react';
import Laptop from '../Data/Laptop'; 
import { Link } from 'react-router-dom';

const LaptopList = () => {
  const displayedLaptop = Laptop.slice(0, 3);

  return (
    <Link to='/laptop/:id' style={{ textDecoration: 'none', color: 'black' }}>
    <div className='SliceLaptop' style={{justifyContent:'space-around'}}>
      {displayedLaptop.map((laptop) => (
        <div key={laptop.id}>
          <h3>{laptop.Brand}</h3>
          <img src={laptop.Image} alt={laptop.title} style={{height:'400px', width:'300px'}} />
        </div>
      ))}
      <div style={{justifyContent:'end', marginTop:'260px'}}>
      <Link to='/laptop'>
        View All
      </Link>  
      </div>
      
    </div>
    </Link>
  );
};

export default LaptopList;
