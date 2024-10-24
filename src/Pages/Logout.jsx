import React from 'react';
import Sidenavar from '../Components/Sidenavar';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Header from '../Components/Header'
function Logout() {
  return (
    <div className='logout'>
        <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
          <h1>Logout</h1>
            </Col>
        </Row>
    </div>
  )
}

export default Logout