

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import Link from "next/link";
import React from "react";

interface HeaderProps {
  font: {
    className: string;
  };
}
function Header() {
  return (
    <header className=" bg-[#CFA6A61C] ">
      <ul className=" w-full flex items-center  text-lg   gap-5 justify-center  md:justify-end h-[100px] px-20 mx-auto py-[32px]  sm:h-auto">
        <li>
          <Link href="">Works</Link>
        </li>
        <li>
          <Link href="">Blog</Link>
        </li>
        <li>
          <Link href="">Contact</Link>
        </li>
        <li className="bg-gray-500 hover:bg-[#F98585] text-white font-bold rounded px-2 py-1">
         <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </li>
      </ul>
    </header>
  );
}

export default Header;
