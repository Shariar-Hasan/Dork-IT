import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useSiteData } from "../../Contexts/useSiteData";
import { store } from "../../Assets/store";

const DorkList = ({ dorks = [], setDorks }) => {
  const { handleSearch } = useSiteData();
  const deleteDorkFromList = (key) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const newDorks = dorks.filter((dork, i) => dork.fs_id !== key);
        store.remove(key);
        setDorks(newDorks);
        toast.success("Dork with  key: " + key + " has been deleted");
      }
    });
  };
  return (
    <div className="space-y-2">
      <div className="box box-border">
        <h4 className="text-xl my-3 font-bold">
          Generated Dork URL: <span className="text-xs">(Click to Delete)</span>
        </h4>

        {dorks.length > 0 ? (
          <>
            <p className="bg-dark p-4 rounded join-item w-full text-justify flex flex-wrap my-5">
              {dorks.map((dork, i) => (
                <button
                  key={i}
                  onClick={() => deleteDorkFromList(dork.fs_id)}
                  title="Click to Delete"
                  className="relative py-1 px-2 font-semibold rounded mr-5 my-1 bg-success text-black hover:scale-110 duration-200 cursor-pointer group"
                >
                  <span className="absolute top-0 left-0 bg-black w-full h-full group-hover:opacity-70 opacity-0 duration-200"></span>
                  <span className="absolute  left-0 right-0 text-center opacity-0 group-hover:opacity-100 duration-300 transition-all text-gray-100">
                    <i className="fa fa-trash text-xs " aria-hidden="true"></i>
                  </span>
                  {dork.dork}
                </button>
              ))}
            </p>
            <div className="grid grid-cols-6 gap-3">
              <button
                onClick={handleSearch}
                className="col-span-5 text-white rounded py-2 px-4  btn  btn-success btn-block mx-auto"
              >
                Search on Google 🔍
              </button>
              <button
                onClick={() => {
                  setDorks([]);
                  store.remove();
                }}
                className="col-span-1 text-white rounded py-2 px-4  btn  btn-success btn-block mx-auto"
              >
                ❌
              </button>
            </div>
          </>
        ) : (
          <p className="bg-dark text-red-700 text-center p-6 rounded my-7">
            No Dork Created Yet
          </p>
        )}
      </div>
    </div>
  );
};

export default DorkList;
