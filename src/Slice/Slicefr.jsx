import React from 'react';
import { ref } from '../Data/Refrigerator'; // Make sure 'ref' is properly imported
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const RefrigeratorList = () => {
  // Check if ref is defined and has items
  if (!ref || ref.length === 0) {
    return <p>No refrigerators available.</p>;
  }

  const displayedRefrigerators = ref.slice(0, 3);

  return (
    <div className='SliceRefrigerators'>
      {displayedRefrigerators.map((refrigerator) => (
        <div key={refrigerator.id} className="refrigerator-item">
          <h3>{refrigerator.Brand}</h3>
          <img 
            src={refrigerator.images} 
            alt={`${refrigerator.Brand} Refrigerator`} 
            className="refrigerator-image" 
          />
          <p>Capacity: {refrigerator.Capacity}</p>
          <p>Energy Star Rating: {refrigerator.EnergyStar}</p>
          <p>Price: ₹{refrigerator.price}</p>
        </div>
      ))}
      <Link to='/refrigerators'>
        <Button variant="primary">View All</Button>
      </Link>  
    </div>
  );
};

export default RefrigeratorList;
