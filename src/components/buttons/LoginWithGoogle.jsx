"use client";
import { signIn } from "next-auth/react";

import { FaGoogle } from "react-icons/fa";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-blue-500 text-white text-center w-full py-4 flex gap-4 justify-center items-center"
    >
      <FaGoogle size={20} />
      <span>Log In with Google</span>
    </button>
  );
}
