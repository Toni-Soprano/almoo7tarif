import React, { useState , useEffect } from "react";
import SearchPage from "../cmmons/SearchPage";
import Component from "../cmmons/navbar";
import Example from "../cmmons/header";
import Services from "./services";
import Pricing from "./pricing";
import axios from "axios";
function Home() {
  const [showBigCard, setShowBigCard] = useState(false);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    axios
      .post("http://localhost:3900/api/GetAllServices")
      .then((res) => {
        setServices(res.data.results);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <>
      <div
        className="p-4 min-h-screen bg-gray-100  sticky   top-0 z-50"
        id="home"
      >
        <Component onNavbarLinkClick={handleNavbarLinkClick} />

        <div className="flex justify-center mt-4">
          <SearchPage />
        </div>

        <div className=" space-x-4 m-4">
          <Example />
        </div>

        <div className="container mx-auto mt-8">
          <Services />
        </div>
        <div className=" ">
          <Pricing />
        </div>
      </div>
    </>
  );
}

export default Home;
