import React from "react";
export default function Post({ title, text, imgSrc, children, link }) {
  return (
    <div className="shadow-md m-1 flex flex-col items-center w-[300px] p-2 rounded-md bg-white ">
      <a href={link}>
        <img className="rounded-md w-full" src={imgSrc} />
        <div className="w-full p-1">
          <h1 className="hover:text-primary-700 w-full text-left text-xl font-bold text-secondary-800">
            {title}
          </h1>
          <p className="text-base font-normal text-secondary-600">{text}</p>
          {children}
        </div>
      </a>
    </div>
  );
}
