import React from 'react';
import Mobile from '../Data/Mobile'; 
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MobileList = () => {
  const displayedMobiles = Mobile.slice(0, 3);

  return (
    <div className='SliceMobile'>
      {displayedMobiles.map((mobile) => (
        <div key={mobile.id}>
          <h3>{mobile.title}</h3>
          <img src={mobile.Image} alt={mobile.title} />
          <p>Price: {mobile.price}</p>
        </div>
      ))}
      <Link to='/mobile'>
        <Button>View All</Button>
      </Link>  
    </div>
  );
};

export default MobileList;
