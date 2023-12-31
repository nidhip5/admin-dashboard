import { updateProduct } from "@/app/lib/actions";
import { fetchSingleProduct } from "@/app/lib/data";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";

const ViewSingleProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);
  return (
    <div className="grid grid-cols-[20%,80%] gap-5 pr-5 pt-5">
      <div className="grid gap-3 self-start bg-admin-soft-color p-5 rounded">
        <IoMdPhonePortrait className="text-2xl h-56 w-56" />
        <span className="text-center">{product?.title}</span>
      </div>
      <form
        action={updateProduct}
        className="grid gap-5 p-5 bg-admin-soft-color rounded text-sm"
      >
        <input type="hidden" name="id" value={product?.id} />
        <div className="grid w-full gap-4">
          <label>Title</label>
          <input
            type="text"
            placeholder={product?.title}
            name="title"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Price</label>
          <input
            type="text"
            placeholder={`$${product?.price}`}
            name="price"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Stock</label>
          <input
            type="text"
            placeholder={product?.stock}
            name="stock"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Description</label>
          <textarea
            name="desc"
            placeholder={product?.desc}
            rows="15"
            className="rounded border-2 bg-admin-color border-[#182237] p-4 col-span-2 text-sm"
          ></textarea>
        </div>
        <button type="submit" className="bg-purple-500 mt-4 p-4 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default ViewSingleProduct;
