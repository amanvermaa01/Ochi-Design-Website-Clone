import React from "react";

const About = () => {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue Montreal'] text-[3vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our Approach:</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div>
      </div>
    </div>
  );
};

export default About;
