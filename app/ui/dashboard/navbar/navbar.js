"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="p-5 rounded-[10px] bg-admin-soft-color flex items-center justify-between">
      <div className="text-[#7f8ca7] font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 bg-admin-color p-2.5 rounded-[10px]">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-admin-color"
          />
        </div>
        <div className="flex gap-4">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
