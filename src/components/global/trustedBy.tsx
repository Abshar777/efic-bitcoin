import React from "react";
import MarqueeItem from "../animation/marque";
import { trustedByData, upperMarquee } from "@/data/trustedByData";

const TrustedBy = () => {
  return (
    <div className="w-screen overflow-hidden my-10 flex flex-col items-center justify-center">
      <h2 className="text-2xl uppercase  relative md:text-3xl tracking-wider text-center">
        Trusted By
      </h2>
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      {/* <MarqueeItem images={lowerMarquee} from={0} to={"-100%"} /> */}
    </div>
  );
};

export default TrustedBy;
