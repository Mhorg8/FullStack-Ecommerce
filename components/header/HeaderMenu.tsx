"use client";
import { Category } from "@/sanity.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderMenu({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center text-sm capitalize font-semibold">
      <ul className="flex items-center gap-5">
        <Link
          className={`hover:text-darkColor  cursor-pointer hoverEffect relative group ${
            pathname === "/" && "text-darkColor"
          }`}
          href="/"
        >
          Home
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
              pathname === "/" && "w-1/2"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
              pathname === "/" && "w-1/2"
            }`}
          />
        </Link>
        {categories.map((item) => (
          <Link
            key={item._id}
            href={`/category/${item.slug?.current}`}
            className={`hover:text-darkColor  cursor-pointer hoverEffect relative group ${
              pathname === `/category/${item.slug?.current}` && "text-darkColor"
            }`}
          >
            {item.title}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
                pathname === `/category/${item.slug?.current}` && "w-1/2"
              }`}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
                pathname === `/category/${item.slug?.current}` && "w-1/2"
              }`}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HeaderMenu;
