import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";
import "./globals.css";
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main className=" p-4 bg-white flex justify-center items-center w-full h-full">
          <div className="overflow-x-auto h-full text-secondary-800 w-full rounded-[2em] bg-secondary-100">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
