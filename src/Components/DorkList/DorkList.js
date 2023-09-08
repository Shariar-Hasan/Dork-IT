// DorkList.js
import React from 'react';

const DorkList = ({ dorks, handleSearch }) => {
  return (
    <div className="space-y-2">
      {dorks.length > 0 && (
        <div>
          <p>Generated URL:</p>
          <p className="bg-gray-200 p-2 rounded">{dorks.join(' ')}</p>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      )}
    </div>
  );
};

export default DorkList;
