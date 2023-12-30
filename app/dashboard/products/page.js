import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/page";
import Link from "next/link";
import React from "react";
import { fetchProducts } from "@/app/lib/data";

const ProductPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);
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
          {products?.map((item, index) => (
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
                  {item?.title}
                </div>
              </td>
              <td className="p-2.5">{item?.desc}</td>
              <td className="p-2.5">{item?.price}</td>
              <td className="p-2.5">
                {item?.createdAt?.toString().slice(4, 16)}
              </td>
              <td className="p-2.5">{item?.stock}</td>
              <td className="p-2.5 flex gap-2">
                <Link href={`/dashboard/products/${item?.id}`}>
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

export default ProductPage;
