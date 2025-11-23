import React from "react";
import Calendar from "../assets/Calender";
const DateButton = () => {
  const today = new Date();

  const formatted = today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <button
      type="button"
      class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none inline-flex items-center cursor-pointer"
    >
      <span className="text-gray-800">{formatted}</span>
      <Calendar className="w-5 h-5 text-blue-500 ml-2" />
    </button>
  );
};

export default DateButton;
