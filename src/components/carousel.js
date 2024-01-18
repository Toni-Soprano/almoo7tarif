import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ResponsiveCarousel = ({ showArrows, autoPlay, interval, transitionTime, showThumbs, dynamicHeight, showStatus, items }) => {
  const carouselItemStyle = {
    height: '300px', // Set your desired fixed height for the carousel items
  };

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
      <Carousel
        showArrows={showArrows}
        showThumbs={showThumbs}
        infiniteLoop={true}
        autoPlay={autoPlay}
        interval={interval}
        transitionTime={transitionTime}
        dynamicHeight={dynamicHeight}
        showStatus={showStatus}
      >
        {items.map((item, index) => (
          <div key={index} className="relative" style={carouselItemStyle}>
            <div className="overlay-frame">
              <img src={item.imageUrl} alt={`Image ${index + 1}`} className="object-cover w-full h-full rounded-md opacity-70 filter filter: blur(1px)" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-overlay-frame p-4 bg-opacity-70 rounded-md">
                <p className="text-white font-bold text-lg md:text-xl">{item.captionText}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

ResponsiveCarousel.defaultProps = {
  showArrows: true,
  showThumbs: false,
  autoPlay: true,
  interval: 5000,
  transitionTime: 500,
  dynamicHeight: true,
  showStatus: false,
};

export default ResponsiveCarousel;
