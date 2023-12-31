import { addUser } from "@/app/lib/actions";
import React from "react";

const AddUser = () => {
  return (
    <div className="py-3">
      <form action={addUser} className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Enter User"
          name="username"
          className="rounded border-2 bg-admin-soft-color text-sm border-[#182237] p-4"
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          className="rounded border-2 bg-admin-soft-color text-sm border-[#182237] p-4"
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          className="rounded border-2 bg-admin-soft-color text-sm border-[#182237] p-4"
        />
        <input
          type="tel"
          placeholder="Enter Phone"
          name="phone"
          className="rounded border-2 bg-admin-soft-color text-sm border-[#182237] p-4"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="rounded border-2 bg-admin-soft-color text-sm border-[#182237] p-4"
        >
          <option value={true}>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="rounded border-2 bg-admin-soft-color text-sm border-[#182237] p-4"
        >
          <option value={true}>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          placeholder="Enter Address"
          rows="15"
          className="rounded border-2 bg-admin-soft-color border-[#182237] p-4 col-span-2 text-sm"
        ></textarea>
        <button
          type="submit"
          className="col-span-2 bg-admin-soft-color p-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
