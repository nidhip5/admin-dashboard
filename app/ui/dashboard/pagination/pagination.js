import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-q.5">
      <button className="py-1.5 px-2.5 cursor-not-allowed bg-gray-400 rounded">
        Previous
      </button>
      <button className="py-1.5 px-2.5 cursor-pointer bg-white text-black rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
