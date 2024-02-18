import React from "react";
import Cardd from "../cmmons/cardd";

function Services() {
  return (
    <>
      <div className="services" id="services">
        <div className="m-6 text-center p-5">
          <p class ="font-weight-bold">Services les plus demandés</p>
        </div>
        <Cardd />
      </div>
    </>
  );
}

export default Services;
