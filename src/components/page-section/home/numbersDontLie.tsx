"use client";
import React, { useState } from "react";
import { BiCoin } from "react-icons/bi";
import { CiClock1 } from "react-icons/ci";
import { HoverBorderGradient } from "@/components/animation/hover-border-gradient";
import { IoChatboxEllipses } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/animation/canvas-reveal-effect";

const NumbersDontLie = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="w-full flex flex-col mt-[3rem] items-center justify-center">
      <h1
        data-aos="fade-up"
        className="md:text-2xl text-sm md:w-[65%] mb-5 w-full text-center font-thin"
      >
        The numbers don't lie — EFIC chains lead the industry 
        <span className="text-gradient">
          thanks to the talented and passionate community.
        </span>
      </h1>
      <div className="grid lg:grid-cols-5 w-full mt-4 mb-[2rem] lg:px-[10rem] md:px-[5rem] md:grid-cols-2 grid-cols-2 gap-2">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={item}
            data-aos={
              index === 0 ? "fade-left" :
              index === 1 ? "fade-right" :
              index === 2 ? "fade-up" :
              index === 3 ? "fade-down" :
              "fade-left"
            }
            data-aos-delay={index * 100}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-full group cursor-pointer overflow-hidden h-[15rem] flex flex-col items-center justify-center gap-2 bg-white/5 border border-zinc-300/20 backdrop-blur-xl rounded-2xl"
          >
            <AnimatePresence>
              {true && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full group-hover:scale-105 transition-all duration-300 z-0 w-full absolute inset-0"
                >
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-transparent"
                    colors={[
                      [136, 72, 153],
                      [132, 121, 249],
                    ]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="rounded-full relative z-10 p-[2px] -mt-2 gradient-shadow w-[4rem] h-[4rem] bg-gradient">
              <div className="rounded-full flex items-center justify-center bg-gradient-to-b from-[#384164] to-[#121027] w-full h-full">
                <BiCoin className="text-white text-2xl font-extrabold" />
              </div>
            </div>
            <h1 className="text-white relative z-10 text-2xl">3.3M</h1>
            <p className="text-gray-400 relative z-10 text-sm -mt-2 font-extrabold">
              ETH saved
            </p>
            <p className="text-gray-400 relative z-10 text-xs flex items-center   -mt-2 font-extrabold">
              <CiClock1 className="text-white" />
              &nbsp;100%
            </p>
            <HoverBorderGradient
              containerClassName="rounded-full cursor-pointer scale-75"
              as="button"
              className="bg-background   text-xs text-white flex items-center space-x-2"
            >
              <IoChatboxEllipses />
              <span>Ask&nbsp;a&nbsp;question</span>
            </HoverBorderGradient>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumbersDontLie;
