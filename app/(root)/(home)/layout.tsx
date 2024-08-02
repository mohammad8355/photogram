import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-4 bg-white flex justify-center items-center w-full h-full">
      <div className="h-full text-secondary-800 w-full rounded-[2em] bg-secondary-200">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
