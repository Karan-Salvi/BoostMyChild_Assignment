import React from "react";

const AddStudent = () => {
  return (
    <div>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
              <h3 class="text-lg font-medium text-heading">Add Student</h3>
              <button
                type="button"
                class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center cursor-pointer"
                data-modal-hide="authentication-modal"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form action="#" class="pt-4 md:pt-6">
              <div class="mb-4">
                <label
                  for="name"
                  class="block mb-2.5 text-sm font-medium text-heading"
                >
                  Student Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                  placeholder="Karan Salvi"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="role_no"
                  class="block mb-2.5 text-sm font-medium text-heading"
                >
                  Role Number
                </label>
                <input
                  type="number"
                  id="role_no"
                  class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                  placeholder="20"
                  required
                />
              </div>

              <button
                type="submit"
                class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3 cursor-pointer"
              >
                Add Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
