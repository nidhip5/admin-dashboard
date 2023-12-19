import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import Footer from "../ui/dashboard/footer/footer";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 bg-admin-soft-color p-5">
        <Sidebar />
      </div>
      <div className="p-5" style={{ flex: 4 }}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
