
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Sub-component for Education items (Isay main component se bahar rakha hai taake code saaf rahe)
function EduItem({ title, year, grade }: { title: string, year: string, grade: string }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-semibold leading-tight text-white">{title}</h3>
      <div className="flex gap-3">
        <span className="px-5 py-1.5 border border-white/30 rounded-full text-sm font-medium text-gray-300">{year}</span>
        <span className="px-5 py-1.5 border border-white/30 rounded-full text-sm font-medium text-gray-300">{grade}</span>
      </div>
    </div>
  );
}

export default function about() {
  return (
    <main id='about' className="bg-[#000000] overflow-x-hidden font-sans">
      
      {/* --- TOP SECTION (White/Gray Background) --- */}
      <section className="relative w-full h-[90vh] md:h-[23vh] lg:h-fit  bg-[#E5E5E5] pt-12 lg:pt-40 pb-32 lg:pb-8 ">
        <div className="container mx-auto px-6 lg:px-20 relative z-20 flex flex-col md:flex-row items-start justify-between">
          
          {/* Left Side: Typography */}
          <div className="mt-10 md:mt-20 md:px-10 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-black font-black text-5xl md:text-6xl lg:text-8xl leading-[0.8] tracking-tighter uppercase mb-2">
                MUHAMMAD <br /> ALI
              </h1>
              <p className="text-black/80 font-medium text-xl md:text-2xl lg:text-4xl tracking-[0.2em] uppercase italic ml-1">
                Graphic Designer
              </p>
            </motion.div>

            {/* Arrow Doodle */}
            <div className="absolute -bottom-40 left-32 hidden md:block opacity-80">
              <svg width="160" height="120" viewBox="0 0 160 120">
                <path d="M10,100 Q40,10 140,50" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
                <path d="M120,35 L145,45 L130,65" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
{/* Right Side: Tilted Profile Frame */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1, rotate: 6 }}
  transition={{ duration: 1 }}
  className="relative mt-32 md:mt-0" // Mt-32 zaroori hai taake head ooper jagah le sake
>
  {/* Swirl Doodle */}
  <div className="absolute -top-16 -right-12 z-30 rotate-12 scale-75 lg:scale-100">
    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="3">
      <path d="M20,40 C20,10 80,10 80,40 C80,70 20,70 20,100" />
    </svg>
  </div>

  {/* 1. OUTER CONTAINER (No overflow-hidden here!) */}
  <div className="relative">
    
    {/* 2. THE WHITE FRAME & BLACK BOX (Body is restricted here) */}
    <div className="bg-white p-3 md:p-4 shadow-[30px_30px_60px_rgba(0,0,0,0.2)] border border-gray-100 relative z-10">
      <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-100 lg:h-125 bg-[#000000] relative overflow-hidden">
        {/* Background color of box */}
      </div>
    </div>

    {/* 3. THE IMAGE (Placed outside the overflow-hidden box to overlap) */}
    <Image
      src="/about.png"
      alt="Muhammad Ali"
      height={1000}
      width={1000}
      priority
      className="absolute left-1/2 -translate-x-1/2 w-[85%] max-w-none h-auto z-20"
      style={{
        bottom: "17px", // Isay adjust karein taake body box ke bottom se match kare
        // Nichay wala mask body ko frame ke bottom border se bahar nikalne se rokega
        clipPath: "inset(-500px 0px 0px 0px)" 
      }}
    />
  </div>
</motion.div>
        </div>

        {/* --- ROUGH BRUSH EDGE DIVIDER --- */}
        <div className="absolute bottom-0 left-0 w-full h-37.5 md:h-37.5 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 320" className="absolute -bottom-0.5 w-full h-full fill-[#000000]" preserveAspectRatio="none">
            <path d="M0,160L40,144C80,128,160,96,240,112C320,128,400,192,480,213.3C560,235,640,213,720,181.3C800,150,880,107,960,106.7C1040,107,1120,149,1200,154.7C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
          </svg>
        </div>
      </section>

      {/* --- BOTTOM SECTION (Dark Background) --- */}
      <section className="bg-[#000000] pb-10 px-6 md:px-20 pt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Left Column: About & Skills */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl md:text-4xl italic text-gray-400 mb-6 uppercase font-bold">ABOUT ME</h2>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
                Hi, I&apos;m Ali, a creative Graphic Designer who loves turning ideas into clean, modern, and eye-catching visuals. 
                I specialize in brand identity, social media design, digital graphics and UI /UX design. 
                My goal is to create designs that look great and communicate clearly. Let&apos;s bring your vision to life!
              </p>
            </div>

           <div>
  <h2 className="text-3xl md:text-4xl italic text-gray-400 mb-8 uppercase font-bold tracking-tighter">
    Skills
  </h2>
  <div className="flex gap-6">
    {/* Photoshop - Official Sharp Blue */}
    <div className="w-16 h-16 bg-[#001D39] rounded-xl flex items-center justify-center border border-white/10 shadow-2xl group hover:scale-110 transition-all duration-300">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" 
        alt="Photoshop" 
        width="900"
        height="900"
        className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(49,168,255,0.5)]"
      />
    </div>

    {/* Illustrator - Official Sharp Orange */}
    <div className="w-16 h-16 bg-[#331C00] rounded-xl flex items-center justify-center border border-white/10 shadow-2xl group hover:scale-110 transition-all duration-300">
      <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" 
        alt="Illustrator" 
         width="900"
        height="900"
        className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(255,154,0,0.5)]"
      />
    </div>

    {/* Figma - Full Color Sharp */}
    <div className="w-16 h-16 bg-[#1A1A1A] rounded-xl flex items-center justify-center border border-white/10 shadow-2xl group hover:scale-110 transition-all duration-300">
      <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" 
        alt="Figma" 
         width="900"
        height="900"
        className="w-8 h-10 object-contain"
      />
    </div>

    {/* Canva - Gradient/Sharp Blue */}
    <div className="w-16 h-16 bg-[#00C4CC]/10 rounded-xl flex items-center justify-center border border-white/10 shadow-2xl group hover:scale-110 transition-all duration-300">
      <Image 
        src="https://www.vectorlogo.zone/logos/canva/canva-icon.svg" 
        alt="Canva" 
         width="900"
        height="900"
        className="w-10 h-10 object-contain brightness-110" 
      />
    </div>
  </div>
</div>
          </div>

          {/* Right Column: Education */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl italic text-gray-400 mb-10 uppercase font-bold">EDUCATION</h2>
            <div className="space-y-10">
              <EduItem title="Diploma of Associate Engineering in Computer Information Tech." year="2023-2025" grade="Grade - A" />
              <EduItem title="Governor Sindh Initiative for Artificial Intelligence, Web 3.0, and Metaverse" year="2024-2025" grade="Grade - A" />
              <EduItem title="UI/UX Design — Aptech." year="2025" grade="Certificate" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}