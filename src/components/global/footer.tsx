import React from "react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[97vw]   rounded-t-2xl md:gap-0 gap-5  backdrop-blur-md px-5 relative border-t border-dashed border-zinc-700 py-10 grid md:grid-cols-3  grid-cols-1 items-center justify-between">
      {/* <div className="w-[30rem] h-[30rem] bg-gradient rounded-full blur-3xl opacity-10 absolute top-30 -left-50"></div>
      <div className="w-[30rem] h-[30rem] bg-gradient rounded-full blur-3xl opacity-5 absolute top-30 -left-50"></div> */}
        <div className="flex w-full  md:items-start items-center flex-col gap-4 justify-center">
        <img src="/svg/logo.svg" alt="logo" className="w-[10rem]" />
        <p className="text-sm md:text-start text-center md:w-3/4 w-full text-zinc-400">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.{" "}
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex   bg-white/5 rounded-2xl  p-2  gap-3  items-center justify-center">
          <div className="rounded-full w-8 h-8 bg-gradient"></div>
          <div className="flex flex-col">
            <p className="font-extrabold font-sm">EFIC&nbsp;Protocol</p>
            <h1 className="text-sm ">BUSD</h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex  gap-3    items-center justify-center">
          <FaDiscord className="text-2xl text-zinc-400" />
          <FaTelegram className="text-2xl text-zinc-400" />
          <FaTwitter className="text-2xl text-zinc-400" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
