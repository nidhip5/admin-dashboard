import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ViewSingleProduct = () => {
  return (
    <div className="grid grid-cols-[20%,80%] gap-5 pr-5 pt-5">
      <div className="grid gap-3 self-start bg-admin-soft-color p-5 rounded">
        <FaUserCircle className="text-2xl w-full h-64" />
        <span className="text-center">IPhone</span>
      </div>
      <div className="grid gap-5 p-5 bg-admin-soft-color rounded">
        <div className="grid w-full gap-4">
          <label>Title</label>
          <input
            type="text"
            placeholder="IPhone 13"
            name="title"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Price</label>
          <input
            type="text"
            placeholder="50000"
            name="price"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Stock</label>
          <input
            type="text"
            placeholder="22"
            name="stock"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Color</label>
          <input
            type="text"
            placeholder="blue"
            name="color"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Size</label>
          <input
            type="text"
            placeholder="2.5"
            name="size"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Cat</label>
          <select
            name="cat"
            id="cat"
            className="rounded text-sm bg-admin-color p-4"
          >
            <option value="kitchen" selected>
              Kitchen
            </option>
            <option value="company">Company</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="desc here"
          rows="15"
          className="rounded border-2 bg-transparent border-[#182237] p-4 col-span-2 text-sm"
        ></textarea>
      </div>
    </div>
  );
};

export default ViewSingleProduct;
