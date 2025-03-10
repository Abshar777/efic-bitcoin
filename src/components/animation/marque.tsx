import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }:any) => {
  return (
    <div className="flex MyGradient  opacity-50">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
      {images.map((image:any, index:any) => {
          return <img className="h-40 w-56 pr-20" src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image:any, index:any) => {
          return <img className="h-40 w-56 pr-20" src={image} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
