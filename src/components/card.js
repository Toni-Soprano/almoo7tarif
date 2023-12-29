/*import Figure from 'react-bootstrap/Figure';
import React from 'react';

function FigureExample() {
  return (
    <Figure className="text-center bg-primary p-3">
      <Figure.Image
        className="bg-white p-2 rounded-lg"
        width={150} // Adjust the width to make the logo smaller
        height={150} // Adjust the height accordingly
        alt="171x180"
        src="/assets/img/logo.png"
        style={{ margin: 'auto' }}
      />
      <Figure.Caption className="text-white">
        Nulla vitae elit libero, a pharetra augue mollis interdum.
        If you want to make the logo smaller while keeping the overall size of the Figure the same, you can adjust the size of the Figure.Image without changing the size of the Figure. Here's an example:
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;*/
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react';

function ShapeExample() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} md={6} className="text-center">
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Welcome to al :
        </h1>
        
        <h2></h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={6} className="d-flex align-items-center justify-content-center">
          <Image src="/assets/img/logo.png" rounded className='h-auto' style={{ width: '50%' }} />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;


