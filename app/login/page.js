import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-admin-soft-color w-full h-screen flex items-center justify-center">
      <form className="flex flex-col bg-admin-color p-12 h-[500px] w-[500px] rounded-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>
        <input
          type="text"
          className="text-sm p-8 border rounded bg-admin-color mb-10"
          name="username"
          placeholder="Username"
        />
        <input
          type="password"
          className="text-sm p-8 border rounded bg-admin-color mb-10"
          name="password"
          placeholder="Password"
        />
        <Link href="/dashboard" className="">
          <button
            className="bg-admin-soft-color p-8 rounded text-sm"
            type="submit"
          >
            Log me in
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
