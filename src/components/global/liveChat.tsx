"use client"
import { lazy, Suspense, useEffect } from "react";
import { HoverBorderGradient } from "../animation/hover-border-gradient";
import { IoChatboxEllipses } from "react-icons/io5";
import Aos from "aos";
import  "aos/dist/aos.css";


const ChatAnimtion = lazy(() => import("@/components/lottie/chatLottie"));

const LiveChat = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);
  return (
    <>
    <div   className="w-full  flex md:my-[5rem] my-[1rem] items-center justify-center">
      <div  data-aos="fade-down-right"  className="md:w-1/2 w-full random-moveAnimation grid bg-white/5 backdrop-blur-md md:grid-cols-2 grid-cols-3 px-[2rem] py-[1rem]   rounded-2xl border-2 border-zinc-300/20">
        <div className="flex md:col-span-1 col-span-2 flex-col items-start justify-between gap-2">
          <h1 className="text-md font-thin text-gray-200">Live Chat</h1>
          <p className="md:text-xs text-[.7rem]  font-extrabold text-gray-400">
            Platform where you can ask a question to experienced participants
          </p>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-background  md:text-sm text-xs text-white flex items-center space-x-2"
          >
            <IoChatboxEllipses />
            <span>Ask&nbsp;a&nbsp;question</span>
          </HoverBorderGradient>
        </div>
        <div className="w-full flex justify-end">
        <Suspense fallback={<div className=""></div>}>
          <ChatAnimtion />
        </Suspense>
        </div>
      </div>
    </div>
    </>
  );
};

export default LiveChat;
