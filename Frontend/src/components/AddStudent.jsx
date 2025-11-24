import React, { useState } from "react";
import { useCreateUserMutation } from "../store/api/userApi";
import Loader from "./Loader";

const AddStudent = ({ studentAdd, setStudentAdd }) => {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [studentAdded, setStudentAdded] = useState(false);

  const [form, setForm] = useState({
    name: "",
    role_no: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUser(form).unwrap();
      if (res) {
        setStudentAdded(true);
        setForm({
          name: "",
          role_no: "",
        });
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <div className={`${studentAdd ? "" : "hidden"}`}>
      <div
        className={`fixed inset-0 z-50 flex justify-center items-center bg-black/20`}
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
              <h3 class="text-lg font-medium text-heading">Add Student</h3>
              <button
                type="button"
                class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center cursor-pointer"
                onClick={() => setStudentAdd(false)}
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
            <form action="#" class="pt-4 md:pt-6" onSubmit={handleSubmit}>
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
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                  onChange={(e) =>
                    setForm({ ...form, role_no: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3 cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center gap-2">
                    <Loader className={"w-5 h-5"} message={"saving"} />
                    <span className="text-white font-semibold">
                      Saving Student
                    </span>
                  </div>
                ) : (
                  <span className="text-white font-semibold">Save Student</span>
                )}
              </button>
              {studentAdded && (
                <p className="w-full text-center text-green-700 text-sm">
                  Student Added to the class..
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
