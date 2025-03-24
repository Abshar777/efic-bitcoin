"use client";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import {
  CircleDot,
  CircleDotDashed,
  MessageCircle,
  Wallet,
} from "lucide-react";
const RegistrationInEfic = () => {
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
      <div className="w-full  flex md:my-[5rem] my-[1rem] items-center justify-center">
        <div
          data-aos="fade-down-right"
          className="flex flex-col gap-5 md:w-3/4 w-full random-moveAnimation  bg-white/5 backdrop-blur-md  px-[2rem] py-[2rem]   rounded-2xl border-2 border-zinc-300/20"
        >
          <div className="flex w-full md:flex-row flex-col justify-between items-start">
            <h1 className="text-2xl  font-thin text-gray-200">
              Registration&nbsp;In&nbsp;
              <br />
              <span className="text-gradient">EFIC protocol</span>
            </h1>
            <div className="w-full md:justify-end justify-between flex items-center gap-3">
              <input
                type="text"
                placeholder="Search"
                className="bg-rose-500/5 border-2 w-[60%] border-zinc-300/20 rounded-xl px-2 py-1 text-sm text-gray-200"
              />
              <Button className="md:text-sm text-xs  bg-gradient cursor-pointer rounded-2xl  text-black/70 gradient-shadow  transition-all duration-300 tracking-wide">
                <p className="font-extrabold">Search</p>
              </Button>
            </div>
          </div>
          <div className="w-full md:p-3 p-2">
            <div className="w-full border-1 border-zinc-300/20 rounded-2xl p-3 justify-center lg:flex grid md:grid-cols-2 grid-cols-1 gap-2">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-2">
                  <step.icon
                    className={`w-4 h-4 ${
                      step.status === "success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  />
                  <p className="text-xs font-thin text-gray-200">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationInEfic;
