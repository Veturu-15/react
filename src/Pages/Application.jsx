import React from 'react'
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
function Application() {
  return (
    <div className='Application'>
      <Row>
        <Col sm={2}>
        <Sidenavar/>
        </Col>
        <Col sm={10}>
        <Header/>
        hello
        </Col>
      </Row>
    </div>
  )
}

export default Application
