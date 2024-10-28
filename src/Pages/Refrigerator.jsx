import React from 'react';
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import Newref from '../Pages/Newref';
function News() {
  return (
    <div className='container-fluid'>
    <div className='Refrigerator'>
        <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
           <Newref/>
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default News