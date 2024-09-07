import Post from "@/components/shared/Post";
import { link } from "fs";
import React from "react";

export default function page() {
  let data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      title: "social Media Post Design",
      text: "learn how post on social media and marketing ...",
      link: "#",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcKqC7pCLkSjWWLa43Q2Rd5CFE-ac-rRCtYO4l19R_yp_S0bRSAzzsO11vLPSJl2W87A&usqp=CAU",
    });
  }
  return (
    <div className="overflow-x-auto flex flex-wrap justify-center">
      {data.map((item, index) => {
        return (
          <Post
            title={item.title}
            text={item.text}
            link={item.link}
            imgSrc={item.imgSrc}
          >
            <span>1403/06/{index + 1}</span>
          </Post>
        );
      })}
    </div>
  );
}
