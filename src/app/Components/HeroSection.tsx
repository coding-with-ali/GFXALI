"use client";

import {
  MousePointer2,
  PenTool,
  Type,
  Square,
  Circle,
  Brush,
  Hand,
  ZoomIn,
  SlidersHorizontal,
  Layers,
  Eye,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Inter, Dancing_Script } from "next/font/google";

// Configure fonts
const inter = Inter({ subsets: ["latin"], weight: ["900"] });
const scriptFont = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export default function HeroLanding() {
  const [, setCursor] = useState({ x: 0, y: 0 });
  const [zoom] = useState(100); // Zoom is static in this version
  const [fillColor, setFillColor] = useState("#c0c0c0");
  const [strokeColor, setStrokeColor] = useState("#ffff");
  const [forwardFill, setForwardFill] = useState(true);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleMouseMove = (e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  // Shared Artboard Content Component
  const ArtboardContent = ({ isMobile = false }) => (
    <>
      {/* Top Right Badge */}
      {!isMobile && (
        <div className="absolute top-[8%] right-[8%]">
          <div className="bg-[#ffff] text-black px-3 py-1 text-xl font-bold tracking-tight shadow-md">
            #25
          </div>
        </div>
      )}

      {/* Pen Tool Path */}
      <div
        className={`absolute ${isMobile ? "top-[20%] left-[5%] w-[50%] h-[15%]" : "top-[12%] left-[22%] w-[20%] h-[15%]"} pointer-events-none`}
      >
        <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
          <path
            d="M0,80 Q50,20 100,80 T200,60"
            fill="none"
            stroke="#c0c0c0"
            strokeWidth="1.5"
            strokeDasharray="4,3"
          />
          <rect
            x="-3"
            y="77"
            width="6"
            height="6"
            fill="white"
            stroke="#c0c0c0"
          />
          <rect
            x="47"
            y="47"
            width="6"
            height="6"
            fill="white"
            stroke="#c0c0c0"
          />
          <rect
            x="97"
            y="77"
            width="6"
            height="6"
            fill="white"
            stroke="#c0c0c0"
          />
          <rect
            x="147"
            y="67"
            width="6"
            height="6"
            fill="white"
            stroke="#c0c0c0"
          />
          <foreignObject x="190" y="40" width="40" height="40">
            <PenTool className="text-white transform -rotate-90" size={32} />
          </foreignObject>
        </svg>
      </div>

      {/* Main Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <h1
            className={`${inter.className} ${isMobile ? "text-[20vw]" : "text-[13vw] sm:text-[130px] md:text-[160px] lg:text-[13cqw]"} leading-none text-white z-10`}
          >
            port<span className="invisible">f</span>
            <span className="invisible">f</span>olio
          </h1>
          <h1
            className={`${scriptFont.className} absolute top-1/2 left-[52%] -translate-x-1/2 -translate-y-[45%] ${isMobile ? "text-[45vw]" : "text-[16vw] sm:text-[160px] md:text-[200px] lg:text-[350px]"} text-[#c0c0c0] opacity-90 z-20 pointer-events-none`}
          >
            f
          </h1>

          {/* Selection Boxes */}
          <div
            className={`absolute ${isMobile ? "left-[2%] top-[47%] h-[10%] w-[14%]" : "-left-[5%] top-[10%] h-[90%] w-[16%]"} border border-[#c0c0c0]/50 z-30 opacity-60`}
          >
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#c0c0c0]"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#c0c0c0]"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#c0c0c0]"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#c0c0c0]"></div>
            <div className="absolute -bottom-10 -right-5 transform -rotate-12 drop-shadow-md">
              <MousePointer2 className="text-white" size={36} />
            </div>
          </div>

          <div
            className={`absolute ${isMobile ? "right-[2%] top-[45%] h-[10%] w-[40%]" : "-right-[4%] top-[15%] h-[75%] w-[45%]"} border border-[#c0c0c0]/50 z-30`}
          >
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#c0c0c0]"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#c0c0c0]"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#c0c0c0]"></div>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div
        className={`absolute ${isMobile ? "bottom-[20%] left-[5%]" : "bottom-[10%] left-[30%]"} flex gap-1 p-1 shadow-sm`}
      >
        <div className="w-6 h-6 bg-white"></div>
        <div className="w-6 h-6 bg-[#2b2b2b]"></div>
        <div className="w-6 h-6 bg-[#c0c0c0]"></div>
      </div>

      {/* Bottom Right Tag */}
      <div
        className={`absolute ${isMobile ? "bottom-[17%] right-[5%]" : "bottom-[10%] right-[20%]"} border border-[#c0c0c0]/60 p-2 z-30`}
      >
        <h3 className="text-[#c0c0c0] font-bold text-[5vw] sm:text-[24px] leading-tight">
          Graphic
          <br />
          Designer
        </h3>
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white border border-[#c0c0c0] transform -translate-y-1/2"></div>
        <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white border border-[#c0c0c0] transform -translate-x-1/2"></div>
      </div>

      {/* Signature */}
      {isMobile ? (
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-center">
          <span className="font-bold text-white text-[5vw] sm:text-[30px]">
            Hi! I&apos;m Muhammad Ali
          </span>
        </div>
      ) : (
        <div className="absolute bottom-[12%] right-[5%]">
          <span className="font-black text-[#ffff] text-[1.5vw] md:text-[14px]">
            MUHAMMAD ALI
          </span>
        </div>
      )}
    </>
  );

  return (
    <>
      {/* Mobile Section */}
      <section className="lg:hidden w-screen h-fit bg-black overflow-hidden relative flex flex-col font-sans">
        {/* Top Menu Bar - Mobile */}
        <div className="flex justify-center items-center h-16 bg-black border-b border-white text-white px-4 text-sm md:text-xl md:gap-5 font-semibold select-none shadow-sm">
          {["Home", "Table Of Content", "About", "Project", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-2 py-1 rounded cursor-pointer hover:text-[#c0c0c0] transition-colors"
              >
                {item}
              </a>
            ),
          )}
        </div>

        {/* Main Workspace */}
        <div className="flex w-full flex-1 overflow-hidden">
          <div
            className="flex-1 relative bg-black flex items-center justify-center"
            onMouseMove={handleMouseMove}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[90vh] bg-black shadow-lg overflow-hidden"
            >
              <ArtboardContent isMobile />
            </motion.div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="absolute bottom-0 w-full h-6 bg-black flex items-center justify-between px-4 text-[10px] md:text-xs text-[#c0c0c0] select-none z-50">
          <div className="flex gap-4">
            <span>Zoom: {zoom}%</span>
            <span>Artboard 1</span>
          </div>
          <div className="flex gap-4">
            <span>Smart Guides: On</span>
            <span>Selection Tool (V)</span>
          </div>
        </div>
      </section>

      {/* Desktop Section */}
      <section className="hidden w-full h-screen bg-black overflow-hidden relative lg:flex flex-col font-sans">
        {/* Top Menu Bar - Desktop */}
        <div className="h-11 bg-black text-white border-b border-[#d1d1d1] items-center px-4 text-xs select-none shadow-sm z-50 flex">
          <div className="bg-[#300c0c] text-[#d27809] px-1.5 py-1 rounded font-bold mr-4 text-[10px]">
            Ai
          </div>
          <div className="flex gap-4">
            {["Home", "Table Of Content", "About", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-2 py-1 rounded cursor-pointer hover:bg-white/10 transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
          {/* Rest of the right side... */}
          <div className="ml-auto flex items-center gap-4 font-medium">
            <span>Essentials Classic</span>
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Properties Strip */}
        <div className="h-10 bg-[#00000] px-4 items-center text-xs gap-6 text-white select-none z-40 flex">
          <span className="font-semibold">Selection</span>
          <div className="h-4 w-px bg-gray-400"></div>
          <span>X: 960 px</span>
          <span>Y: 540 px</span>
          <span>W: 1920 px</span>
          <span>H: 1080 px</span>
          <div className="h-4 w-px bg-gray-400"></div>
          <span>Opacity: 100%</span>
          <span>Style: None</span>
        </div>

        {/* Main Workspace */}
        <div className="flex w-full flex-1 overflow-hidden">
          {/* Left Toolbar */}
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="w-12 bg-[#00000] flex-col items-center py-2 gap-1 z-40 shadow-inner flex"
          >
            {[
              MousePointer2,
              PenTool,
              Type,
              Square,
              Circle,
              Brush,
              Hand,
              ZoomIn,
            ].map((Icon, i) => (
              <div
                key={i}
                className={`p-1.5 rounded hover:bg-gray-200 cursor-pointer ${i === 0 ? "bg-gray-300 text-black" : "text-white"}`}
              >
                <Icon size={18} strokeWidth={1.5} />
              </div>
            ))}
            <div className="relative mt-4 w-10 h-10 cursor-pointer">
              <div
                className="absolute top-1 left-1 w-8 h-8 border-2 border-black"
                style={{
                  backgroundColor: !forwardFill ? fillColor : strokeColor,
                }}
                onClick={() => setForwardFill(false)}
              ></div>
              <div
                className="absolute top-0 left-0 w-8 h-8 border border-black"
                style={{
                  backgroundColor: forwardFill ? fillColor : strokeColor,
                }}
                onClick={() => setForwardFill(true)}
                onDoubleClick={() => setShowColorPicker(!showColorPicker)}
              ></div>
              {showColorPicker && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-12 left-0 w-36 bg-white border shadow-lg p-3 rounded z-50"
                >
                  <input
                    type="color"
                    className="w-full h-6 cursor-pointer"
                    value={forwardFill ? fillColor : strokeColor}
                    onChange={(e) => {
                      if (forwardFill) setFillColor(e.target.value);
                      else setStrokeColor(e.target.value);
                    }}
                  />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Center Canvas */}
          <div className="flex-1 flex items-center justify-center bg-white overflow-hidden p-4 md:p-8 lg:p-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="
  relative
  bg-black
  shadow-[0_0_50px_rgba(0,0,0,0.5)]
  overflow-hidden

  w-full
  max-w-[1100px]        /* default for 1280 */
  md:max-w-[1300px]     /* for 1366 / 1440 */
  lg:max-w-[1500px]     /* for 1600 / 1920 */
  xl:max-w-[1700px]     /* ultra-wide */
  aspect-video
"
            >
              <ArtboardContent />
            </motion.div>
          </div>

          {/* Right Properties Panel */}
          <div className="w-72 bg-[#00000] p-4 text-xs font-medium text-[#c0c0c0]">
            <div className="flex items-center gap-2 mb-4 text-sm font-bold">
              <SlidersHorizontal size={16} /> Properties
            </div>
            <div className="space-y-4">
              <div className="bg-[#00000] p-3 rounded shadow-sm">
                <div className="mb-2 font-bold">Transform</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex justify-between">
                    <span>X</span> <span>960</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Y</span> <span>540</span>
                  </div>
                  <div className="flex justify-between">
                    <span>W</span> <span>100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>H</span> <span>100%</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#00000] p-3 rounded shadow-sm">
                <div className="mb-2 font-bold">Appearance</div>
                <div className="flex justify-between items-center mb-1">
                  <span>Fill</span>
                  <div className="w-4 h-4 bg-[#c0c0c0] border border-gray-400 rounded-sm"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Stroke</span>
                  <div className="w-4 h-4 border border-gray-400 rounded-sm bg-black relative overflow-hidden">
                    <div className="absolute inset-0 border-t border-red-500 rotate-45 transform origin-center"></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#00000] p-3 rounded shadow-sm">
                <div className="mb-2 font-bold">Align</div>
                <div className="flex justify-between px-2">
                  <AlignLeft
                    size={16}
                    className="cursor-pointer hover:text-black"
                  />
                  <AlignCenter
                    size={16}
                    className="cursor-pointer hover:text-black"
                  />
                  <AlignRight
                    size={16}
                    className="cursor-pointer hover:text-black"
                  />
                </div>
              </div>
              <div className="bg-[#00000] p-3 rounded shadow-sm">
                <div className="mb-2 font-bold flex gap-2">
                  <Layers size={14} /> Layers
                </div>
                <div className="space-y-1">
                  {["Overlay Script", "Main Text", "Guides", "Background"].map(
                    (layer, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center bg-[#00000] p-1 px-2 border border-gray-100"
                      >
                        <span>{layer}</span>
                        <Eye size={12} />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="absolute bottom-0 w-full h-6 bg-black flex items-center justify-between px-4 text-[10px] md:text-xs text-[#c0c0c0] select-none z-50">
          <div className="flex gap-4">
            <span>Zoom: {zoom}%</span>
            <span>Artboard 1</span>
          </div>
          <div className="flex gap-4">
            <span>Smart Guides: On</span>
            <span>Selection Tool (V)</span>
          </div>
        </div>
      </section>
    </>
  );
}
