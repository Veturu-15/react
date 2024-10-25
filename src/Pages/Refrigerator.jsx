import React from 'react';
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header'
function News() {
  return (
    <div className='Refrigerator'>
        <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
            Refrigerator
            </Col>
        </Row>
    </div>
  )
}

export default News