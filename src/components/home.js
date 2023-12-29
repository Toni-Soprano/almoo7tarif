import React from "react";
import SearchPage from "./SearchPage";
import NavbarComponent from "../cmmons/navbar";
import CarouselComponent from "./carousel";

function Home() {
  const carouselItems = [
    {
      imageUrl: "/assets/img/plumber-making-phone-gesture.jpg",
      altText: "Logo 1",
      captionTitle: "Caption Title 1",
      captionText: "Caption Text 1",
    },
    {
      imageUrl: "/assets/img/logo.png",
      altText: "Logo 2",
      captionTitle: "Caption Title 2",
      captionText: "Caption Text 2",
    },
    // Add more items as needed
  ];

  return (
    <div style={{ 
      backgroundImage: 'linear-gradient(to bottom, #007BFF, #00BFFF)', // Blue gradient colors
      padding: '20px',
      minHeight: '100vh',
    }}>
      <div>
        <NavbarComponent />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <SearchPage />
      </div>
      <div className="d-flex justify-content-center">
        <CarouselComponent items={carouselItems} />
      </div>
    </div>
  );
}

export default Home;
