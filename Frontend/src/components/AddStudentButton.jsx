import React from "react";
import Add from "../assets/Add";

const AddStudentButton = ({ setStudentAdd }) => {
  return (
    <>
      <button
        type="button"
        class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm p-2 pr-4  md:pr-10 md:pl-5 md:py-2.5 focus:outline-none inline-flex items-center justify-center cursor-pointer gap-1"
        onClick={() => setStudentAdd(true)}
      >
        <Add className="w-5 h-5 text-blue-500 ml-2" />
        <span className="text-white font-normal hidden md:block">
          Add Student
        </span>
      </button>
    </>
  );
};

export default AddStudentButton;
