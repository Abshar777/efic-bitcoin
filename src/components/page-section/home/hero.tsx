import React from "react";

import { Button } from "@/components/ui/button";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people } from "@/data/heroData";
import { FlipWords } from "@/components/animation/flip-words";
import { motion } from "motion/react";
import { containerVaribles } from "@/constants/animation";
const Hero = () => {
    const words = ["Build anything today, on EFIC Protocol", "A unified blockchain for everyone, where ideas thrive and boundaries fade."]
  return (
    <div className="grid md:grid-cols-2 gridAnim grid-cols-1 md:h-[90vh]">
      <div className="md:flex hidden flex-col gap-4 w-full px-[2rem] items-center justify-center">
        <h1 className="text-4xl ">
          <FlipWords className="text-white" words={words} />
        </h1>
        <motion.p variants={containerVaribles} animate={containerVaribles.show} initial={containerVaribles.hidden} className="text-gray-400">
          A unified blockchain for everyone, where ideas thrive and boundaries
          fade.
        </motion.p>
        <div className="flex items-center justify-start w-full  gap-4">
          <Button className="bg-gradient cursor-pointer rounded-2xl  text-black/70 shadow-lg shadow-white/10  transition-all duration-300 tracking-wide">
            <p className="font-extrabold">Get Started</p>
          </Button>
          <h1 className="flex font-thin capitalize text-sm tracking-[-.2] items-center gap-2 text-gray-400">
            <i className="ri-video-on-fill  text-sm font-thin text-gradient"></i>
            go to school
          </h1>
        </div>
        <div className="flex justify-start flex-row items-center mt-2 mb-10 w-full">
          <AnimatedTooltip items={people} />
          <p className="text-gray-200 ml-8 font-extrabold  text-sm">
            4k+ <br />
            Active Users
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full md:h-full h-[50vh]  justify-center md:p-2">
        <img
          src="/svg/hero.svg"
          alt="hero"
          className="md:w-full h-full object-cover"
        />
      </div>
      <div className="flex md:hidden flex-col gap-4 w-full md:px-[2rem] px-2 items-center justify-center">
        <h1 className="text-xl font-thin">
          Build&nbsp;anything&nbsp;today, on EFIC Protocol
        </h1>
        <p className="text-gray-400 w-full break-words md:text-sm text-xs">
          A unified blockchain for everyone, where ideas thrive and boundaries
          fade.
        </p>
        <div className="flex items-center justify-start w-full  gap-4">
          <Button
            size={"sm"}
            className="bg-gradient md:scale-100 scale-90 cursor-pointer rounded-2xl  text-black/70 shadow-lg shadow-white/10  transition-all duration-300 tracking-wide"
          >
            <p className="font-extrabold text-sm md:text-xs">Get Started</p>
          </Button>
          <h1 className="flex font-thin capitalize md:text-sm text-xs tracking-[-.2] items-center gap-2 text-gray-400">
            <i className="ri-video-on-fill  text-sm font-thin text-gradient"></i>
            go&nbsp;to&nbsp;school
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
