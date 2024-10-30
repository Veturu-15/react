import React from 'react';
import Mobile from '../../Data/Mobile';
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Header from '../../Components/Header';
import Sidenavar from '../../Components/Sidenavar';

function Mobiledetails() {
    const { id } = useParams();
    const mobile = Mobile.find((e) => e.id === Number(id));
    return (
        <div  className='container-fluid'>
            <Row>
                <Col sm={2}>
                <Sidenavar/>
                </Col>
                <Col sm={10}>
                <Header/>
                <div>
                        <img src={mobile.Image}alt="" height={'300px'} />
                        <p>{mobile.title}</p>
                        <p>{mobile.price}</p>
                        <button className='btn btn-warning'>Add to cart</button>
                </div>
            
                </Col>
            </Row>
        </div>
        
    );
}

export default Mobiledetails;
