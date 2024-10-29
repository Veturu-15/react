import React from 'react';
import { ref } from '../Data/Refrigerator'; 
import { Link } from 'react-router-dom';


const RefrigeratorList = () => {
  const displayedRefrigerators = ref.slice(0, 3);

  return (
    <Link to='/ref/:id' style={{ textDecoration: 'none', color: 'black' }}>
    <div className='SliceRefrigerators'style={{justifyContent:'space-around'}}>
      {displayedRefrigerators.map((refrigerator) => (
        <div  className="refrigerator-item">
          <h3>{refrigerator.Brand}</h3>
          <img 
            src={refrigerator.images} 
            alt={`${refrigerator.Brand} Refrigerator ` } 
            className="refrigerator-image" 
          />
          <p>Capacity: {refrigerator.Capacity}</p>
          <p>Energy Star Rating: {refrigerator.EnergyStar}</p>
        </div>
      ))}
      <div style={{justifyContent:'end', marginTop:'560px'}}>
      <Link to='/refrigerators'>
        View All
      </Link> 
      </div> 
    </div>
    </Link>
  );
};

export default RefrigeratorList;
