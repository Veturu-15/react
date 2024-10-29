import React from 'react';
import Tv from '../Data/Tv'; 
import { Link } from 'react-router-dom';

const TvList = () => {
  const displayedTv = Tv.slice(0, 3); 

  return (
    <div className='SliceTv' style={{ justifyContent: 'space-around' }}>
      {displayedTv.map((tv) => (
        <Link 
          key={tv.id} 
          to={`/tv/${tv.id}`} 
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <div>
            <h3>{tv.Brand}</h3>
            <img src={tv.images} alt={tv.Brand} style={{ height: '200px', width: '200px' }} />
            <p>Screen Size: {tv.ScreenSize}</p>
            <p>Resolution: {tv.Resolution}</p>
            <p>Price: ₹{tv.price}</p>
          </div>
        </Link>
      ))}
      <div style={{ justifyContent: 'end', marginTop: '320px' }}>
        <Link to='/tv'>
          View All
        </Link> 
      </div> 
    </div>
  );
};

export default TvList;
