import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
  return (
    <Navbar fluid rounded > 
      <NavbarBrand href="/home" className="flex items-center">
        <img
          src="assets/img/logo.png"
          className="mr-3 w-24"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Welcome,
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
            <span className="block text-sm"></span>
            <span className="block truncate text-sm font-medium"></span>
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
        <Link smooth to="#home" className="hover:text-blue-700">
          Home
        </Link>
        <Link smooth to="#services" className="hover:text-blue-700">
          Services
        </Link>
        <Link href="#pricing" className="hover:text-blue-700">
          Pricing
        </Link>
        <Link href="#Contact" className="hover:text-blue-700">
          Contact
        </Link>
      </NavbarCollapse>

      <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600 hover:text-white">
        + Add a Job
      </button>
    </Navbar>
  );
}

export default Component;
