import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-6 text-2xl">회원가입 폼</h1>
      <div className="flex flex-col space-y-4">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="NickName" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm" />
        <input type="text" placeholder="Birth" />
        <div className="flex">
          <input type="text" placeholder="Number" />
          <input type="text" placeholder="Number" />
        </div>
        <div className="flex space-x-3 justify-center items-center ">
          <button className="border p-2">Login</button>
          <button className="border p-2">Join</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
