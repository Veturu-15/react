import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SideNavBar() {
  return (
    <div className="sidenavabar" style={{ backgroundColor: 'black', color: 'white', display: 'flex', textAlign:'center' }}>
      <Row >
        <Col sm={2}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contacts</li>
          </ul>
        </Col>
        <Col sm={10}>
        </Col>
      </Row>
    </div>
  );
}

export default SideNavBar;
