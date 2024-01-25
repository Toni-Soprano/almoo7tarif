import React from 'react';
import { TERipple } from 'tw-elements-react';

export function HorizontalCard({ imageUrl, title, description, isBigCard }) {
  return (
    <div className={`block rounded-lg overflow-hidden bg-blue-500 shadow-lg dark:bg-neutral-700 text-white ${isBigCard ? 'text-center h-screen' : ''}`}>
      <TERipple>
        <div className="relative overflow-hidden">
          <div className="bg-white">
            <img
              className={`object-cover w-full ${isBigCard ? 'mx-auto' : ''} ${isBigCard ? 'h-full' : 'h-40'}`}
              src={imageUrl}
              alt=""
              style={{ objectFit: 'cover', backgroundColor: 'white', height: '10%', margin: '40px' }}
            />
          </div>
        </div>
      </TERipple>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold leading-tight">
          {title}
        </h5>
        <p className="mb-4 text-base">
          {description}
        </p>
        <TERipple>
          <button
            type="button"
            className="inline-block rounded bg-white text-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-md transition duration-300 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 active:bg-gray-200 dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg">
            Button
          </button>
        </TERipple>
      </div>
    </div>
  );
}

export default HorizontalCard;
