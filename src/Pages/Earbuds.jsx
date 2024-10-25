import React from 'react';
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import Newearbuds from '../Pages/Newearbuds';
function Messages() {
  return (
    <div className='earbuds'>
        <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
            <Newearbuds />
            </Col>
        </Row>
    </div>
  )
}

export default Messages