import Pagination from "@/app/ui/dashboard/pagination/page";
import Search from "@/app/ui/dashboard/search/page";
import Link from "next/link";
import React from "react";
import { fetchProducts } from "@/app/lib/data";
import { IoMdPhonePortrait } from "react-icons/io";
import { deleteProduct } from "@/app/lib/actions";

const ProductPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);
  return (
    <div className="bg-admin-soft-color my-3 p-4">
      <div className="flex items-center justify-between">
        <Search placeholder="Search Product..." />
        <Link href="/dashboard/products/add">
          <button className="px-2.5 py-1.5 text-sm bg-purple-800 rounded">
            Add New Product
          </button>
        </Link>
      </div>
      <table className="w-[72vw] py-10 my-3 mx-3.5">
        <thead>
          <tr>
            <td className="p-2.5">Title</td>
            <td className="p-2.5 w-[35vw]">Description</td>
            <td className="p-2.5">Price</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Stock</td>
            <td className="p-2.5">Color</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => (
            <tr key={index} className="text-sm">
              <td className="p-2.5">
                <div className="flex items-center gap-2 capitalize text-sm">
                  <IoMdPhonePortrait className="text-2xl" />
                  {item?.title}
                </div>
              </td>
              <td className="p-2.5">
                <span className="w-[30vw] text-sm flex flex-wrap">
                  {item?.desc}
                </span>
              </td>
              <td className="p-2.5">$ {item?.price}</td>
              <td className="p-2.5">
                {item?.createdAt?.toString().slice(4, 16)}
              </td>
              <td className="p-2.5">{item?.stock}</td>
              <td className="p-2.5">{item?.color ?? "---"}</td>
              <td className="p-2.5 flex gap-2">
                <Link href={`/dashboard/products/${item?.id}`}>
                  <button className="bg-green-700 px-2.5 py-1.5 rounded">
                    View
                  </button>
                </Link>
                <form action={deleteProduct}>
                  <input type="hidden" name="id" value={item?.id} />
                  <button className="bg-red-700 px-2.5 py-1.5 rounded">
                    Delete
                  </button>
                </form>
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
