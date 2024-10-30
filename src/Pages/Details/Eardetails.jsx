// src/Pages/Details/Eardetails.jsx
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidenavar from '../../Components/Sidenavar';
import Header from '../../Components/Header';
import { useParams } from 'react-router-dom';
import Earbuds from '../../Data/Earbuds';

function Eardetails() {
  const { id } = useParams();
  const item = Earbuds.find((item) => item.id === parseInt(id));
  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2}>
          <Sidenavar />
        </Col>
        <Col sm={10}>
        <Header/>
          <div>
            <img src={item.imgaes} alt='' />
            <p>Brand: {item.Brand}</p>
            <p>Colour: {item.Colour}</p>
            <p>EarPlacement: {item.EarPlacement}</p>
            <p>FormFactor: {item.FormFactor}</p>
            <p>Headphones :{item.Headphones }</p>
            <p>price: {item.price}</p>
            <button className='btn btn-warning'>Add to cart</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Eardetails;
