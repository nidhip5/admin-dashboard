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
    <div className="py-2.5 px-4 bg-admin-soft-color flex items-center justify-between">
      <div className="text-[#7f8ca7] font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      {/* <div className="flex items-center gap-5">
        <div className="flex gap-4">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
