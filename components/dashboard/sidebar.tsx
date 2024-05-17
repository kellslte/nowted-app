"use client";
import { Plus, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchInput from "./search";

type Props = {};

const Sidebar = (props: Props) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  function toggleSearch() {
    setSearchTerm("");
    setShowSearch(!showSearch);
  }

  useEffect(() => {
    if(searchTerm !== "") console.log(searchTerm)
  }, [searchTerm])

  return (
    <div className="min-h-screen h-full w-2/6 px-8 shadown-inner py-[1.875rem]">
      <div className="w-full h-[2.375rem] flex items-center justify-between mb-[1.875rem]">
        <Link href="/dashboard">
          <Image alt="logo" src={"/logo.png"} width={101} height={38} />
        </Link>
        <button
          className="border-none cursor-pointer transition-all ease-in-out duration-75 animate-out"
          onClick={toggleSearch}
        >
          {showSearch ? <X /> : <Search />}
        </button>
      </div>
      {showSearch ? (
        <SearchInput setSearchTerm={setSearchTerm} />
      ) : (
        <Link
          href={"/dashboard/notes/new"}
          className="w-full h-12 flex items-center justify-center bg-base-alt cursor-pointer"
        >
          <span className="flex items-center justify-center gap-x-1">
            <Plus />
            <p>New Note</p>
          </span>
        </Link>
      )}
      <div></div>
    </div>
  );
};

export default Sidebar;
