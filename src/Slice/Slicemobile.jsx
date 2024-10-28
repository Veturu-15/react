import React from 'react';
import Mobile from '../Data/Mobile'; 
import { Link } from 'react-router-dom';


const MobileList = () => {
  const displayedMobiles = Mobile.slice(0, 3);

  return (
    <div className='SliceMobile'>
      {displayedMobiles.map((mobile) => (
        <div>
          <h3>{mobile.title}</h3>
          <img src={mobile.Image} alt={mobile.title} />
         
        </div>
      ))}
      <div ><Link to='/mobile'>
        View All
      </Link></div>
        
    </div>
  );
};

export default MobileList;
