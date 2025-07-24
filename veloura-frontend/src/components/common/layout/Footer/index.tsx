'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { footerData } from './data';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="w-full border-t border-gray-300 px-4 sm:px-6 lg:px-10">
      <div className="py-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          {/* Left - Links */}
          <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-16">
            {footerData.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm sm:text-base font-medium tracking-wide hover:opacity-70 transition-opacity text-ternary"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Right - Newsletter */}
          <div className="w-full sm:max-w-md lg:min-w-[400px]">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footerData.newsletter.placeholder}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-500 focus:border-gray-700 focus:outline-none text-sm placeholder-ternary"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
              >
                <span className="text-ternary text-lg">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-xs sm:text-sm text-center sm:text-left">
            <span className="text-primary">
              © {footerData.year} {footerData.companyName}.{' '}
            </span>
            <a
              href={footerData.legalLinks.termsOfUse}
              className="hover:opacity-70 transition-opacity text-ternary"
            >
              Terms of use
            </a>
            <span className="text-primary"> and </span>
            <Link
              href={footerData.legalLinks.privacyPolicy}
              className="hover:opacity-70 transition-opacity text-ternary"
            >
              privacy policy
            </Link>
            <span className="text-primary">.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            {footerData.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="hover:opacity-70 transition-opacity"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
