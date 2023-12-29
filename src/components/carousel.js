import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      imageUrl: "/assets/img/elect1.jpg",
      altText: "Logo 1",
      captionTitle: "Caption Title 1",
      captionText: "Caption Text 1",
    },
    {
      id: 3,
      imageUrl: "/assets/img/logo.png",
      altText: "Logo 1",
      captionTitle: "Caption Title 1",
      captionText: "Caption Text 1",
    },
    {
      id: 2,
      imageUrl: "/assets/img/elect2.jpg",
      altText: "Logo 2",
      captionTitle: "Caption Title 2",
      captionText: "Caption Text 2",
    },
    // Add more items as needed
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      fade
      interval={null} // Set interval to null to disable auto change
        // Pause on hover
    >
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <ExampleCarouselImage imageUrl={item.imageUrl} altText={item.altText} />
          <Carousel.Caption>
            <h3>{item.captionTitle}</h3>
            <p>{item.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
