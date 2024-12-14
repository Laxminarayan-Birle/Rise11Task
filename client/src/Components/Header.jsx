import React from "react";
import { LuUserRound } from "react-icons/lu";
import { BiBell } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white h-12">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <img
          src="https://res.cloudinary.com/dsaaqhang/image/upload/v1734023522/jur_logo_xdvv7x.jpg"
          alt="Logo"
          className="h-10 sm:h-14" // Responsive logo size
        />
        <h2 className="text-xl sm:text-2xl font-mono font-semibold text-gray-800">
          Jur
        </h2>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5 ml-auto">
        <BiBell className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />{" "}
        {/* Adjust icon size for smaller screens */}
        <LuUserRound className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />{" "}
        {/* Adjust icon size for smaller screens */}
      </div>
    </div>
  );
};

export default Header;
