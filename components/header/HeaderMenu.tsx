"use client";
import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex w-1/3 items-center text-sm capitalize font-semibold">
      <ul className="flex items-center gap-5">
        {headerData.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-darkColor  cursor-pointer hoverEffect relative group ${
              pathname === item.href && "text-darkColor"
            }`}
          >
            {item.title}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
                pathname === item.href && "w-1/2"
              }`}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
                pathname === item.href && "w-1/2"
              }`}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HeaderMenu;
