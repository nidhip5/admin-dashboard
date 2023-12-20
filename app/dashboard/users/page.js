import Link from "next/link";
import React from "react";
import Search from "../../ui/dashboard/search/page";

const UserPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-5">
        <Search placeholder="Search for a User..." />
        <Link href="/dashboard/users/add">
          <button>Add User</button>
        </Link>
      </div>
      <table></table>
    </div>
  );
};

export default UserPage;
