"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; 
import { urlFor } from '@/sanity/lib/image';

const categories = [
  { name: 'Social Media Poster', slug: 'poster' },
  { name: 'Vector Illustration', slug: 'vector' },
  { name: 'Logo & Branding', slug: 'branding' },
  { name: 'UI/UX Design', slug: 'uiux' },
  { name: 'Packaging Design', slug: 'packaging' },
  { name: 'Thumbnail Design', slug: 'thumbnail' },
];

export default function ProjectGallery() {
  // Default tab ab 'poster' hai
  const [activeTab, setActiveTab] = useState('poster');
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "project"] | order(_createdAt desc) { title, category, image, description }`;
      const data = await client.fetch(query);
      setProjects(data);
      // Initial filter for 'poster'
      setFiltered(data.filter((p: any) => p.category === 'poster'));
    };
    fetchData();
  }, []);

  useEffect(() => {
    setVisibleCount(9);
    setFiltered(projects.filter((p: any) => p.category === activeTab));
  }, [activeTab, projects]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Helper function for dynamic grid spans
  // 1. Grid spans ko mazeed refine kiya hai
const getGridSpan = (category: string) => {
  switch (category) {
    case 'branding':
    case 'uiux':
    case 'packaging':
      // Portrait (Lamba) - 2 columns wide out of 6
      return "md:col-span-2 md:row-span-2 md:w-[350px] h-[500px] md:h-[500px]"; 
    case 'thumbnail':
      // Landscape (Chora) - 3 columns wide out of 6 (Taake 2 thumbnails ek line mein aa saken)
      return "md:col-span-3 h-[250px] md:h-[300px]"; 
    default:
      // Regular (Square-ish) - 2 columns wide out of 6
      return "md:col-span-2 w-[300px] h-[300px] md:h-[350px] md:w-[350px]"; 
  }
};

// 2. Grid class ko change kiya hai (6 columns setup)
return (
  <section id='projects' className="bg-black py-20 px-4 min-h-screen">
    <div className="max-w-7xl mx-auto border-t-2 border-white pt-10"></div>
    <div className="max-w-7xl mx-auto">
      
      {/* TABS (Same as before) */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveTab(cat.slug)}
            className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all border-2 
              ${activeTab === cat.slug 
                ? 'bg-white text-black border-white -rotate-2' 
                : 'bg-transparent text-[#C0C0C0] border-[#C0C0C0] hover:border-white hover:text-white'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* DYNAMIC GRID - Switched to 6 columns for better math */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 grid-flow-dense"
      >
        <AnimatePresence mode='popLayout'>
          {filtered.slice(0, visibleCount).map((item: any, index: number) => (
            <motion.div
              layout
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`group relative bg-[#1A1A1A] border-4 border-[#C0C0C0] p-2 hover:border-white transition-all duration-500 overflow-hidden ${getGridSpan(item.category)}`}
            >
              <div className="relative w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                {item.image && (
                  <Image 
                    src={urlFor(item.image).url()} 
                    alt={item.title} 
                    fill 
                    className={`
                      transition-all duration-700
                      ${(item.category === 'branding' || item.category === 'uiux' || item.category === 'packaging')
                        ? 'object-fit p-2' 
                        : 'object-fit'} 
                      group-hover:scale-105
                    `}
                  />
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-6 transition-all duration-300">
                  <h3 className="text-white text-lg md:text-xl font-black uppercase text-center tracking-tighter">
                    {item.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-white mt-2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* LOAD MORE (Same as before) */}
      {filtered.length > visibleCount && (
        <div className="mt-16 flex justify-center">
          <button onClick={handleLoadMore} className="px-10 py-4 border-4 border-white text-white font-black uppercase hover:bg-white hover:text-black transition-all active:scale-95">
            Load More Work +
          </button>
        </div>
      )}
    </div>
  </section>
);
}