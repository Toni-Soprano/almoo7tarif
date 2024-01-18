import React from "react";
import SearchPage from "./SearchPage";
import Component from "../cmmons/navbar";
import HorizontalCard from './card';
import { UserProvider } from '../auth/UserContext';

function Home() {
  const cardData = [
    {
      imageUrl: '/assets/img/elect1.jpg',
      title: 'Card 1',
      description: 'Some quick example text for Card 1.',
    },
    {
      imageUrl: '/assets/img/elect2.jpg',
      title: 'Card 2',
      description: 'Some quick example text for Card 2.',
    },
    {
      imageUrl: 'https://tecdn.b-cdn.net/img/new/standard/nature/188.jpg',
      title: 'Card 3',
      description: 'Some quick example text for Card 3.',
    },
  ];

  return (
    <div className="p-4 min-h-screen">
      <div>
      <UserProvider>
        <Component />
        </UserProvider>
      </div>
      <div className="flex justify-center mt-2">
        <SearchPage />
      </div>
      <div className="flex flex-wrap justify-center space-x-4 m-10">
        {cardData.map((card, index) => (
          <HorizontalCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
