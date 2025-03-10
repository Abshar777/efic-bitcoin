import { AuthData, navData } from "@/data/navData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";

const Nav = () => {
  return (
    <div className="flex sticky backdrop-blur-md bg-background/5 md:mt-2 rounded-xl   md:top-2 top-0 z-50  items-center md:px-10 py-2 justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="w-[10rem] overflow-hidden">
          <img
            src="/svg/logo.svg"
            alt="logo"
            className="  w-full object-cover"
          />
        </Link>
      </div>
      <div className="md:flex hidden items-center gap-4">
        {navData.map((item) => (
          <Link key={item.name} href={item.href}>
            <p className="text-sm font-extrabold text-gray-200 hover:text-white transition-all duration-300 tracking-wider">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="md:flex hidden items-center gap-4">
        {AuthData.map((item) => (
          <Link className="cursor-pointer" key={item.name} href={item.href}>
            {item.name == "Login" ? (
              <Button
                variant="ghost"
                className="text-sm cursor-pointer rounded-2xl font-thin text-gray-200 hover:text-white transition-all duration-300 tracking-wide"
              >
                <p className="font-extrabold">{item.name}</p>
              </Button>
            ) : (
              <Button className="text-sm  bg-gradient cursor-pointer rounded-2xl  text-black/70 gradient-shadow  transition-all duration-300 tracking-wide">
                <p className="font-extrabold">{item.name}</p>
              </Button>
            )}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex items-center gap-4">
        <Button
          variant="ghost"
          className="text-sm rounded-2xl cursor-pointer font-thin text-gray-200 hover:text-white transition-all duration-300 tracking-wide"
        >
          <Menu size={30} />
        </Button>
      </div>
    </div>
  );
};

export default Nav;
