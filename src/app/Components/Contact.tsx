"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("PROCESSING...");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      // 1️⃣ EMAIL (Web3Forms)
      const emailPromise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "77038047-ccb0-4677-bd80-c604727c1d28",
          name,
          email,
          message,
          subject: "New Portfolio Inquiry",
        }),
      });

      // 2️⃣ SAVE TO SANITY (via your API Route)
      const sanityPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      // Wait for both to complete
      const [emailRes, sanityRes] = await Promise.all([emailPromise, sanityPromise]);

      if (emailRes.ok && sanityRes.ok) {
        setStatus("SUCCESS! MESSAGE SENT & SAVED ✅");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("PARTIAL SUCCESS: CHECK CONSOLE ⚠️");
      }
    } catch (err) {
      console.error(err);
      setStatus("ERROR! SOMETHING WENT WRONG ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id='contact' className="min-h-screen bg-black text-white py-20 px-6 font-sans uppercase">
      <div className="max-w-7xl mx-auto border-t-2 border-white pt-10">
        
        {/* Top Header Section */}
        <div className="flex justify-end items-start mb-24">
        
          <div className="text-right">
             <p className="text-xs font-bold tracking-[0.3em]">AVAILABLE FOR</p>
             <p className="text-xs font-bold tracking-[0.3em]">FREELANCE WORK</p>
          </div>
        </div>

        {/* Hero Heading */}
        <div className="mb-32 relative">
          <h1 className="text-[12vw] font-black italic leading-[0.8] tracking-tighter">
            LET&apos;S <br />
            <span className="ml-[10vw] flex items-center gap-4">
              MAKE <span className="bg-white text-black px-6 py-2 not-italic text-[8vw] -rotate-2">HISTORY.</span>
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          {/* Social Sidebar */}
          <div className="md:col-span-4 space-y-16">
            <div className="space-y-4">
              <h3 className="text-xs font-black tracking-widest text-[#C0C0C0]">SOCIAL DIRECTORY</h3>
              <div className="flex flex-col gap-2 text-2xl font-black italic">
                <a href="#" className="hover:text-[#C0C0C0] transition-colors inline-block w-fit">INSTAGRAM</a>
                <a href="#" className="hover:text-[#C0C0C0] transition-colors inline-block w-fit">BEHANCE</a>
                <a href="#" className="hover:text-[#C0C0C0] transition-colors inline-block w-fit">DRIBBBLE</a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-black tracking-widest text-[#C0C0C0]">DIRECT INQUIRY</h3>
              <p className="text-xl font-black underline underline-offset-8 decoration-2 break-all italic">graphicwithali@gmail.com</p>
            </div>
          </div>

          {/* Combined Form Logic with Style */}
          <div className="md:col-span-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="space-y-2 border-b-2 border-white pb-4">
                <label className="text-[10px] font-black text-[#C0C0C0]">YOUR NAME</label>
                <input name="name" required placeholder="TYPE HERE" className="w-full bg-transparent text-2xl font-black outline-none placeholder:text-white/10 uppercase" />
              </div>
              
              <div className="space-y-2 border-b-2 border-white pb-4">
                <label className="text-[10px] font-black text-[#C0C0C0]">YOUR EMAIL</label>
                <input name="email" type="email" required placeholder="WHERE TO REPLY" className="w-full bg-transparent text-2xl font-black outline-none placeholder:text-white/10 uppercase" />
              </div>

              <div className="md:col-span-2 space-y-2 border-b-2 border-white pb-4">
                <label className="text-[10px] font-black text-[#C0C0C0]">THE PROJECT BRIEF</label>
                <textarea name="message" rows={1} required placeholder="DESCRIBE YOUR VISION" className="w-full bg-transparent text-2xl font-black outline-none placeholder:text-white/10 uppercase resize-none" />
              </div>

              <div className="md:col-span-2">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black py-8 text-4xl font-black italic hover:bg-[#C0C0C0] transition-all flex items-center justify-between px-10 active:scale-[0.98]"
                >
                  <span>{loading ? "SENDING..." : "START A PROJECT"}</span>
                  <span className="text-6xl leading-none">→</span>
                </button>
              </div>
              
              {status && (
                <div className="md:col-span-2 text-center font-black bg-white text-black py-4 tracking-tighter animate-pulse">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}