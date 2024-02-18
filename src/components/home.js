import React, { useState, useEffect } from "react";
import SearchPage from "../cmmons/SearchPage";
import Component from "../cmmons/navbar";
import FluidExample from "../cmmons/header";
import Services from "./services";
import Footer from "../cmmons/footer";
function Home() {
  return (
     
      <div class="containe">
        <div className=" " id="home">
          <Component />
          </div>
        
          <div  >
            <FluidExample />
          </div>
          <div className="container mx-auto mt-8">
            <Services />
          </div>
          <div>
            <Footer/>
          </div>
        </div>
     
  );
}

export default Home;
