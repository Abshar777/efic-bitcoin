import { qualityData } from "@/data/qualityData";
import React from "react";
import { InfiniteScroll } from "../animation/infinityScroll";
import { motion } from "motion/react";
import { containerVaribles, itemVaribles, qualityVaribles } from "@/constants/animation";

function Quality() {
  return (
    <>
      <div className="w-full mt-4 md:h-[5rem] h-[3rem] overflow-hidden px-[2rem] flex flex-col items-center justify-center relative  mask-gradient rounded-xl bg-gradient-to-r  from-foreground/5 to-foreground/5">
        <InfiniteScroll items={qualityData} />
      </div>
      <motion.div 
        variants={qualityVaribles}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full text-center px-2 flex items-center justify-center py-10 text-gray-400"
      >
        <motion.p 
          variants={{
            hidden: { opacity: 0, x: -20 },
            show: {
              opacity: 1, 
              x: 0,
              transition: {
                type: "tween",
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4
              }
            }
          }}
          className="md:text-xl -mt-2 text-sm md:w-3/4 w-full font-extrabold"
        >
          Battle-tested security with industry-leading fraud proofs, trusted
          with over billions in user assets.
        </motion.p>
      </motion.div>
    </>
  );
}

export default Quality;
