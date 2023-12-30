import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Search from "../../ui/dashboard/search/page";

const UserPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);
  return (
    <div className="bg-admin-soft-color my-3 p-4">
      <div className="flex items-center justify-between">
        <Search placeholder="Search Name..." />
        <Link href="/dashboard/users/add">
          <button className="text-sm px-2.5 py-1.5 bg-purple-800 rounded">
            Add New User
          </button>
        </Link>
      </div>
      <table className="w-full py-10 my-6 mx-3.5 text-sm">
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
          {users.map((item, index) => (
            <tr key={index}>
              <td className="p-2.5">
                <div className="flex items-center gap-4 capitalize text-sm">
                  {item?.img ? (
                    <Image
                      src={item?.img}
                      alt=""
                      height={35}
                      width={35}
                      className="rounded-full h-9 w-9"
                    />
                  ) : (
                    <FaUserCircle className="text-4xl" />
                  )}
                  {item?.username}
                </div>
              </td>
              <td className="p-2.5 text-sm">{item?.email}</td>
              <td className="p-2.5 text-sm">
                {item?.createdAt?.toString().slice(4, 16) ?? "---"}
              </td>
              <td className="p-2.5 text-sm text-white">
                <span
                  className={`p-1 rounded ${
                    item?.isAdmin ? "bg-purple-500" : "bg-orange-500"
                  }`}
                >
                  {item?.isAdmin ? "Admin" : "Client"}
                </span>
              </td>
              <td className="p-2.5 text-sm">
                <span
                  className={`p-1 rounded ${
                    item?.isActive ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {item?.isActive ? "active" : "passive"}
                </span>
              </td>
              <td className="p-2.5 text-sm flex gap-2">
                <Link href={`/dashboard/users/${item?.id}`}>
                  <button className="bg-green-700 px-2.5 py-1.5 rounded">
                    View
                  </button>
                </Link>
                <button className="bg-red-700 px-2.5 py-1.5 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UserPage;
