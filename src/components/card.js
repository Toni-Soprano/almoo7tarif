import React from 'react';
import { TERipple } from 'tw-elements-react';

export function HorizontalCard({ imageUrl, title, description }) {
  return (
    <div className="block rounded-lg overflow-hidden bg-white shadow-lg dark:bg-neutral-700">
      <TERipple>
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full h-40 " // Adjust the height as needed
            src={imageUrl}
            alt=""
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </TERipple>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
        <TERipple>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-300 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 active:bg-primary-700 dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg">
            Button
          </button>
        </TERipple>
      </div>
    </div>
  );
}

export default HorizontalCard;
