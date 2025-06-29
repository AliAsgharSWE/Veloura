
import React from 'react';
import Image from 'next/image';
import { navLinks, navLinksAuth } from './data';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 px-20 mt-10 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Shoppe Logo" width={100} height={60} />
      </div>

      {/* Center Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-base font-medium hover:opacity-70 transition-opacity"
            style={{ 
              color: 'var(--text-primary, #000000)',
              fontFamily: 'var(--font-poppins, "Poppins", sans-serif)'
            }}
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-6">
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
    </nav>
  );
};

export default Navbar;