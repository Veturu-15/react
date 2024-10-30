import React from 'react'
import Tv from '../../Data/Tv';
import { useParams } from 'react-router-dom';
import { Row , Col } from 'react-bootstrap';
import Header from '../../Components/Header';
import Sidenavar from '../../Components/Sidenavar';
function Tvdetails() {
    const {id} = useParams();
    const tv = Tv.find((e) => e.id === parseInt(id));
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Sidenavar/>
        </Col>
        <Col sm={10}>
        <Header/>
        <div>
          <img src={tv.images} alt="" />
          <p>ScreenSize: {tv.ScreenSize}</p>
          <p>Brand:{tv.Brand}</p>
          <p>DisplayTechnology: {tv.DisplayTechnology}</p>
          <p>Resolution:{tv.Resolution}</p>
          <p>RefreshRate:{tv.RefreshRate}</p>
          <p>AspectRatio:{tv.AspectRatio}</p>
          <p>ProductDimensions:{tv.ProductDimensions}</p>
          <p>price: {tv.price}</p>
          <button className='btn btn-warning'>Add to cart</button>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default Tvdetails
