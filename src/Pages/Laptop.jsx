import React from 'react'
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
function Application() {
  return (
    <div className='laptop'>
      <Row>
        <Col sm={2}>
        <Sidenavar/>
        </Col>
        <Col sm={10}>
        <Header/>
       Laptop
        </Col>
      </Row>
    </div>
  )
}

export default Application
