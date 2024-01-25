import React, { useState } from "react";
import SearchPage from "../cmmons/SearchPage";
import Component from "../cmmons/navbar";
import HorizontalCard from "../cmmons/card";
import Example from  "../cmmons/header"

function Home() {
  const [showBigCard, setShowBigCard] = useState(false);

  const cardData = [
    {
      imageUrl: "/assets/img/logo.png",
      title: "Big Solo Card",
      description: "Some quick example text for the big solo card.",
    },

    // Add other small cards as needed
  ];

  const handleNavbarLinkClick = (link) => {
    if (link === "about") {
      setShowBigCard(true);
    }
    // Handle other navbar links as needed
  };

  return (
    <>
    
    <div className="p-2 min-h-screen">
      <div>
        <Component onNavbarLinkClick={handleNavbarLinkClick} />
      </div>
      <div className="flex justify-center mt-2">
        <SearchPage />
      </div>
      <div className="    space-x-4 m-4">
       
           <Example/> 
       
      </div>
      
      
    
    </div></>
  );
}

export default Home;
