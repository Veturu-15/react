import React from 'react';
import Sidenavar from '../Components/Sidenavar';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
function profile() {
  return (
    <div className='container-fluid' style={{marginBottom:'50px'}}>
    <div className='search'>
        <Row>
            <Col sm={2}>
            <Sidenavar/>
            </Col>
            <Col sm={10}>
            <Header/>
            <center>
            <h1 > User Profile</h1>
            <div style={{padding:'5%'}}>
              <img src="https://pbs.twimg.com/profile_images/1823053362415222785/zknyA5_q_400x400.jpg" alt=""  style={{height:'300px', width:'300px'}}/>
            </div></center>
            <div className='profie' >
            <p> First Name:</p>
            <input type="text" placeholder='Enter the first name: ' />
            <p>Middle Name:</p>
            <input type="text" placeholder='Enter the middle name: ' />
            <p> Last Name:</p>
            <input type="text" placeholder='Enter the last name: ' />
            <p>Email:</p>
            <input type="text" placeholder='Enter the e-mail id:' />
            <p> Confrim Password:</p>
            <input type="password" placeholder='Enter the Confirm password:' />
            <br /> <br />
            <button className='btn btn-primary'>Submit</button>
            </div>
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default profile