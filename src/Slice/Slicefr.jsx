import React from 'react';
import { ref } from '../Data/ref'; 
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const RefrigeratorList = () => {
  const displayedRefrigerators = ref.slice(0, 3); 

  return (
    <div className='SliceRefrigerators'>
      {displayedRefrigerators.map((refrigerator) => (
        <div key={refrigerator.id}>
          <h3>{refrigerator.Brand}</h3>
          <img src={refrigerator.images} alt={`${refrigerator.Brand} Refrigerator`} />
          <p>Capacity: {refrigerator.Capacity}</p>
          <p>Energy Star Rating: {refrigerator.EnergyStar}</p>
          <p>Price: ₹{refrigerator.price}</p>
        </div>
      ))}
      <Link to='/refrigerators'>
        <Button>View All</Button>
      </Link>  
    </div>
  );
};

export default RefrigeratorList;
