"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logoBlack.png";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-full h-20 bg-white border-b border-be-gray-400">
      <nav className="h-full max-w-7xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-20" />
        </Link>
        <div className="relative w-full hidden lg:inline-flex lg:w-150 h-10 text-base text-primeColor border border-black items-center gap-2 justify-between px-6 rounded-md">
          <input
            type="text"
            placeholder="Search your products here"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <IoCloseOutline
              onClick={() => setSearchQuery("")}
              className="w-5 h-5 hover:cursor-pointer"
            />
          ) : (
            <FaSearch className="w-5 h-5 hover:cursor-pointer" />
          )}
        </div>
        <div className="">
          <p className="">nav links</p>
        </div>
      </nav>
    </div>
  );
}
