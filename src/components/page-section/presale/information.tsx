"use client";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import {
  CircleDot,
  CircleDotDashed,
  Info,
  MessageCircle,
  Wallet,
} from "lucide-react";
const Information = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);
  const [upline, setUpline] = useState("");

  const steps = [
    {
      id: "wallet",
      label: "Wallet not detected",
      icon: Wallet,
      status: "error",
    },
    { id: "network", label: "Network", icon: CircleDot, status: "success" },
    {
      id: "registration",
      label: "Registration",
      icon: CircleDot,
      status: "success",
    },
    {
      id: "balance",
      label: "Balance",
      icon: CircleDotDashed,
      status: "pending",
    },
    {
      id: "approve",
      label: "Approve BUSD",
      icon: CircleDotDashed,
      status: "pending",
    },
  ];
  return (
    <>
      <div className="w-full random-moveAnimation2   flex md:my-[5rem] my-[1rem] items-center justify-center">
        <div
          data-aos="fade-down-left"
          className="flex flex-col gap-5 md:w-3/4 w-full random-moveAnimation  bg-white/5 backdrop-blur-md  px-[2rem] py-[2rem]   rounded-2xl border-2 border-zinc-300/20"
        >
          <div className="flex flex-col gap-2 justify-between items-start">
            <h1 className="text-2xl flex items-center gap-2 font-thin text-gray-200">
              <Info className="w-4 h-4 text-gray-200" /> Information <br />
            </h1>
            <p className="text-xs text-gray-200">wallet is not connected</p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <p className="text-md text-white">
              Access the website via cryptowallet dapp browser (”Discover”
              button in Tokenpoket) or with Metamask extension installed.
            </p>
            <p className="text-xs flex items-center gap-2 font-thin underline">
              <Info className="w-4 h-4 text-gray-200" /> Support Chat <br />
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
