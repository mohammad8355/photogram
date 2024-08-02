import React from "react";
import notif from "../../public/assets/icons/ic_notif.svg";
import man from "../../public/assets/icons/ic_man.png";
import search from "../../public/assets/icons/ic_search.svg";
import Image from "next/image";
import SmallButton from "./SmallButton";
import logout from "../../public/assets/icons/ic_logout.png.png";
import logo from "../../public/assets/icons/photogram_Logo.png";
export default function Navbar() {
  return (
    <div className="flex justify-around items-center py-2">
      <div className="flex items-center w-fit px-2">
        <SmallButton imgUrl={logout}>Logout</SmallButton>
        <Image className="w-[5em] object-cover" src={logo} alt="photogram" />
      </div>
      <div className="py-2 px-1 w-1/2 flex rounded-[2em] bg-white">
        <Image className="w-[1.5em]" alt="search" src={search} />
        <input
          type="text"
          placeholder="userName , title, tags..."
          className="text-secondary-500 w-full bg-transparent outline-none focus-visible:none"
        />
      </div>
      <div className="flex justify-center gap-x-4">
        <SmallButton imgUrl={man} />
        <SmallButton imgUrl={notif} />
        <button className="shadow-md rounded-[2em] bg-gradient-to-r from-primary-800  to-primary-500 hover:shadow-lg transition-shadow text-white text-center py-2 px-6">
          + Create a post
        </button>
      </div>
    </div>
  );
}
