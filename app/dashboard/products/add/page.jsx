import { addProduct } from "@/app/lib/actions";
import React from "react";

const AddSingleProduct = () => {
  return (
    <div className="py-3">
      <form className="grid grid-cols-2 gap-3" action={addProduct}>
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          className="rounded border-2 bg-admin-soft-color border-[#182237] text-sm p-4"
          required
        />
        <input
          type="text"
          placeholder="Enter Price"
          name="price"
          className="rounded border-2 bg-admin-soft-color border-[#182237] text-sm p-4"
        />
        <input
          type="text"
          placeholder="Enter Stock"
          name="stock"
          className="rounded border-2 bg-admin-soft-color border-[#182237] text-sm p-4"
        />
        <input
          type="text"
          placeholder="Enter Color"
          name="color"
          className="rounded border-2 bg-admin-soft-color border-[#182237] text-sm p-4"
        />
        <textarea
          name="desc"
          placeholder="Enter Description"
          rows="15"
          className="rounded border-2 bg-admin-soft-color border-[#182237] p-4 col-span-2 text-sm"
        ></textarea>
        <button
          type="submit"
          className="col-span-2 bg-admin-soft-color p-4 rounded text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSingleProduct;
