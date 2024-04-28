import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ backgroundColor: '#3B3C3D' }} className="flex justify-between items-center py-4 lg:py-2">
      <div className="flex items-center">
        <div>
          <img src="https://duslyfgmfacnizupkxve.supabase.co/storage/v1/object/public/photos/letterheadLOGO.png?t=2024-04-21T19%3A03%3A36.288Z" alt="Logo" className="h-32 w-auto ml-4" />
        </div>
        <h1 className="font-bold text-red-500 text-2xl mt-8 lg:mt-0 lg:ml-4">858-522-9562</h1>
      </div>

      <div className="mr-4 lg:hidden">
        <FontAwesomeIcon icon={faBars} className="text-gray-500 hover:text-gray-700 h-6 w-6 cursor-pointer" onClick={toggleMenu} />
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-12 right-4 bg-white shadow-lg rounded-md">
          <ul className="py-2 flex flex-col lg:flex-row">
            <li>
              <Link href="/" passHref={true} legacyBehavior={true}>
                <a className="text-gray-800 hover:text-gray-700">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/booking" passHref={true} legacyBehavior={true}>
                <a className="text-gray-800 hover:text-gray-700">Roof Inspections</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutus" passHref={true} legacyBehavior={true}>
                <a className="text-gray-800 hover:text-gray-700">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/FAQ" passHref={true} legacyBehavior={true}>
                <a className="text-gray-800 hover:text-gray-700">FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="hidden lg:flex lg:text-white lg:mr-4">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" passHref={true} legacyBehavior={true}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/booking" passHref={true} legacyBehavior={true}>
              <a>Roof Inspections</a>
            </Link>
          </li>
          <li>
            <Link href="/aboutus" passHref={true} legacyBehavior={true}>
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/FAQ" passHref={true} legacyBehavior={true}>
              <a>FAQ</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
