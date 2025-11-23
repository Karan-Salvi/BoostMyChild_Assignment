import React from "react";
import Add from "../assets/Add";

const AddStudentButton = () => {
  return (
    <>
      <button
        data-tooltip-target="tooltip-bottom"
        data-tooltip-placement="bottom"
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        type="button"
        class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm p-2 pr-4  md:pr-10 md:pl-5 md:py-2.5 focus:outline-none inline-flex items-center justify-center cursor-pointer gap-1"
      >
        <Add className="w-5 h-5 text-blue-500 ml-2" />
        <span className="text-white font-normal hidden md:block">
          Add Student
        </span>
      </button>

      <div
        id="tooltip-bottom"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-heading bg-neutral-primary-medium border border-default rounded-lg shadow-xs opacity-0 tooltip md:hidden"
      >
        Add student
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default AddStudentButton;
