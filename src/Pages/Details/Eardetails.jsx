import React from 'react';
import { useParams } from 'react-router-dom';
import Earbuds from '../../Data/Earbuds';

function Eardetails() {
    const {id} = useParams();
    const ear=Earbuds.find((e) => e.id===parseInt(e.id))
  return (
    <div>
      single
    </div>
  )
}

export default Eardetails
