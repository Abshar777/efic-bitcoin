"use client";
import { motion } from "motion/react";
import React from "react";
// Token Sale           Contract Metrics          Vesting Schedule

const items = ["Token Sale", "Contract Metrics", "Vesting Schedule"];
const SaleList = () => {
  return (
  <div className="grid grid-cols-1 md:px-10 px-2 py-5 md:grid-cols-3 gap-5">
      <div className="w-full col-span-2  flex justify-center md:p-5">
      <div className="w-full flex justify-between items-center rounded-4xl p-4 bg-white/5 backdrop-blur-md border-2 border-zinc-300/20">
        {items.map((item, index) => (
          <div
            key={`${index}`}
            className="flex items-center md:text-sm text-xs text-gray-500 justify  gap-2"
          >
            <div className="rounded-full w-[1rem] h-[1rem] bg-gradient"></div>
            <motion.div
              className=" cursor-pointer"
              whileHover={{
                scale: 1.05,
                borderRadius: "10px",
                padding: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default SaleList;
