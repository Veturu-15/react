import React from 'react';
import Mobile from '../../Data/Mobile';
import { useParams } from 'react-router-dom';

function Mobiledetails() {
    const { id } = useParams();
    const mobile = Mobile.find((e) => e.id === parseInt(id));
    return (
        <div >single</div>
        
    );
}

export default Mobiledetails;
