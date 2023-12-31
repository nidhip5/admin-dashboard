"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const page = searchParams.get("page") || 1; // get page no from searchParams if not mentioned anything we assume that we are on page 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 10;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  // eg: we are on page1 then 3 * 1 - 1 which is 0 > 0 it means hasPrev button will be diabled
  // we are on page2 then 3 * 2 - 1 which is 3 > 0 it means hasPrev button will be enabled
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;
  // eg: for page2 : 3 * (2-1) + 3 which is 6 < total number of data (12) so next button will be enabled
  // eg : for page4 : 3 * (4-1) + 3 which is 12 < total number of data (12) which is false so next button will be disabled

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathName}?${params}`);
  };

  return (
    <div className="flex items-center justify-between pt-4 text-sm">
      <button
        className={`py-1.5 px-2.5 bg-gray-500 rounded ${
          !hasPrev ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={`py-1.5 px-2.5 bg-white text-black rounded ${
          !hasNext ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
