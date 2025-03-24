"use client";
import { AuthData, navData } from "@/data/navData";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

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
            <p
              className={cn(
                "text-sm font-extrabold text-gray-200 hover:text-white transition-all duration-300 tracking-wider",
                pathname == item.href && "text-gradient"
              )}
            >
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
        <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <SheetTrigger>
            <div
              className={cn(
                "text-sm rounded-2xl cursor-pointer font-thin text-gray-200 hover:text-white transition-all duration-300 tracking-wide",
                buttonVariants({ variant: "ghost" })
              )}
            >
              <Menu size={30} />
            </div>
          </SheetTrigger>
          <SheetContent className="bg-background/20 rounded-xl backdrop-blur-lg">
            <div className="w-full h-full gridAnim">
              <SheetHeader className="border-b border-dashed ">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div>
                <div
                  onClick={handleOpen}
                  className="p-2 bg-zinc-900/10 border-b "
                >
                  <Link className="" href="/">
                    <span>Home</span>
                  </Link>
                </div>
                {navData.map((item, index) => (
                  <div
                    onClick={handleOpen}
                    key={index}
                    className="p-2 bg-zinc-900/10 border-b "
                  >
                    <Link className="" href={item.href}>
                      <span>{item.name}</span>
                    </Link>
                  </div>
                ))}
                {AuthData.map((item, index) => (
                  <div
                    onClick={handleOpen}
                    key={index + 10}
                    className="p-2 bg-zinc-900/10 border-b "
                  >
                    <Link className="" href={item.href}>
                      <span>{item.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Nav;
