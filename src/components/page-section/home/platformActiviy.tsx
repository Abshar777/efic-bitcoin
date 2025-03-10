"use client";

import { motion } from "framer-motion";
import { User, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

// Types for our activity data
type ActivityType = "join" | "transaction";

interface ActivityItem {
  id: string;
  type: ActivityType;
  userId: string;
  amount?: string;
  program?: string;
  timestamp: Date;
}

// Sample data to simulate real-time updates
const initialActivities: ActivityItem[] = [
  {
    id: "1",
    type: "join",
    userId: "1890100",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "2",
    type: "transaction",
    userId: "1890100",
    amount: "5 BUSD",
    program: "x4",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "3",
    type: "transaction",
    userId: "1890100",
    amount: "5 BUSD",
    program: "x4",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "4",
    type: "join",
    userId: "1890100",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "5",
    type: "transaction",
    userId: "1890100",
    amount: "5 BUSD",
    program: "x4",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "6",
    type: "transaction",
    userId: "1890100",
    amount: "5 BUSD",
    program: "x4",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "7",
    type: "join",
    userId: "1890100",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "8",
    type: "transaction",
    userId: "1890100",
    amount: "5 BUSD",
    program: "x4",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "9",
    type: "transaction",
    userId: "1890100",
    amount: "5 BUSD",
    program: "x4",
    timestamp: new Date(Date.now() - 60000),
  },
];

export default function PlatformActivity() {
  const [activities, setActivities] =
    useState<ActivityItem[]>(initialActivities);

  // Simulate new activities coming in
  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity: ActivityItem = {
        id: Math.random().toString(36).substring(2, 9),
        type: Math.random() > 0.5 ? "join" : "transaction",
        userId: "1890100",
        amount: Math.random() > 0.5 ? "5 BUSD" : "10 BUSD",
        program: "x4",
        timestamp: new Date(),
      };

      setActivities((prev) => {
        const updated = [newActivity, ...prev.slice(0, 8)];
        return updated;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-2"
      >
        <h2 data-aos="fade-up" data-aos-delay={100} className="text-2xl md:text-3xl tracking-wider text-center">
          Platform recent activity
        </h2>
        <p data-aos="fade-up" data-aos-delay={200} className="text-center text-sm md:text-base opacity-70 mt-1">
          Real-time global events of the FORSAGE Platform
        </p>
      </motion.div>

      <motion.div
      data-aos="fade-up"
      data-aos-delay={200}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="bg-white/5 w-full border border-zinc-300/20 backdrop-blur-sm rounded-2xl p-4 overflow-hidden"
      >
        {activities.map((activity, index) => (
          <ActivityRow
            key={activity.id}
            activity={activity}
            index={index}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </div>
  );
}

interface ActivityRowProps {
  activity: ActivityItem;
  index: number;
  variants: any;
}

function ActivityRow({ activity, index, variants }: ActivityRowProps) {
  // Format the timestamp to show "1 minute" or appropriate time
  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    if (seconds < 60) return "just now";
    if (seconds < 120) return "1 minute";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes`;

    return "1 minute"; // For the demo, we'll just show "1 minute" to match the design
  };

  return (
    <motion.div
        
      variants={variants}
      custom={index}
      className={`flex hover:bg-white/10 cursor-pointer hover:rounded-xl hover:px-2 transition-all duration-300  items-center justify-between py-3 ${
        index !== 0 ? "border-t border-zinc-300/20" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 p-[1px] flex items-center justify-center bg-gradient rounded-full">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-full h-full p-1  flex items-center justify-center bg-gradient-to-b from-[#384164] to-[#121027] rounded-full"
          >
            {activity.type === "join" ? (
              <User className="w-5 h-5" />
            ) : (
              <DollarSign className="w-5 h-5" />
            )}
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs md:text-base">
            {activity.type === "join"
              ? "New user"
              : `+${activity.amount}`}
          </span>

          {activity.type === "transaction" && (
            <span className="text-[0.6rem] md:text-xs text-gradient">{activity.program}</span>
          )}

          <div className="bg-white/5 md:block hidden px-2 py-0.5 rounded-md text-xs">
            ID {activity.userId}
          </div>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-[0.6rem] text-gray-400 flex items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v10l4.24 4.24" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        {getTimeAgo(activity.timestamp)}
      </motion.div>
    </motion.div>
  );
}
