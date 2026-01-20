"use client";
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 md:px-12 py-10 font-sans uppercase">
      {/* Divider Line */}
      <div className="w-full h-px bg-white/20 mb-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand/Name */}
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" /> 
          <p className="text-sm font-black tracking-widest">
            Muhammad Ali <span className="text-white/40 ml-2">© {currentYear}</span>
          </p>
        </div>

     
        {/* Right Side: Back to Top Style */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[10px] font-black tracking-[0.3em] flex items-center gap-2 group"
        >
          BACK TO TOP 
          <span className="group-hover:-translate-y-2 transition-transform duration-300 font-black">↑</span>
        </button>

      </div>
    
    </footer>
  );
}