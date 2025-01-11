import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "E-commerce Backend",
  description: "Generate by sanity",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
