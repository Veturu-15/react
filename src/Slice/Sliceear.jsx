import React from 'react';
import Earbuds from '../Data/Earbuds'; 
import { Link } from 'react-router-dom';

const EarbudsList = () => {
  const displayedEarbuds = Earbuds.slice(0, 3);

  return (
    <div className='SliceEarbuds' style={{ justifyContent: 'space-around' }}>
      {displayedEarbuds.map((earbud) => (
        <Link 
          key={earbud.id} 
          to={`/earbuds/${earbud.id}`} 
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <div>
            <h3>{earbud.Brand}</h3>
            <img src={earbud.imgaes} alt={earbud.Brand} style={{ height: '200px', width: '200px' }} />
            <p>Color: {earbud.Colour}</p>
          </div>
        </Link>
      ))}
      <div style={{ justifyContent: 'end', marginTop: '260px' }}>
        <Link to='/earbuds'>
          View All
        </Link>
      </div>
    </div>
  );
};

export default EarbudsList;
