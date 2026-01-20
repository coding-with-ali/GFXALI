
"use client";
import { motion } from 'framer-motion';
import { 
  ChevronRight, PenTool, Layout, Layers, Monitor, 
  Package, Image as ImageIcon 
} from 'lucide-react';
import DesignCard from '../Components/DesignCard';

export default function Home() {
  const contentItems = [
    { title: "Vector Illustration", icon: <PenTool /> },
    { title: "Social Media Poster", icon: <Layout /> },
    { title: "Logo & Branding", icon: <Layers /> },
    { title: "UI/UX Design", icon: <Monitor /> },
    { title: "Packaging Design", icon: <Package /> },
    { title: "Thumbnail Design", icon: <ImageIcon /> },
  ];

  // Grid container variant for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Har card 0.1s ke gap se aayega
      }
    }
  };

  return (
    <main id='table of content' className=" bg-black p-4 md:p-12 overflow-x-hidden font-sans border-[6px] md:border-[16px] border-theme-silver">
      
      {/* Header */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center mb-10 md:mb-20"
      >
        <span className="font-black text-white text-[10px] md:text-xl uppercase italic underline decoration-theme-silver decoration-4">
          Table Of Content
        </span>
        <button className="w-10 h-10 md:w-14 md:h-14 border-2 md:border-4 border-white rounded-full flex items-center justify-center shadow-[3px_3px_0_0_#C0C0C0]">
          <ChevronRight size={24} />
        </button>
      </motion.div>

      {/* Hero Title Section */}
      <div className="relative flex flex-col items-center justify-center mb-16 md:mb-32">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          className="absolute text-5xl sm:text-6xl md:text-[8rem] lg:text-[9rem] font-black uppercase tracking-tighter select-none whitespace-nowrap"
          style={{ WebkitTextStroke: '3px #C0C0C0', color: 'transparent' }}
        >
          Table Of Content.
        </motion.h2>
        
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="relative z-10 flex items-center gap-2 md:gap-8 text-3xl sm:text-5xl md:text-8xl font-black text-white uppercase italic"
        >
          <span>Table</span>
          <motion.div 
            className="bg-white text-black px-3 py-1 md:px-8 md:py-3 -rotate-6 transform shadow-lg md:shadow-[10px_10px_0_0_#C0C0C0] text-3xl sm:text-4xl md:text-7xl"
          >
            OF
          </motion.div>
          <span>Content<span className="text-theme-silver">.</span></span>
        </motion.div>
      </div>

      {/* Grid Fix with Staggered Animation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Animation sirf ek baar hogi jab screen par aaye
        className="max-w-6xl mx-auto mb-20 px-1 md:px-0"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-10 md:gap-x-12 md:gap-y-16">
          {contentItems.map((item, index) => (
            <DesignCard key={index} title={item.title} icon={item.icon} />
          ))}
        </div>
      </motion.div>

    </main>
  );
}