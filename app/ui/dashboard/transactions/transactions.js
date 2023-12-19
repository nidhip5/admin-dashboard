import React from "react";
import { FaUserTie } from "react-icons/fa";

const Transactions = () => {
  const users = [
    {
      name: "John Doe",
      status: "Pending",
      date: "12.02.2021",
      amount: "$3,200",
    },
    {
      name: "Mark Zuckerberg",
      status: "Completed",
      date: "02.04.2022",
      amount: "$2,800",
    },
    {
      name: "Jordan Walke",
      status: "Processing",
      date: "09.01.2023",
      amount: "$200",
    },
    {
      name: "Alan Walker",
      status: "Cancelled",
      date: "12.02.2022",
      amount: "$5,200",
    },
  ];
  return (
    <div className="bg-admin-soft-color p-5 rounded-[10px]">
      <h2>Latest Transactions</h2>
      <table className="w-full">
        <thead className="mt-1 font-extralight text-[#7f8ca7]">
          <tr>
            <td className="p-5">Name</td>
            <td className="p-5">Status</td>
            <td className="p-5">Date</td>
            <td className="p-5">Amount</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td className="p-5 flex gap-2.5 items-center">
                  <FaUserTie size={20} />
                  {item.name}
                </td>
                <td className="p-5">
                  <span
                    className={`rounded-[5px] p-1.5 text-sm text-white ${
                      item.status === "Pending"
                        ? "bg-[#f7cb7375]"
                        : item.status == "Cancelled"
                        ? "bg-red-700"
                        : item.status == "Processing"
                        ? "bg-yellow-700"
                        : item.status == "Completed"
                        ? "bg-green-700"
                        : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-5">{item.date}</td>
                <td className="p-5">{item.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
