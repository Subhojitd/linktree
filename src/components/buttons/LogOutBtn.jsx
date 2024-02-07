"use client";
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

export default function LogOutBtn() {
  return (
    <button
      className="border px-3 py-1 flex gap-1  items-center shadow"
      onClick={() => signOut()}
    >
      Logout <MdLogout />
    </button>
  );
}
