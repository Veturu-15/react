import React from 'react';
import { useParams } from 'react-router-dom';
import Refrigerator from './Data/Refrigerator'

function Refdetails() {
    const {id} =  useParams();
    const re=Refrigerator.find((e)=> e.id===parseInt(e.id))
  return (
    <div>
      single
    </div>
  )
}

export default Refdetails
