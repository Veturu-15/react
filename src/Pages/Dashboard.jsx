import React from 'react';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidenavar from '../Components/Sidenavar';
import Header from '../Components/Header';
import Good from '../Components/Good';
function Dashboard() {
  return (
    <div className='Dashboard'>
      <Row>
      <Col sm={2}>
    <Sidenavar/>
      </Col>
      <Col sm={10}>
      <Header/>
      <Good/>
      </Col>
      </Row>
      </div>
  )
}

export default Dashboard