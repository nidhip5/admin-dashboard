"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const MenuLink = ({ list }) => {
  const pathname = usePathname();
  return (
    <Link
      href={list.path}
      className={`p-5 flex items-center gap-3 my-1 rounded-[10px] hover:bg-admin-color ${
        pathname === list.path && "bg-admin-color"
      }`}
    >
      {list.icon}
      {list.title}
    </Link>
  );
};

export default MenuLink;
