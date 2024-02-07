"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";
import grabUserName from "@/actions/grabUsername";

export default async function Account({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.username;

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <form action={grabUserName}>
        <h1 className="text-4xl font-bold text-center mb-2">
          Grab your username
        </h1>
        <p className="text-center mb-6 text-gray-500">Choose your username</p>

        <div className="max-w-xs mx-auto">
          <input
            name="username"
            className="block p-2 mx-auto border w-full mb-2 text-center"
            type="text"
            defaultValue={desiredUsername}
            placeholder="username"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4  mx-auto w-full flex items-center justify-center gap-2"
          >
            <span>Claim your username</span> <FaChevronRight />
          </button>
        </div>
      </form>
    </div>
  );
}
