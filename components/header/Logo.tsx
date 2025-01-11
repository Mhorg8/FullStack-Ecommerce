import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  text: string;
}

function Logo({ className, text }: Props) {
  return (
    <Link href="/" className="w-full">
      <h2
        className={cn(
          "text-2xl font-black uppercase tracking-wider text-darkColor",
          className
        )}
      >
        {text}
      </h2>
    </Link>
  );
}

export default Logo;
