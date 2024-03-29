import React from "react";
import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

const Dashboard = () => {
  return (
    <div className="flex gap-3 my-3">
      <div className="flex-[3] flex flex-col gap-3">
        <div className="flex gap-3 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
