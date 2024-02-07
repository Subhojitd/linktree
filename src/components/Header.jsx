import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogOutBtn from "./buttons/LogOutBtn";
import { FaLink, FaTree } from "react-icons/fa6";

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="bg-white border-b  py-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex items-center gap-6 ">
          <Link
            href={"/"}
            className="flex gap-1 items-center text-xl font-semibold"
          >
            <FaLink color="blue" /> Link Tree <FaTree color="green" />
          </Link>
          <nav className="flex items-center gap-4 text-slate-500">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>

        <nav className="flex items-center gap-4 text-sm text-slate-500">
          {!!session && (
            <>
              <Link href={"/account"}>Hello, {session?.user?.name}</Link>
              <LogOutBtn />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Login</Link>

              <Link href={"/login"}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
