import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/page";
import Link from "next/link";
import React from "react";
import { FaUserTie } from "react-icons/fa";

const ProductPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-5">
        <Search placeholder="Search for a Product..." />
        <Link href="/dashboard/products/add">
          <button className="px-2.5 py-1.5 bg-purple-800 rounded">
            Add New Product
          </button>
        </Link>
      </div>
      <table className="w-full py-10 my-6 mx-3.5">
        <thead>
          <tr>
            <td className="p-2.5">Title</td>
            <td className="p-2.5">Description</td>
            <td className="p-2.5">Price</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Stock</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2.5">Iphone</td>
            <td className="p-2.5">desc</td>
            <td className="p-2.5">$123</td>
            <td className="p-2.5">12.02.2023</td>
            <td className="p-2.5">70</td>
            <td className="p-2.5 flex gap-2">
              <Link href="/">
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

export default ProductPage;
