'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { navLinks, navLinksAuth } from './data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4 px-10 mt-10 flex items-center justify-between relative  border-b border-gray-300 z-10 ">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Shoppe Logo" width={100} height={60} />
      </div>
      <div className="md:hidden z-10">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`${isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:space-x-8 absolute md:static top-12 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-subheading font-normal hover:text-secondary"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-8 mt-4 md:mt-0 md:ml-8">
          {navLinksAuth.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
              title={link.title}
            >
              {link.icon ? (
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              ) : (
                <span className="text-sm">{link.title}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;