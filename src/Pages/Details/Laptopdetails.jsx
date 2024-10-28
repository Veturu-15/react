import React from 'react';
import Laptop from '../../Data/Laptop';
import { useParams } from 'react-router-dom';

function Laptopdetails() {
    const {id} = useParams();
    const laptop= Laptop.find((e)=>e.id ===parseInt(id));
  return (
    <div>
      single
    </div>
  )
}

export default Laptopdetails
