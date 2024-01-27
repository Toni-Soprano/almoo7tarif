import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  const cardData = [
    {
      imageSrc: "assets/img/téléchargement.jpg",
      title: "التكييف ",
      text: "Some quick example text for card 1.",
    },
    {
      imageSrc: "assets/img/elect.jpg",
      title: "الكهرباء",
      text: "Some quick example text for card 2.",
    },
    {
      imageSrc: "assets/img/plumber-making-phone-gesture.jpg",
      title: "السباكة",
      text: "Some quick example text for card 3.",
    },
    {
      imageSrc: "assets/img/babysitting-job.png",
      title: "عناية أطفال",
      text: "Some quick example text for card 4.",
    },
    {
      imageSrc: "assets/img/téléchargement (1).jpg",
      title: "إعانة منزلية",
      text: "Some quick example text for card 5.",
    },
    // Add more card data as needed
  ];

  return (
    <div className="grid grid-cols-3 gap-8 ml-20 p-20">
      {cardData.map((card, index) => (
        <MDBCard key={index} className="w-64 h-100">
          <MDBCardImage
            src={card.imageSrc}
            position="top"
            alt="Card image"
            className="w-64 h-64"
          />
          <MDBCardBody>
            <MDBCardTitle className="p-1 text-center border border-zinc-600 rounded cursor-pointer bg-blue-200">
              {card.title}
            </MDBCardTitle>
            <MDBCardText className="p-2">{card.text}</MDBCardText>
            <div className="d-flex justify-content-center">
              <MDBBtn href="#">اطلب الان!</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
}
