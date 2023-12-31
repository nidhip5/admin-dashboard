"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const handleChange = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  }, 500);
  console.log(searchParams, "searchParams", pathName, "pathName");
  return (
    <div>
      <div className="flex items-center justify-start text-sm">
        <div className="gap-2.5 bg-admin-color px-3 py-2 flex items-center rounded-lg">
          <MdSearch />
          <input
            placeholder={placeholder}
            className="bg-transparent border-none text-admin-color"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
