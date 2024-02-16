import React, { useEffect, useState } from "react";
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
  const isLoggedIn = !!localStorage.getItem("name");
  const userName = localStorage.getItem("name");
  const userImg = localStorage.getItem("img");

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/home" className="flex items-center">
        <img
          src="assets/img/logo.png"
          className="mr-3 w-24"
          alt="Flowbite React Logo"
        />
        {isLoggedIn ? (
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Welcome, {userName}
          </span>
        ) : (
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Welcome, Guest
          </span>
        )}
      </NavbarBrand>

      <div className="flex md:order-2 items-center">
        {isLoggedIn ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={userImg} rounded />}
            className="ml-3"
          >
            <DropdownHeader>
              <span className="block text-sm"></span>
              <span className="block truncate text-sm font-medium"></span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>
              <Link to="/settings">Settings</Link>
            </DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>
              <Link to="/">Sign out</Link>
            </DropdownItem>
          </Dropdown>
        ) : (
          <Link smooth to="/login" className="text-white ml-3">
            Login
          </Link>
        )}

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
      {isLoggedIn && (
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600 hover:text-white">
          + Add a Job
        </button>
      )}
    </Navbar>
  );
}

export default Component;

/*import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Component() {
  const isLoggedIn = !!localStorage.getItem("name");
  const userName = localStorage.getItem("name");
  const userImg = localStorage.getItem("img");

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container class="d-flex justify-content-center">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Image className="" src={userImg} roundedCircle />
      </Container>
    </Navbar>
  );
}

export default Component;*/
