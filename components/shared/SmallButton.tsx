"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function SmallButton({
  imgUrl,
  imgClassName = "w-[1.5em]",
  children,
}: any) {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  return (
    <button
      onClick={() => setShowDropDownMenu(!showDropDownMenu)}
      className="px-2 relative bg-white flex flex-col justify-start items-center shadow-md hover:shadow-lg transition-shadow rounded-md w-fit h-[2em]"
    >
      <Image className={`${imgClassName}`} alt="notification" src={imgUrl} />
      {showDropDownMenu && (
        <div className="absolute top-5 shadow-md left-0 z-10 mt-2 w-fit overflow-hidden bg-white rounded-md flex flex-col ">
          {children}
        </div>
      )}
    </button>
  );
}
