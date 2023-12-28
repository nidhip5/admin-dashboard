import React from "react";

const AddUser = () => {
  return (
    <div className="mt-4 p-4">
      <form className="grid grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Enter User"
          name="user"
          className="rounded border-2 bg-transparent text-sm border-[#182237] p-4"
          required
        />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          className="rounded border-2 bg-transparent text-sm border-[#182237] p-4"
        />
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          className="rounded border-2 bg-transparent text-sm border-[#182237] p-4"
        />
        <input
          type="text"
          placeholder="Enter Phone"
          name="phone"
          className="rounded border-2 bg-transparent text-sm border-[#182237] p-4"
        />
        <select
          name="cat"
          id="cat"
          className="rounded border-2 bg-transparent text-sm border-[#182237] p-4"
        >
          <option value="isAdmin" selected>
            Is Admin
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="cat"
          id="cat"
          className="rounded border-2 bg-transparent text-sm border-[#182237] p-4"
        >
          <option value="isActive" selected>
            Is Active
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          placeholder="Enter Address"
          rows="15"
          className="rounded border-2 bg-transparent border-[#182237] p-4 col-span-2 text-sm"
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
