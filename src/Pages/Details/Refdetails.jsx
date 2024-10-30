import React from 'react';
import { useParams } from 'react-router-dom';
import Refrigerator from '../../Data/Refrigerator'; 
import Sidenavar from '../../Components/Sidenavar';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Header from '../../Components/Header';


function Refdetails() {
    const { id } = useParams(); 
    const re = Refrigerator.find((e) => e.id === parseInt(id)); 
    return (
        <div>
           <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
            <div>
                <img src={re.images} alt="" />
                <p>Brand:{re.Brand}</p>
                <p>Capacity:{re.Capacity}</p>
                <p> ProductDimensions:{re. ProductDimensions}</p>
                <p>Configuration:{re.Configuration}</p>
                <p>EnergyStar:{re.EnergyStar}</p>
                <p>price:{re.price}</p>
                <button className='btn btn-warning'>Add to cart</button>
            </div>
            </Col>
           </Row>
        </div>
        
    );
}

export default Refdetails;
