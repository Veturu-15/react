import React from 'react';
import { Tv } from '../Data/Tv'; 
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const TvList = () => {
  const displayedTv = Tv.slice(0, 3); 

  return (
    <div className='SliceTv'>
      {displayedTv.map((tv) => (
        <div>
          <h3>{tv.Brand}</h3>
          <img src={tv.images} alt={`${tv.Brand} TV`} />
          <p>Screen Size: {tv.ScreenSize}</p>
          <p>Resolution: {tv.Resolution}</p>
          <p>Price: ₹{tv.price}</p>
        </div>
      ))}
      <Link to='/tv'>
        <Button>View All</Button>
      </Link>  
    </div>
  );
};

export default TvList;
