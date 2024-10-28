import React from 'react';
import Earbuds from '../Data/Earbuds'; 
import { Link } from 'react-router-dom';


const EarbudsList = () => {
  const displayedEarbuds = Earbuds.slice(0, 3);

  return (
    <Link to='/earbuds/:id' style={{ textDecoration: 'none', color: 'black' }}>
    <div className='SliceEarbuds' style={{justifyContent:'space-around'}}>
      {displayedEarbuds.map((earbud) => (
        <div >
          <h3>{earbud.Brand}</h3>
          <img src={earbud.imgaes} alt={earbud.Brand} style={{height:'200px', width:'200px'}} />
          <p>Color: {earbud.Colour}</p>
        </div>
      ))}
      <div style={{justifyContent:'end', marginTop:'160px'}}>
      <Link to='/earbuds'>
        View All
      </Link>
      </div>
    </div>
    </Link>
  );
};

export default EarbudsList;
