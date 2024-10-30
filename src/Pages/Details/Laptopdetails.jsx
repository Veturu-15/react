import React from 'react';
import Laptop from '../../Data/Laptop';
import { useParams } from 'react-router-dom';
import Sidenavar from '../../Components/Sidenavar';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Header from '../../Components/Header';

function Laptopdetails() {
    const {id} = useParams();
    const item= Laptop.find((e)=>e.id ===parseInt(id));
  return (
    <div  className='container-fluid'>
      <Row>
        <Col sm={2}>
        <Sidenavar/>
        </Col>
        <Col sm={10}>
        <Header/>
        <div>
          <img src={item.Image} alt="" />
          <p>Brand: {item.Brand}</p>
                              <p>ModelName: {item.ModelName}</p>
                              <p>ScreenSize: {item.ScreenSize}</p>
                              <p>ColourSilver: {item.ColourSilver}</p>
                              <p>HardDiskSize: {item.HardDiskSize}</p>
                              <p>CPUModel: {item.CPUModel}</p>
                              <p>RAMMemoryInstalledSize:  {item.RAMMemoryInstalledSize}</p>
                              <p>price: {item.price}</p>
                              <button className='btn btn-warning'>Add to cart</button>
        </div>
        </Col>
      </Row>
      
    </div>
  )
}

export default Laptopdetails
