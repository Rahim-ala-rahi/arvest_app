import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center" style={{justifyContent:"space-around"}}>
        <div className="flex space-x-4">
          <span className="font-semibold">GET SOCIAL</span>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">PRIVACY & SECURITY  |</a>
          <a href="#" className="hover:text-gray-400">AVAILABLE PROPERTIES |</a>
          <a href="#" className="hover:text-gray-400">EDUCATION CENTER |</a>
          <a href="#" className="hover:text-gray-400">DOCUMENTS & RESOURCES |</a>
          <a href="#" className="hover:text-gray-400">SITE MAP</a>
        </div>
      </div>
      <div className="bg-blue-900 text-white text-xs py-4 mt-4">
        <div className="container mx-auto">
          <div className="text-center">
            <p>Investments and Insurance Products: Not a Deposit | Not Guaranteed by the Bank or its Affiliates | Not FDIC Insured | Not Insured by Any Federal Government Agency | May Go Down in Value</p>
            <p className="mt-2">Investment products and services provided by Arvest Investments, Inc., doing business as Arvest Wealth Management, member FINRA/SIPC, an SEC registered investment adviser and a subsidiary of Arvest Bank. Securities offered and cleared through Pershing LLC, a BNY Mellon company, member NYSE/SIPC. Insurance products made available through Arvest Insurance, Inc., which is registered as an insurance agency. Insurance products are marketed through Arvest Insurance, Inc., but are underwritten by unaffiliated insurance companies.</p>
            <p className="mt-2">The Investment Management Group (IMG) is comprised of Arvest Wealth Management registered investment adviser representatives who provide portfolio management services with respect to certain of Arvest Wealth Management's investment advisory wrap fee programs. Trust services provided by Arvest Bank.</p>
          </div>
          <div className="text-center mt-4">
            <p>© 2022 Arvest Bank. All Rights Reserved.</p>
          </div>
          <div className="text-center mt-4">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
