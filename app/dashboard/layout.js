import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import Footer from "../ui/dashboard/footer/footer";

const layout = ({ children }) => {
  return (
    <div className="flex gap-3 min-h-screen">
      <div className="flex-1 p-5 bg-admin-soft-color ">
        <Sidebar />
      </div>
      <div className="" style={{ flex: 4 }}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
