import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getCurrentUser } from '../auth/authService';

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function Component() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = getCurrentUser();

        if (user) {
          const response = await axios.post('http://localhost:3900/api/GetSingleUser', { userId: user.id });
          setUserData(response.data.user);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
 
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/home" className="flex items-center">
        <img
          src="assets/img/logo.png"
          className="mr-3 w-24"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Welcome, {userData ? userData.nom : ""}
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 items-center">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
          className="ml-3" // Add margin to separate it from NavbarBrand
        >
          <DropdownHeader>
            <span className="block text-sm">
              {userData ? `${userData.nom} ${userData.prenom}` : ""}
            </span>
            <span className="block truncate text-sm font-medium">
              {userData ? userData.email : ""}
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>
            <Link to="/">Sign out</Link>
          </DropdownItem>
        </Dropdown>

        <NavbarToggle />
      </div>
      <NavbarCollapse className="mb-3">
        <NavbarLink href="#" active className="hover:text-blue-700">
          Home
        </NavbarLink>
        <NavbarLink href="#" className="hover:text-blue-700">
          About
        </NavbarLink>
        <NavbarLink href="#" className="hover:text-blue-700">
          Services
        </NavbarLink>
        <NavbarLink href="#" className="hover:text-blue-700">
          Pricing
        </NavbarLink>
        <NavbarLink href="#" className="hover:text-blue-700">
          Contact
        </NavbarLink>
      </NavbarCollapse>

      <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600 hover:text-white">
        + Add a Job
      </button>
    </Navbar>
  );
}

export default Component;
