import React from 'react';
import { Tv } from '../Data/Tv'; 
import { Link } from 'react-router-dom';


const TvList = () => {
  const displayedTv = Tv.slice(0, 3); 

  return (
    <Link to='/tv/:id' style={{ textDecoration: 'none', color: 'black' }}>
    <div className='SliceTv'style={{justifyContent:'space-around'}}>
      {displayedTv.map((tv) => (
        <div>
          <h3>{tv.Brand}</h3>
          <img src={tv.images} alt={''} style={{height:'200px', width:'200px'}} />
          <p>Screen Size: {tv.ScreenSize}</p>
          <p>Resolution: {tv.Resolution}</p>
          <p>Price: ₹{tv.price}</p>
        </div>
      ))}
      <div style={{justifyContent:'end', marginTop:'320px'}}>
      <Link to='/tv'>
        View All
      </Link> 
      </div> 
    </div>
    </Link>
  );
};

export default TvList;
