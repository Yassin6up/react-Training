import React from "react";

function NavBar() {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a className="text-xl font-bold" href="#">
          Navbar
        </a>
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600"
          onClick={() => {
            // Add logic for toggling the mobile menu
          }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 0h20v20H0z" fill="none" />
            <path
              className="fill-current"
              d="M0 4h20v2H0V4zM0 9h20v2H0V9zM0 14h20v2H0v-2z"
            />
          </svg>
        </button>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4"
            >
              Home
            </a>
            <a
              href="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4"
            >
              Contact
            </a>
            <a
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4"
            >
              About
            </a>
           
            <a
              href="/voyage"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900"
            >
              Voyage
            </a>
          </div>
          <form className="mr-2 lg:mr-0">
            <input
              className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
          </form>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
