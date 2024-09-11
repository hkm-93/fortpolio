import React, { useState } from 'react';
import { HeaderProps } from '../types';
import logo from '../assets/react.svg';

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className={`py-4 sm:py-5`}>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a href="#" title="" className="flex">
              <img className="w-auto h-8" src={logo} alt="Logo" />
            </a>
          </div>
          {<>
            <div className="flex md:hidden">
              <button type="button" className={darkMode ? "text-gray-100" : "text-gray-900"}
                      onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                {!expanded ? (
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                ) : (
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                )}
              </button>
            </div>
            <div className="hidden md:space-x-10 md:items-center md:justify-center md:flex">
              <a href="#" title=""
                 className={`text-xs font-bold tracking-widest uppercase transition-all duration-200 ${darkMode ? 'text-gray-100 hover:text-indigo-300' : 'text-gray-900 hover:text-indigo-600'}`}>Services</a>
              <a href="#" title=""
                 className={`text-xs font-bold tracking-widest uppercase transition-all duration-200 ${darkMode ? 'text-gray-100 hover:text-indigo-300' : 'text-gray-900 hover:text-indigo-600'}`}>Collections</a>
              <a href="#" title=""
                 className={`text-xs font-bold tracking-widest uppercase transition-all duration-200 ${darkMode ? 'text-gray-100 hover:text-indigo-300' : 'text-gray-900 hover:text-indigo-600'}`}>Blog</a>
            </div>
            <div className="hidden md:flex">
              <button onClick={() => setDarkMode(!darkMode)}
                      className={`inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold transition-all duration-200 rounded-lg sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'bg-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-100' : 'bg-gray-900 text-gray-100 hover:bg-gray-600 focus:ring-gray-900'}`}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </>}
        </nav>
        {expanded && (
          <nav>
            <div className="px-1 pt-8 pb-4">
              <div className="grid gap-y-6">
                {<><a href="#" title=""
                      className={`flex items-center text-base font-medium transition-all duration-200 focus:outline-none focus:ring-0 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Services</a><a
                    href="#" title=""
                    className={`flex items-center text-base font-medium transition-all duration-200 focus:outline-none focus:ring-0 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Collections</a><a
                    href="#" title=""
                    className={`flex items-center text-base font-medium transition-all duration-200 focus:outline-none focus:ring-0 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Blog</a></>}
                <button onClick={() => setDarkMode(!darkMode)}
                        className={`inline-flex items-center justify-center px-6 py-2 text-base font-semibold leading-7 transition-all duration-200 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'bg-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-100' : 'bg-gray-900 text-gray-100 hover:bg-gray-600 focus:ring-gray-900'}`}>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;