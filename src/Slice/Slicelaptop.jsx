import React from 'react';
import Laptop from '../Data/Laptop'; 
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LaptopList = () => {
  const displayedLaptop = Laptop.slice(0, 3);

  return (
    <div className='SliceLaptop'>
      {displayedLaptop.map((laptop) => (
        <div key={laptop.id}>
          <h3>{laptop.title}</h3>
          <img src={laptop.Image} alt={laptop.title} />
        </div>
      ))}
      <Link to='/laptop'>
        <Button>View All</Button>
      </Link>  
    </div>
  );
};

export default LaptopList;
