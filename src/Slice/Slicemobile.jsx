import React from 'react';
import Mobile from '../Data/Mobile'; 
import { Link } from 'react-router-dom';

const MobileList = () => {
  const displayedMobiles = Mobile.slice(0, 3);

  return (
    <div className='SliceMobile' style={{ justifyContent: 'space-around' }}>
      {displayedMobiles.map((mobile) => (
        <Link 
          key={mobile.id} 
          to={`/mobile/${mobile.id}`} 
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <div>
            <h3>{mobile.title}</h3>
            <img src={mobile.Image} alt={mobile.title} style={{ height: '200px', width: '200px' }} />
          </div>
        </Link>
      ))}
      <div style={{ justifyContent: 'end', marginTop: '260px' }}>
        <Link to='/mobile'>
          View All
        </Link>
      </div>
    </div>
  );
};

export default MobileList;
