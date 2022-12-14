import React, { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import Bug from "./bug";

const formReaducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function UpdateUserFrom() {
  const [formData, setFormData] = useReducer(formReaducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("Don't have rom Data");
    console.log(formData);
  };

  if (Object.keys(formData).length > 0) return <Bug message={"Error"}></Bug>;

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="firsname"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="lastname"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          onChange={setFormData}
          name="salary"
          placeholder="Salary"
        />
      </div>

      <div className="input-type">
        <input
          className="border px-5 py-3 focus:outline-none rounded-md"
          type="date"
          onChange={setFormData}
          name="date"
          placeholder="Date"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            onChange={setFormData}
            name="status"
            value="Active"
            id="radioDefault1"
          />
          <label className="inline-block tet-gray-800" htmlFor="radioDefault1">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            onChange={setFormData}
            name="status"
            value="Inactive"
            id="radioDefault2"
          />
          <label className="inline-block tet-gray-800" htmlFor="radioDefault2">
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Update
        <span className="px-1">
          <BiBrush size={24}></BiBrush>
        </span>
      </button>
    </form>
  );
}
