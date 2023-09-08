// DorkForm.js
import React from "react";
import { useForm } from "react-hook-form";

const DorkForm = ({ addDork }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addDork(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="flex space-x-2">
        <select {...register("dorkType")} className="w-1/2 rounded border p-2">
          <option value="intitle">intitle</option>
          <option value="inurl">inurl</option>
          {/* Add more dork types here */}
        </select>
        <input
          {...register("dorkText")}
          type="text"
          placeholder="Enter your Google dork query"
          className="w-1/2 rounded border p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
      >
        Add Dork in URL
      </button>
    </form>
  );
};

export default DorkForm;
