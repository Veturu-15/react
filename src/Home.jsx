import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src="https://img.freepik.com/free-photo/top-view-transparent-leaves-with-orange-light_23-2149299400.jpg?uid=R168459889&ga=GA1.1.1869992963.1726218038&semt=ais_hybrid" alt="" style={{height:'400px', width:'100%'}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?uid=R168459889&ga=GA1.1.1869992963.1726218038&semt=ais_hybrid" alt=""style={{height:'400px', width:'100%'}} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-photo/abstract-vivid-colored-autumn-leaf_23-2148239743.jpg?uid=R168459889&ga=GA1.1.1869992963.1726218038&semt=ais_hybrid" alt="" style={{height:'400px', width:'100%'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

}
export default UncontrolledExample;
