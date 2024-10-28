import React from 'react';
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
function profile() {
  return (
    <div className='search'>
        <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
            <Col s></Col>
            <div className='profie'>
            <p>Name:</p>
            <input type="text" placeholder='Enter the name: ' />
            <p>Email:</p>
            <input type="text" placeholder='Enter the e-mail id:' />
            <p>Password:</p>
            <input type="password" placeholder='Enter the password:' />
            <br /> <br />
            <button className='btn btn-primary'>Submit</button>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default profile