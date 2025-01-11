import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

function Title({ children, className }: Props) {
  return (
    <div className={cn("text-2xl font-semibold", className)}>{children}</div>
  );
}

export default Title;
