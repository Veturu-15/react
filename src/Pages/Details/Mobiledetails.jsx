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
        <div >
            <Row>
                <Col sm={2}>
                <Sidenavar/>
                </Col>
                <Col sm={10}>
                <Header/>
                    
                </Col>
            </Row>
        </div>
        
    );
}

export default Mobiledetails;
