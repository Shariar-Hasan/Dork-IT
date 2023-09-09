import React from "react";
import { useForm } from "react-hook-form";
import { dorkTypes } from "../../Configs/htmlConfigs";
import toast from "react-hot-toast";
import { useSiteData } from "../../Contexts/useSiteData";
import { Link } from "react-router-dom";

const DorkForm = ({ addDork }) => {
  const { register, handleSubmit, reset } = useForm();
  const { dorks, setDorks } = useSiteData();
  const onSubmit = (data) => {
    if (data.dorkText === "") {
      toast.error("You must Enter any text to Add Dork");
      return;
    }
    addDork(data);
    reset();
  };

  return (
    <div className="box  box-border">
      <h4 className="text-xl text-center my-3  font-bold">Dork Form</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="">
          <select
            {...register("dorkType")}
            className="select select-success w-full my-3  bg-dark text-dark"
          >
            {dorkTypes.map((type, i) => (
              <option key={i} value={type}>
                {type.toUpperCase()}
              </option>
            ))}
          </select>
          <input
            {...register("dorkText")}
            type="text"
            placeholder="Enter your Google dork query"
            className="input bg-dark text-dark input-bordered input-success w-full my-3"
          />
        </div>
        <button
          type="submit"
          className=" text-white rounded py-2 px-4  btn  btn-success btn-block mx-auto"
        >
          Add Dork in URL ➕
        </button>
      </form>
      <p className="my-3 text-center">
        Visit <Link className="text-cyan-500" to={"/about"}>About</Link> to know about Google Dork
      </p>
    </div>
  );
};

export default DorkForm;
