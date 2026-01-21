"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface DesignCardProps {
  title: string;
  icon: React.ReactElement;
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const DesignCard: React.FC<DesignCardProps> = ({ title, icon }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col w-full group cursor-pointer"
    >
      {/* Top Section */}
      <div className="bg-white h-24 sm:h-32 md:h-48 rounded-t-[25px] md:rounded-t-[50px] flex items-center justify-center p-4 md:p-8 border-x-2 border-t-2 border-black overflow-hidden">
        <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 flex items-center justify-center">
          {React.cloneElement(icon)}
        </div>
      </div>

      <div className="h-0.5 bg-black w-full"></div>

      {/* Bottom Section */}
      <div className="bg-white h-14 sm:h-16 md:h-24 rounded-b-[25px] md:rounded-b-[50px] flex items-center justify-center px-2 md:px-4 text-center border-x-2 border-b-2 border-black shadow-[0_4px_0_#000] md:shadow-[0_10px_0_#000]">
        <h3 className="text-black font-black uppercase text-[9px] sm:text-[11px] md:text-lg leading-[1.1] wrap-break-word">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default DesignCard;
