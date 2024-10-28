import React from 'react'
import Tv from '../../Data/Tv';
import { useParams } from 'react-router-dom';
function Tvdetails() {
    const {id} = useParams();
    const tv = Tv.find((e) => e.id === parseInt(e.id));

  return (
    <div>
      single
    </div>
  )
}

export default Tvdetails
