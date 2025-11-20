"use client";

import { useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

export default function AuthScreen() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="font-extrabold text-blue-600 text-3xl">Codecook</h1>

      {/* Toggle Buttons */}
      <div className="flex bg-gray-200 rounded-xl p-1 gap-1">
        <button
          onClick={() => setMode("login")}
          className={`px-6 py-2 rounded-lg transition-all ${
            mode === "login"
              ? "bg-blue-500 text-white shadow"
              : "bg-transparent text-gray-600"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setMode("register")}
          className={`px-6 py-2 rounded-lg transition-all ${
            mode === "register"
              ? "bg-blue-500 text-white shadow"
              : "bg-transparent text-gray-600"
          }`}
        >
          Register
        </button>
      </div>

      {/* Form Container */}
      <div className="md:w-[400px] w-full px-5 transition-all">
        {mode === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <form className="flex flex-col gap-6">
      {/* <h1 className="font-semibold text-2xl text-center">Login</h1> */}
      <Input type="text" intent="primary" size="large" title="Email or Username" />
      <Input type="password" intent="primary" size="large" title="Password" />

      <div className="flex flex-col mt-2">
        <Button title="Login" intent="primary" size="large" />
        <button className="mt-1 text-blue-500 self-start cursor-pointer text-sm">
          Forgot password?
        </button>
      </div>
    </form>
  );
}

function RegisterForm() {
  return (
    <form className="flex flex-col gap-6">
      <h1 className="font-semibold text-2xl text-center">Create Account</h1>

      <Input type="text" intent="primary" size="large" title="Full Name" />
      <Input type="email" intent="primary" size="large" title="Email Address" />
      <Input type="text" intent="primary" size="large" title="College/company" />
      <Input type="password" intent="primary" size="large" title="Password" />

      <Button title="Register" intent="primary" size="large" />
    </form>
  );
}
