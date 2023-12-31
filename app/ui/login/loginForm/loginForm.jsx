"use client";

import React, { useState } from "react";
import { authenticate } from "@/app/lib/actions";

const LoginForm = () => {
  const [error, setError] = useState("");
  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    data?.error && setError(data.error);
  };
  return (
    <form
      className="flex flex-col bg-admin-color p-12 h-[520px] w-[500px] rounded-lg"
      action={handleLogin}
    >
      <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>
      <input
        type="text"
        className="text-sm p-8 rounded bg-admin-soft-color mb-10"
        name="username"
        placeholder="Username"
      />
      <input
        type="password"
        className="text-sm p-8 rounded bg-admin-soft-color mb-10"
        name="password"
        placeholder="Password"
      />
      <button
        className="bg-blue-500 p-5 rounded font-semibold text-sm"
        type="submit"
      >
        Log me in
      </button>
      <div className="text-center mt-8">{error && error}</div>
    </form>
  );
};

export default LoginForm;
