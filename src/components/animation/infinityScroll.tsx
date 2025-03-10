"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface InfiniteScrollProps {
  items: string[];
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const baseVelocity = -1;

  const directionFactor = useMotionValue(1);
  const mouseVelocity = useMotionValue(0);

  useEffect(() => {
    let timeoutId: number;

    const resetVelocity = () => {
      mouseVelocity.set(0);
      timeoutId = window.setTimeout(() => {
        directionFactor.set(1);
      }, 300);
    };

    resetVelocity();
    return () => clearTimeout(timeoutId);
  }, [mouseVelocity, directionFactor]);

  useEffect(() => {
    let animation: any;

    const startAnimation = () => {
      const controls = animate(x, -2000, {
        type: "tween",
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onComplete: () => {
          x.set(0);
          startAnimation();
        },
      });

      animation = controls;
    };

    if (!isDragging) {
      startAnimation();
    } else {
      animation?.stop();
    }

    return () => {
      animation?.stop();
    };
  }, [isDragging, x]);

  const handleWheel = (e: React.WheelEvent) => {
    if (containerRef.current) {
      const direction = e.deltaY > 0 ? 1 : -1;
      directionFactor.set(direction);
      mouseVelocity.set(Math.min(Math.abs(e.deltaY) * 0.5, 100));

      // Prevent page scroll
      e.preventDefault();
    }
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  const itemWidth = 240; // width + gap
  const totalWidth = items.length * itemWidth;

  const wrapperVariants = {
    initial: { x: 0 },
    animate: { x: -totalWidth },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-transparent py-12"
      onWheel={handleWheel}
    >
      <motion.div
        className="flex -mt-2 items-center gap-15 px-4"
        style={{ x }}
        // drag="x"
        // dragConstraints={{ left: -totalWidth, right: 0 }}
        // onDragStart={handleDragStart}
        // onDragEnd={handleDragEnd}
      >
        {[...Array(4)].map((_, groupIndex) =>
          items.map((item, index) => (
            <div
              key={`${groupIndex}-${index}`}
              className="flex items-center text-gray-500 justify-between w-full gap-10"
            >
              <motion.div
                className=""
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.div>
              <div className="rounded-full w-[1rem] h-[1rem] bg-gradient"></div>
            </div>
          ))
        )}
      </motion.div>

      {/* Gradient overlays for smooth edges */}
    </div>
  );
};
