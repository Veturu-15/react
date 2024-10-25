import React from 'react';
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header'
function Messages() {
  return (
    <div className='earbuds'>
        <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
            Earbuds
            </Col>
        </Row>
    </div>
  )
}

export default Messages