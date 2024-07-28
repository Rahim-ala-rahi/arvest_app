import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white" style={{ width: "100%" }}  >
      <div className="hidden md:flex space-x-4" style={{ marginLeft: "50rem", fontSize: "1.2rem", backgroundColor: "#003366", padding: "6px" }}>
        <a href="#" className="hover:text-gray-300">Rates |</a>
        <a href="#" className="hover:text-gray-300">About |</a>
        <a href="#" className="hover:text-gray-300">Contact |</a>
        <a href="#" className="hover:text-gray-300">Careers |</a>
        <a href="#" className="hover:text-gray-300" style={{}}>ASK ARVEST</a>
        <button style={{ marginLeft: "13rem", backgroundColor: "#FF0000", padding: "4px 4px", borderRadius: "2px" }}>ASK</button>
      </div>

      <div className="flex  items-center p-4" style={{ justifyContent: "space-around" }}>
        <div style={{ fontSize: "5rem", marginLeft: "5rem" }}>
          <h1>Arvest</h1>
        </div>

        <div className=" p-4">
          <div>
            <label htmlFor="location" className="font-bold text-lg mr-2">
              ATM & BRANCH LOCATIONS
            </label>
          </div>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City, State or Zip"
            className="px-4 py-2 border border-r-0 rounded-l"
          />
          <button className="px-4 py-2.5  text-white rounded-r " style={{ background: "#003366" }}>
            Go
          </button>
        </div>
      </div>
      <div style={{ borderTop: "2px solid red", backgroundColor: "#003366" }}>
        <div className="flex items-center p-4" style={{ justifyContent: "space-around", fontSize: "20px" }}>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Personal</a>
            <a href="#" className="text-white hover:text-gray-300">Business</a>
            <a href="#" className="text-white hover:text-gray-300">Credit Cards</a>
            <a href="#" className="text-white hover:text-gray-300">Home Loans</a>
            <a href="#" className="text-white hover:text-gray-300">Investments & Trusts</a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-white flex items-center hover:text-gray-300">
              <span className="pr-1"><FontAwesomeIcon icon={faLock} /></span>
              LOG IN TO
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
