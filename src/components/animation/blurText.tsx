"use client";
import { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Record<string, string | number>;
  easing?: string;
  onAnimationComplete?: () => void;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 0.2,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOutCubic",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(/(\s+)/) : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const animatedCount = useRef(0);

  const defaultFrom = {
    filter: "blur(10px)",
    opacity: 0,
    y: direction === "top" ? -50 : 50,
  };

  const defaultTo = {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  };

  const variants: Variants = {
    hidden: animationFrom || defaultFrom,
    visible: animationTo || defaultTo,
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <h1 ref={ref} className={`blur-text ${className}`}>
      {elements.map((element, index) => {
        if (element === "\n") {
          return <br key={index} />; // Handle new lines properly
        }

        return (
          <motion.span
            key={index}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
              delay: index * delay,
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
            onAnimationComplete={() => {
              animatedCount.current += 1;
              if (
                animatedCount.current === elements.length &&
                onAnimationComplete
              ) {
                onAnimationComplete();
              }
            }}
          >
            {element === " " ? "\u00A0" : element} {/* Preserve spaces */}
          </motion.span>
        );
      })}
    </h1>
  );
};

export default BlurText;
