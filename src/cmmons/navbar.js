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
import { Link } from "react-router-dom";
import { useUser } from '../auth/UserContext'; // Import useUser

function Component() {
  const { user } = useUser(); // Access user from UserContext
  console.log("User data:", user);
  return (
   

    <Navbar fluid rounded>
      
      <NavbarBrand href="/home">
        <img
          src="assets/img/logo.png"
          className="mr-3 w-24"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Welcome, {user ? user.nom : ""}  {/* Display user's name */}
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
        >
          <DropdownHeader>
            <span className="block text-sm">{user ? `${user.nom} ${user.prenom}` : ''}</span>
            <span className="block truncate text-sm font-medium">
              {user ? user.email : ''}
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
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
      <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none">
        + Add a Job
      </button>
    </Navbar>
  );
}

export default Component;
