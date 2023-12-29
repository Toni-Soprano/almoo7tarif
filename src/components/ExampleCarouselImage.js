import React from 'react';

function ExampleCarouselImage({ imageUrl, altText }) {
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    border: '4px solid #fff',
    borderRadius: '8px',
    transition: 'transform 0.5s ease', // 3D transform for a smooth transition
  };
  
  const containerStyle = {
    width: '100%',
    height: '300px',
    backgroundColor: '#f0f0f0', // Use a neutral background color
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
  };
  
  const captionStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    opacity: 0,
    transition: 'opacity 0.5s ease', // Fade-in animation
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt={altText} style={imageStyle} />
    </div>
  );
}

export default ExampleCarouselImage;
