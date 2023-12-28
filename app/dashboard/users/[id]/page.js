import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ViewSingleUser = () => {
  return (
    <div className="grid grid-cols-[20%,80%] gap-5 pr-5 pt-5">
      <div className="grid gap-3 self-start bg-admin-soft-color p-5 rounded">
        <FaUserCircle className="text-2xl w-full h-64" />
        <span className="text-center">John Doe</span>
      </div>
      <div className="grid gap-5 p-5 bg-admin-soft-color rounded">
        <div className="grid w-full gap-4">
          <label>Username</label>
          <input
            type="text"
            placeholder="John Doe"
            name="user"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Email</label>
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            name="email"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Password</label>
          <input
            type="text"
            placeholder="john123"
            name="password"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Phone</label>
          <input
            type="text"
            placeholder="9878786777"
            name="phone"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Address</label>
          <input
            type="text"
            placeholder="California"
            name="user"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Is Admin?</label>
          <select
            name="cat"
            id="cat"
            className="rounded text-sm bg-admin-color p-4"
          >
            <option value="isAdmin" selected>
              Is Admin
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className="grid w-full gap-4">
          <label>Is Admin?</label>
          <select
            name="cat"
            id="cat"
            className="rounded text-sm bg-admin-color p-4"
          >
            <option value="isActive" selected>
              Is Active
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ViewSingleUser;
