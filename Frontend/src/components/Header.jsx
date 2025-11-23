import React from "react";
import DateButton from "./DateButton";

import AddStudentButton from "./AddStudentButton";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-4 md:py-3 py-2 gap-2 text-start">
      <div className="flex justify-between items-center gap-1">
        <svg
          className="w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 48 48"
        >
          <path
            fill="#CFD8DC"
            d="M5 38V14h38v24c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4z"
          />
          <path
            fill="#F44336"
            d="M43 10v6H5v-6c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4z"
          />
          <g fill="#B71C1C">
            <circle cx="33" cy="10" r="3" />
            <circle cx="15" cy="10" r="3" />
          </g>
          <path
            fill="#B0BEC5"
            d="M33 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2zM15 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"
          />
          <path
            fill="#90A4AE"
            d="M13 20h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-18 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-18 6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4z"
          />
        </svg>
        <h1 className="text-xl font-medium text-gray-800 science-gothic">
          Attend.io
        </h1>
      </div>
      <div className="flex justify-between items-center gap-4">
        <DateButton />
        <AddStudentButton />
      </div>
    </div>
  );
};

export default Header;
