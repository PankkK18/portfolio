import React, { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-black-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">Portfolio</div>
        <ul className="flex space-x-8">
          <li>
            <a href="#projects" className="text-white hover:text-gray-400 transition duration-5s ease-in">Projects</a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-gray-400">Skills</a>
          </li>
         
          <li>
            <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
