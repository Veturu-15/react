import React from 'react';
import { useParams } from 'react-router-dom';
import Refrigerator from '../../Data/Refrigerator'; // Ensure this path is correct

function Refdetails() {
    const { id } = useParams(); // Get the ID from the URL
    const re = Refrigerator.find((e) => e.id === parseInt(id)); // Correctly find the refrigerator by ID
    return (
        <div>
            single
        </div>
        
    );
}

export default Refdetails;
