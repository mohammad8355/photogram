import React from "react";
import Image from "next/image";
export default function SmallButton({ imgUrl, children }: any) {
  return (
    <button className="px-2 bg-white flex justify-center items-center shadow-md hover:shadow-lg transition-shadow rounded-md w-fit h-[2em]">
      <Image className="w-[1.5em]" alt="notification" src={imgUrl} />
      {children}
    </button>
  );
}
