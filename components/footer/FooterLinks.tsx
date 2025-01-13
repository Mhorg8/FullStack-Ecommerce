import { footerLink } from "@/types";
import Link from "next/link";
import React from "react";
import FooterHeading from "./FooterHeading";

interface Props {
  items: footerLink[];
  heading: string;
}

const FooterLinks = ({ items, heading }: Props) => {
  return (
    <div>
      <FooterHeading text={heading} />
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <Link
            href={
              heading === "categories"
                ? "/category/${item.href}"
                : `${item.href}`
            }
            key={item.title}
            className="text-gray-600 hover:text-darkColor font-medium hoverEffect"
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
