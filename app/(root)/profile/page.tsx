import Image from "next/image";
import React from "react";
export default function page() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full flex justify-center h-11">
        <div className="absolute top-0 w-[300px] h-[300px]">
          <img
            className="w-full h-full object-cover rounded-full"
            width={20}
            height={20}
            src={"/assets/images/profile.jpg"}
            alt={"profile photo"}
          />
        </div>
      </div>

      <div className="w-10/12 bg-slate-200 rounded-md flex flex-col justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-500">UserName</h1>
        </div>
      </div>
    </div>
  );
}
