import React from 'react';
import Earbuds from '../Data/Earbuds'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const EarbudsList = () => {
  const displayedEarbuds = Earbuds.slice(0, 3);

  return (
    <div className='SliceEarbuds'>
      {displayedEarbuds.map((earbud) => (
        <div >
          <h3>{earbud.Brand}</h3>
          <img src={earbud.imgaes} alt={earbud.Brand} />
          <p>Color: {earbud.Colour}</p>
          <p>Price: {earbud.price}</p>
        </div>
      ))}
      <Link to='/earbuds'>
        <Button>View All</Button>
      </Link>
    </div>
  );
};

export default EarbudsList;
