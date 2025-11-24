import React from "react";
import DateButton from "./DateButton";

import AddStudentButton from "./AddStudentButton";

const Header = ({ setStudentAdd }) => {
  return (
    <div className="flex justify-between items-center w-full px-4 md:py-3 py-2 gap-2 text-start">
      <img
        src="/images/brand_name.png"
        className="h-10 w-auto"
        alt="brand logo"
      />
      <div className="flex justify-between items-center gap-4">
        <DateButton />
        <AddStudentButton setStudentAdd={setStudentAdd} />
      </div>
    </div>
  );
};

export default Header;
