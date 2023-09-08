import React from "react";

const DorkList = ({ dorks = [], handleSearch, setDorks }) => {
  return (
    <div className="space-y-2">
      <div className="box">
        <h4 className="text-xl my-3 font-bold">Generated Dork URL:</h4>

        {dorks.length > 0 ? (
          <>
            <p className="bg-gray-900 p-6 rounded my-7">{dorks.join(" ")}</p>
            <div className="grid grid-cols-6 gap-3">
              <button
                onClick={handleSearch}
                className="col-span-5 text-white rounded py-2 px-4  btn  btn-success btn-block mx-auto"
              >
                Search on Google 🔍
              </button>
              <button
                onClick={() => setDorks([])}
                className="col-span-1 text-white rounded py-2 px-4  btn  btn-success btn-block mx-auto"
              >
                ❌
              </button>
            </div>
          </>
        ) : (
          <p className="bg-gray-900 text-red-700 text-center p-6 rounded my-7">
            No Dork Created Yet
          </p>
        )}
      </div>
    </div>
  );
};

export default DorkList;
