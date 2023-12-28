import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-admin-soft-color">
      <form className="grid gap-5 mx-auto my-auto">
        <input
          type="text"
          className="text-sm p-8.5 border rounded bg-admin-color"
          name="username"
          placeholder="Username"
        />
        <input
          type="password"
          className="text-sm p-8.5 border rounded bg-admin-color"
          name="password"
          placeholder="Password"
        />
        <button
          className="bg-admin-soft-color p-4 rounded text-sm"
          type="submit"
        >
          Log me in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
