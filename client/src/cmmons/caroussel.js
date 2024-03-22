import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  height: '100vh', // Set the height to cover the entire viewport height
};

const Caroussel = () => (
  <Carousel style={{ height: '100vh' }}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Caroussel;
