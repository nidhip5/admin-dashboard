import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-admin-soft-color p-5 rounded-[10px] flex cursor-pointer gap-5 hover:bg-admin-color w-full">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-3">
        <span>Total Users</span>
        <span className="text-2xl font-medium">10,234</span>
        <span className="text-xs">
          <span className="text-lime-400 mr-1">12%</span>more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
