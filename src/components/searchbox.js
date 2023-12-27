import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mt-8">
      <button
        onClick={toggleSearchBox}
        className="p-2 text-gray-600 hover:text-blue-500 focus:outline-none"
      >
        <HiSearch size={20} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-48 bg-white border rounded shadow-md mt-2">
          {/* Add your search results or additional content here */}
          Search Results
        </div>
      )}
    </div>
  );
};

export default SearchBox;
