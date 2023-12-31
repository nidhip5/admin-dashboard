import { updateUser } from "@/app/lib/actions";
import { fetchSingleUser } from "@/app/lib/data";
import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ViewSingleUser = async ({ params }) => {
  const { id } = params;
  const user = await fetchSingleUser(id);
  return (
    <div className="grid grid-cols-[20%,80%] gap-5 pr-5 pt-5">
      <div className="grid gap-3 self-start bg-admin-soft-color p-5 rounded">
        {user?.img ? (
          <Image
            src={user?.img}
            alt=""
            height={250}
            width={250}
            className="rounded h-64 w-64"
          />
        ) : (
          <FaUserCircle className="text-2xl w-full h-64" />
        )}
        <span className="text-center">{user?.username}</span>
      </div>
      <form
        action={updateUser}
        className="grid text-sm gap-5 p-5 bg-admin-soft-color rounded"
      >
        <input type="hidden" name="id" value={user?.id} />
        <div className="grid w-full gap-4">
          <label>Username</label>
          <input
            type="text"
            placeholder={user?.username}
            name="username"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Email</label>
          <input
            type="text"
            placeholder={user?.email}
            name="email"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Password</label>
          <input
            type="password"
            placeholder="Update Password"
            name="password"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Phone</label>
          <input
            type="tel"
            placeholder={user?.phone}
            name="phone"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Address</label>
          <input
            type="text"
            placeholder={user?.address}
            name="address"
            className="rounded text-sm bg-admin-color p-4"
          />
        </div>
        <div className="grid w-full gap-4">
          <label>Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="rounded text-sm bg-admin-color p-4"
          >
            <option value={true} selected={user?.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user?.isAdmin}>
              No
            </option>
          </select>
        </div>
        <div className="grid w-full gap-4">
          <label>Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="rounded text-sm bg-admin-color p-4"
          >
            <option value={true} selected={user?.isActive}>
              Yes
            </option>
            <option value={false} selected={user?.isActive}>
              No
            </option>
          </select>
        </div>
        <button type="submit" className="bg-purple-500 mt-4 p-4 rounded">
          Update User
        </button>
      </form>
    </div>
  );
};

export default ViewSingleUser;
