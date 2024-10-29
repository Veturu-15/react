import React from 'react';
import Laptop from '../Data/Laptop'; 
import { Link } from 'react-router-dom';

const LaptopList = () => {
  const displayedLaptop = Laptop.slice(0, 3);

  return (
    <div className='SliceLaptop' style={{ justifyContent: 'space-around' }}>
      {displayedLaptop.map((laptop) => (
        <Link 
          key={laptop.id} 
          to={`/Laptop/${laptop.id}`} 
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <div>
            <h3>{laptop.Brand}</h3>
            <img src={laptop.Image} alt={laptop.title} style={{ height: '400px', width: '300px' }} />
          </div>
        </Link>
      ))}
      <div style={{ justifyContent: 'end', marginTop: '460px' }}>
        <Link to='/laptop'>
          View All
        </Link>  
      </div>
    </div>
  );
};

export default LaptopList;
