import React from 'react';
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import Newmobile from '../Pages/Newmobile';
function Searchjob() {
  return (
    <div className='container-fluid'>
        <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
            <Newmobile/>
            </Col>
        </Row>
    </div>
  )
}

export default Searchjob