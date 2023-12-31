import Image from "next/image";
import React from "react";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import MenuLink from "./menuLink/menuLink";
import Link from "next/link";

const menuItem = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const sidebar = () => {
  return (
    <div className="fixed w-80 h-screen bg-admin-soft-color">
      <div className="flex items-center gap-5 mb-8">
        <FaUserCircle className="h-12 w-12" />
        <div className="flex flex-col">
          <span className="font-medium">Nidhi Patel</span>
          <span className="text-sm">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItem.map((item, index) => (
          <li key={index}>
            <span className="text-admin-color font-bold text-xs my-3">
              {item.title}
            </span>
            {item.list.map((list) => (
              <MenuLink list={list} key={list.title} />
            ))}
          </li>
        ))}
      </ul>
      <Link href="/login">
        <button className="p-5 m-1.5 flex items-center gap-2.5 bg-none border-none hover:bg-admin-color w-full cursor-pointer rounded-[10px]">
          <MdLogout />
          Logout
        </button>
      </Link>
    </div>
  );
};

export default sidebar;
