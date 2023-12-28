import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserTie } from "react-icons/fa";
import Search from "../../ui/dashboard/search/page";

const UserPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-5">
        <Search placeholder="Search for a User..." />
        <Link href="/dashboard/users/add">
          <button className="px-2.5 py-1.5 bg-purple-800 rounded">
            Add New User
          </button>
        </Link>
      </div>
      <table className="w-full py-10 my-6 mx-3.5">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Email</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Role</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2.5">
              <div className="flex items-center gap-1">
                <FaUserTie width={40} height={40} />
                John Doe
              </div>
            </td>
            <td className="p-2.5">john@gmail.com</td>
            <td className="p-2.5">12.02.2023</td>
            <td className="p-2.5">Admin</td>
            <td className="p-2.5">Active</td>
            <td className="p-2.5 flex gap-2">
              <Link href="/dashboard/users/test">
                <button className="bg-green-700 px-2.5 py-1.5 rounded">
                  View
                </button>
              </Link>
              <button className="bg-red-700 px-2.5 py-1.5 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UserPage;
