"use client"
import React from "react";
import ImportWallet from "@/components/page-section/sale/importWallet";
import SaleList from "@/components/page-section/sale/saleList";
import TokenSale from "@/components/page-section/sale/tokenSale";
import BlurText from "@/components/animation/blurText";
import { containerVaribles } from "@/constants/animation";
import { motion } from "motion/react";
import HighLightTabs from "@/components/page-section/sale/highLightTabs";
const page = () => {
  return (
    <div className="gridAnim w-full">
      <div className="w-full py-10 px-4 flex-col flex justify-center items-center gap-3">
        <BlurText
          delay={0.05}
          animateBy="letters"
          direction="bottom"
          className="text-white text-nowrap md:text-4xl text-2xl capitalize"
          text={`EFIC PUBLIC SALE`}
        />
        <motion.p variants={containerVaribles} animate={containerVaribles.show} initial={containerVaribles.hidden} className="text-center text-sm text-gray-400">
          Content Agent Swarms. Autonomous Digital City of Filmmakers,
          <br />
          Actors and Producers
        </motion.p>
      </div>
      <ImportWallet />
      <SaleList />
      <TokenSale />
      <HighLightTabs />
    </div>
  );
};

export default page;
