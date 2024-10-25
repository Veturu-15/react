import React from 'react';
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import Newtv from '../Pages/Newtv';
function Statics() {
  return (
    <div className='tv'>
        <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
          <Newtv/>
            </Col>
        </Row>
    </div>
  )
}

export default Statics