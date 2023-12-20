import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div>
      <div className="flex items-center justify-start">
        <div className="gap-2.5 bg-admin-soft-color px-3 py-2 flex items-center rounded-lg">
          <MdSearch />
          <input
            placeholder={placeholder}
            className="bg-transparent border-none text-admin-color"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
