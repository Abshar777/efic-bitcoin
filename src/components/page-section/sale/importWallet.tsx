"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImportWallet = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:p-10 md:p-5 md:gap-3 gap-10 p-4">
      <div className="galary w-full flex col-span-2  flex-col">
        <div className="car w-full flex justify-center gap-2 items-center">
          <div className="rounded-full  border-2 border-zinc-300/20 bg-background w-10 h-10 md:flex hidden justify-center gap-2 items-center ">
            <IoIosArrowBack />
          </div>
          <div className="w-full   h-full rounded-3xl ">
            <img
              src="https://s3-alpha-sig.figma.com/img/3f97/20cb/abbf4db68e6435d7e1e0769b92d1a28b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HAazBa23aY7edFxqcZzVDHa4Ec0lgs22Z9sSuCboG0B2tAV4vc-sNbM3GOVtXxIhsO9x9jtem-MKtJlgiQDmL6DBVawMl72oV0dy2QZ6TrKPLHNWVTkaHLTSwpKrb0QnnnMzQVjg2-34y3rqImnnVzy5m6eIabXFcDwcdKJ3t8Nb2bOEzoZxAY9Ce43lj~Mvmn3CpMDntkInsdkCKef0T6KU-f1MphEROsKJLQXKCy95iPWcf2jOlNJAwrpfJrf5EjqsQyYtGDfpt02ZESE28MNMpNdokxWMKvxRT1LVjkrHmhdh1QEvjEXChLXuwR3I3englZCAXLAnJF1KqoH3Yw__"
              alt="car"
              className="w-full h-full "
            />
          </div>
          <div className="rounded-full border-2 border-zinc-300/20 bg-background w-10 h-10 md:flex hidden justify-center gap-2 items-center ">
            <IoIosArrowForward />
          </div>
        </div>
        {/* <div className="grid gap-3 mt-4 grid-cols-4">
            {[1,2,3,4].map((item)=>(
                <div key={item} className="w-full bg-zinc-300/20 md:h-[8rem] h-[4rem] rounded-3xl">
                </div>
            ))  }
        </div> */}
      </div>
      <div className="flex justify-center w-full md:translate-x-0 translate-x-5 ">
        <div className="bg-white/5 p-7  backdrop-blur-md w-full flex flex-col  justify-between border-2 border-zinc-300/20 rounded-4xl ">
          <div className="flex flex-col gap-5 w-full ">
            <div className="flex justify-between w-full ">
              <div className="flex flex-col">
                <h1 className="text-sm text-gray-500">Total raised</h1>
                <h1 className="md:text-3xl text-xl ">$150,000</h1>
              </div>
              <img src="/svg/Logos.svg" />
            </div>
            <div className="w-full overflow-hidden bg-zinc-300/20 h-2 rounded-xl">
              <div className="w-[60%] rounded-xl h-full bg-gradient"></div>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="w-full flex border-b-2  p-2 border-zinc-300/20 justify-between">
                <p className="text-gay-500 md:text-sm text-xs"> Price per token</p>
                <p className="text-gay-500 md:text-sm text-xs"> $0.028</p>
              </div>
              <div className="w-full flex  p-2 border-zinc-300/20 justify-between">
                <p className="text-gay-500 md:text-sm text-xs"> ATH ROI</p>
                <p className="text-gay-500 md:text-sm text-xs"> TBA</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <Button className="text-sm  bg-gradient cursor-pointer rounded-xl  text-black/70 gradient-shadow  transition-all duration-300 tracking-wide">
              <h1 className=" uppercase">import wallet</h1>
            </Button>
            <p className="text-gray-500 font-extrabold text-xs md:block hidden md:text-nowrap">Successfully funded and closed on Mar 4, 2025.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportWallet;
