import React, { useState } from "react";
import { MDBCol } from "mdbreact";
import { CiSearch } from "react-icons/ci";

const SearchPage = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <MDBCol md="6">
      <div className="relative">
        <div className={`flex items-center justify-center sm:justify-start`}>
          {!isSearchBarVisible && (
            <div className="rounded-full bg-blue-400 p-2 flex items-center">
              <CiSearch
                className={`text-blue-900 w-6 h-6 cursor-pointer transition-all duration-500 ease-out`}
                onClick={toggleSearchBar}
              />
              <span className={`ml-2`}>
                Search
              </span>
            </div>
          )}
          <div className={`relative w-full sm:w-auto ${isSearchBarVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 hidden'}`}>
            <input
              className={`form-control w-full sm:w-auto pl-10 `}
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            {isSearchBarVisible && (
              <CiSearch
                className={`absolute left-2 top-2 text-blue-900 w-6 h-6 cursor-pointer `}
                onClick={toggleSearchBar}
              />
            )}
          </div>
        </div>
      </div>
    </MDBCol>
  );
}

export default SearchPage;
