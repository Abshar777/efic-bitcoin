"use client";
import Nav from "@/components/global/nav";
import Hero from "@/components/page-section/home/hero";
import Quality from "@/components/global/Quality";
import LiveChat from "@/components/global/liveChat";
import NumbersDontLie from "@/components/page-section/home/numbersDontLie";
import { motion } from "motion/react";
import PlatformActivity from "@/components/page-section/home/platformActiviy";
import TrustedBy from "@/components/global/trustedBy";
import Footer from "@/components/global/footer";
import Copyright from "@/components/global/copyright";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="gridAnim  w-full ">
        <div className="w-[30rem] h-[30rem] bg-gradient rounded-full blur-3xl opacity-10 absolute top-10 hidden -right-[20%]"></div>
        {/* <div className="w-[30rem] h-[30rem] bg-gradient rounded-full blur-3xl opacity-5 absolute top-30 -left-50"></div> */}

        <Quality />
        <LiveChat />
        <NumbersDontLie />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex items-center justify-center"
        >
          <PlatformActivity />
        </motion.div>
      </div>
    </>
  );
}
