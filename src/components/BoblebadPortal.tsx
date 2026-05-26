// src/components/BoblebadPortal.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BoblebadPortal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#ffffff]" />;

  // Common styling for the minimal social media link bars
  const linkItemStyle = "group flex items-center justify-between w-full max-w-md py-3.5 border-b border-slate-900/10 hover:border-slate-900 text-slate-800 hover:text-slate-900 transition-all duration-200 cursor-pointer text-left";

  return (
    <div className="h-screen w-screen relative overflow-hidden dynamic-bg flex items-center select-none">
      
      {/* 📏 LEFT SIDE LAYOUT LINES */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-900/[0.04] pointer-events-none z-20" />
      <div className="absolute left-12 top-0 bottom-0 w-px bg-slate-900/[0.02] pointer-events-none z-20" />
      <div className="absolute left-20 top-0 bottom-0 w-px bg-slate-900/[0.01] pointer-events-none z-20" />

      {/* 🫧 HIGH-DENSITY IMMERSION BUBBLE MATRIX (Z-INDEX 12) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-12">
        {/* Left Segment Loops (0% - 25%) */}
        <div className="bg-bubble w-12 h-12 left-[1%] bg-gradient-to-tr from-pink-300/25 via-transparent to-transparent" style={{ animationDuration: '11s', animationDelay: '0s' }} />
        <div className="bg-bubble w-20 h-20 left-[3%] bg-gradient-to-tr from-cyan-300/30 via-transparent to-transparent" style={{ animationDuration: '15s', animationDelay: '3s' }} />
        <div className="bg-bubble w-8 h-8 left-[5%] bg-gradient-to-tr from-purple-300/20 via-transparent to-transparent" style={{ animationDuration: '9s', animationDelay: '1.5s' }} />
        <div className="bg-bubble w-24 h-24 left-[8%] bg-gradient-to-tr from-amber-300/25 via-transparent to-transparent" style={{ animationDuration: '18s', animationDelay: '5s' }} />
        <div className="bg-bubble w-14 h-14 left-[11%] bg-gradient-to-tr from-emerald-300/20 via-transparent to-transparent" style={{ animationDuration: '13s', animationDelay: '0.8s' }} />
        <div className="bg-bubble w-18 h-18 left-[14%] bg-gradient-to-tr from-pink-300/25 via-transparent to-transparent" style={{ animationDuration: '14s', animationDelay: '4.2s' }} />
        <div className="bg-bubble w-10 h-10 left-[17%] bg-gradient-to-tr from-cyan-300/30 via-transparent to-transparent" style={{ animationDuration: '10s', animationDelay: '2.5s' }} />
        <div className="bg-bubble w-26 h-26 left-[20%] bg-gradient-to-tr from-purple-300/20 via-transparent to-transparent" style={{ animationDuration: '19s', animationDelay: '6.2s' }} />
        <div className="bg-bubble w-15 h-15 left-[23%] bg-gradient-to-tr from-amber-300/25 via-transparent to-transparent" style={{ animationDuration: '12s', animationDelay: '1.1s' }} />

        {/* Mid-Left Segment Loops (25% - 50%) */}
        <div className="bg-bubble w-22 h-22 left-[26%] bg-gradient-to-tr from-emerald-300/20 via-transparent to-transparent" style={{ animationDuration: '16s', animationDelay: '7.5s' }} />
        <div className="bg-bubble w-7 h-7 left-[29%] bg-gradient-to-tr from-pink-300/25 via-transparent to-transparent" style={{ animationDuration: '8s', animationDelay: '0.3s' }} />
        <div className="bg-bubble w-28 h-28 left-[32%] bg-gradient-to-tr from-cyan-300/30 via-transparent to-transparent" style={{ animationDuration: '21s', animationDelay: '3.8s' }} />
        <div className="bg-bubble w-12 h-12 left-[35%] bg-gradient-to-tr from-purple-300/20 via-transparent to-transparent" style={{ animationDuration: '11s', animationDelay: '2.2s' }} />
        <div className="bg-bubble w-19 h-19 left-[38%] bg-gradient-to-tr from-amber-300/25 via-transparent to-transparent" style={{ animationDuration: '14s', animationDelay: '5.7s' }} />
        <div className="bg-bubble w-32 h-32 left-[41%] bg-gradient-to-tr from-emerald-300/25 via-transparent to-transparent" style={{ animationDuration: '25s', animationDelay: '9s' }} />
        <div className="bg-bubble w-9 h-9 left-[44%] bg-gradient-to-tr from-pink-300/20 via-transparent to-transparent" style={{ animationDuration: '10s', animationDelay: '1.4s' }} />
        <div className="bg-bubble w-21 h-21 left-[47%] bg-gradient-to-tr from-cyan-300/25 via-transparent to-transparent" style={{ animationDuration: '15s', animationDelay: '4.8s' }} />

        {/* Mid-Right Segment Loops (50% - 75%) */}
        <div className="bg-bubble w-14 h-14 left-[50%] bg-gradient-to-tr from-purple-300/30 via-transparent to-transparent" style={{ animationDuration: '13s', animationDelay: '8.1s' }} />
        <div className="bg-bubble w-30 h-30 left-[53%] bg-gradient-to-tr from-amber-300/20 via-transparent to-transparent" style={{ animationDuration: '23s', animationDelay: '0.5s' }} />
        <div className="bg-bubble w-11 h-11 left-[56%] bg-gradient-to-tr from-emerald-300/25 via-transparent to-transparent" style={{ animationDuration: '10s', animationDelay: '5.2s' }} />
        <div className="bg-bubble w-25 h-25 left-[59%] bg-gradient-to-tr from-pink-300/25 via-transparent to-transparent" style={{ animationDuration: '17s', animationDelay: '2.7s' }} />
        <div className="bg-bubble w-8 h-8 left-[62%] bg-gradient-to-tr from-cyan-300/20 via-transparent to-transparent" style={{ animationDuration: '9s', animationDelay: '10.2s' }} />
        <div className="bg-bubble w-23 h-23 left-[65%] bg-gradient-to-tr from-purple-300/25 via-transparent to-transparent" style={{ animationDuration: '16s', animationDelay: '6.9s' }} />
        <div className="bg-bubble w-16 h-16 left-[68%] bg-gradient-to-tr from-amber-300/30 via-transparent to-transparent" style={{ animationDuration: '14s', animationDelay: '4.5s' }} />
        <div className="bg-bubble w-27 h-27 left-[71%] bg-gradient-to-tr from-emerald-300/20 via-transparent to-transparent" style={{ animationDuration: '20s', animationDelay: '1.1s' }} />
        <div className="bg-bubble w-10 h-10 left-[74%] bg-gradient-to-tr from-pink-300/25 via-transparent to-transparent" style={{ animationDuration: '11s', animationDelay: '3.3s' }} />

        {/* Right Segment Loops (75% - 100%) */}
        <div className="bg-bubble w-20 h-20 left-[77%] bg-gradient-to-tr from-cyan-300/25 via-transparent to-transparent" style={{ animationDuration: '15s', animationDelay: '5.8s' }} />
        <div className="bg-bubble w-13 h-13 left-[80%] bg-gradient-to-tr from-purple-300/20 via-transparent to-transparent" style={{ animationDuration: '12s', animationDelay: '0.4s' }} />
        <div className="bg-bubble w-29 h-29 left-[83%] bg-gradient-to-tr from-amber-300/30 via-transparent to-transparent" style={{ animationDuration: '22s', animationDelay: '7.1s' }} />
        <div className="bg-bubble w-7 h-7 left-[85%] bg-gradient-to-tr from-emerald-300/25 via-transparent to-transparent" style={{ animationDuration: '8s', animationDelay: '2.2s' }} />
        <div className="bg-bubble w-18 h-18 left-[87%] bg-gradient-to-tr from-pink-300/25 via-transparent to-transparent" style={{ animationDuration: '13s', animationDelay: '0.5s' }} />
        <div className="bg-bubble w-32 h-32 left-[89%] bg-gradient-to-tr from-cyan-300/20 via-transparent to-transparent" style={{ animationDuration: '26s', animationDelay: '11s' }} />
        <div className="bg-bubble w-12 h-12 left-[91%] bg-gradient-to-tr from-purple-300/25 via-transparent to-transparent" style={{ animationDuration: '11s', animationDelay: '3.9s' }} />
        <div className="bg-bubble w-24 h-24 left-[93%] bg-gradient-to-tr from-amber-300/30 via-transparent to-transparent" style={{ animationDuration: '18s', animationDelay: '1.8s' }} />
        <div className="bg-bubble w-9 h-9 left-[95%] bg-gradient-to-tr from-emerald-300/20 via-transparent to-transparent" style={{ animationDuration: '10s', animationDelay: '5.5s' }} />
        <div className="bg-bubble w-21 h-21 left-[97%] bg-gradient-to-tr from-pink-300/25 via-transparent to-transparent" style={{ animationDuration: '15s', animationDelay: '8.2s' }} />
        <div className="bg-bubble w-14 h-14 left-[99%] bg-gradient-to-tr from-cyan-300/20 via-transparent to-transparent" style={{ animationDuration: '13s', animationDelay: '0.1s' }} />
      </div>

      {/* CORE WORKSPACE FRAMING GRID */}
      <div className="max-w-7xl w-full mx-auto px-12 md:px-24 grid grid-cols-1 lg:grid-cols-12 items-center relative z-20 h-full">
        
        {/* LEFT COMPONENT COLUMN MATRIX */}
        <div className="lg:col-span-7 space-y-10 pl-4 py-12">
          
          {/* Header Branding Profile */}
          <div className="space-y-4">
            {/* 🆕 BRAND LOGO REPLACEMENT CONTAINER */}
            <div className="w-full max-w-sm md:max-w-md pb-2 select-none">
              <Image 
                src="/boblebad-logo.png" 
                alt="Boblebad" 
                width={500} 
                height={150} 
                priority
                className="w-full h-auto object-contain"
              />
            </div>
            
            <p className="max-w-lg text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Multi-instrumentalist, producer and DJ based out of Oslo, Norway. Crafting sun-drenched Balearic textures, subaquatic micro-house, and premium contemporary disco.
            </p>
          </div>

          {/* 🔗 SOCIAL PORTAL LINKS MATRIX */}
          <div className="flex flex-col space-y-1 max-w-md">
            
            {/* 🟢 SPOTIFY HUB */}
            <a 
              href="https://open.spotify.com/artist/6PiZkOHul8gEBrwWL1Koum?si=OsayUxCTSaK16x5BgT3iow&utm_medium=share&utm_source=linktree&nd=1&dlsi=ada6075fc63b4365" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={linkItemStyle}
            >
              <div className="flex items-center space-x-4">
                <svg className="w-5 h-5 fill-current shrink-0 text-[#1DB954] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.306c-.22.359-.69.475-1.047.254-2.88-1.764-6.506-2.164-10.777-1.188-.41.094-.823-.163-.917-.573-.094-.41.163-.823.573-.917 4.675-1.069 8.675-.615 11.91 1.365.356.218.473.685.258 1.059zm1.47-3.262c-.277.449-.865.597-1.314.32-3.297-2.028-8.322-2.616-12.217-1.433-.505.153-1.037-.134-1.19-.64-.154-.506.134-1.038.64-1.19 4.457-1.353 10.002-.701 13.794 1.63.45.277.599.865.327 1.313zm.126-3.413C14.652 7.992 7.34 7.75 3.12 9.031a1.144 1.144 0 0 1-1.354-.852 1.144 1.144 0 0 1 .853-1.354c4.869-1.477 12.928-1.195 18 1.917a1.144 1.144 0 0 1-.588 2.15 1.129 1.129 0 0 1-.945-.226z"/>
                </svg>
                <span className="font-mono text-xs uppercase font-bold tracking-wider">Spotify</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 group-hover:translate-x-1 transition-transform">// OPEN</span>
            </a>

            {/* 💸 BANDCAMP MODULE */}
            <a 
              href="https://boblebad.bandcamp.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={linkItemStyle}
            >
              <div className="flex items-center space-x-4">
                <svg className="w-5 h-5 fill-current shrink-0 text-[#1da0c3] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M0 21h15.547L24 3H8.453L0 21z"/>
                </svg>
                <span className="font-mono text-xs uppercase font-bold tracking-wider">Bandcamp</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 group-hover:translate-x-1 transition-transform">// BUY</span>
            </a>

            {/* 📸 INSTAGRAM ENTRY */}
            <a 
              href="https://www.instagram.com/boblebad1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={linkItemStyle}
            >
              <div className="flex items-center space-x-4">
                <svg className="w-5 h-5 stroke-current fill-none shrink-0 text-[#E1306C] group-hover:scale-110 transition-transform" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
                </svg>
                <span className="font-mono text-xs uppercase font-bold tracking-wider">Instagram</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 group-hover:translate-x-1 transition-transform">// FOLLOW</span>
            </a>

            {/* ☁️ SOUNDCLOUD ARCHIVE (SHARP STABLE RECONSTRUCTION) */}
            <a 
              href="https://soundcloud.com/boblebad1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={linkItemStyle}
            >
              <div className="flex items-center space-x-4">
                <svg className="w-5 h-5 fill-current shrink-0 text-[#FF5500] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 4.5c-2.545 0-4.64 1.632-5.285 3.908C6.482 8.37 6.244 8.35 6 8.35c-2.21 0-4 1.79-4 4s1.79 4 4 4h12c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5c-.399 0-.787.176-1.126.475C17.36 6.64 14.917 4.5 12 4.5z"/>
                </svg>
                <span className="font-mono text-xs uppercase font-bold tracking-wider">SoundCloud</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 group-hover:translate-x-1 transition-transform">// LISTEN</span>
            </a>

            {/* 📺 YOUTUBE VIDEO CHANNEL */}
            <a 
              href="https://www.youtube.com/@boblebad9058" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={linkItemStyle}
            >
              <div className="flex items-center space-x-4">
                <svg className="w-5 h-5 fill-current shrink-0 text-[#FF0000] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="font-mono text-xs uppercase font-bold tracking-wider">YouTube</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 group-hover:translate-x-1 transition-transform">// WATCH</span>
            </a>

            {/* 🎵 TIKTOK STREAM */}
            <a 
              href="https://www.tiktok.com/@boblebad1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={linkItemStyle}
            >
              <div className="flex items-center space-x-4">
                <svg className="w-5 h-5 fill-current shrink-0 text-slate-900 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.73-.12-.11-.24-.24-.35-.36v5.82c.01 3.32-2.13 6.47-5.31 7.42-3.62 1.03-7.71-1.06-8.75-4.68-.96-3.34 1-7.05 4.31-8.06.87-.26 1.79-.31 2.7-.19v4.03c-.86-.19-1.81-.06-2.53.47-.83.62-1.12 1.77-.73 2.72.46 1.09 1.76 1.7 2.89 1.43 1-.22 1.71-1.14 1.71-2.17V.02z"/>
                </svg>
                <span className="font-mono text-xs uppercase font-bold tracking-wider">TikTok</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 group-hover:translate-x-1 transition-transform">// REELS</span>
            </a>

            {/* 🔵 FACEBOOK HUB */}
            <a 
              href="https://www.facebook.com/boblebad1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={linkItemStyle}
            >
              <div className="flex items-center space-x-4">
                <svg className="w-5 h-5 fill-current shrink-0 text-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-mono text-xs uppercase font-bold tracking-wider">Facebook</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 group-hover:translate-x-1 transition-transform">// EVENTS</span>
            </a>

          </div>

        </div>

        {/* 💿 RIGHT SIDE: UNTOUCHED 100VH HIGH-FIDELITY SPINNER COUPLING */}
        <div className="lg:col-span-5 absolute top-0 right-0 h-screen w-[100vh] hidden lg:flex items-center pointer-events-none">
          <div className="w-full h-full transform translate-x-[45%]">
            <div 
              className="w-full h-full rounded-full vinyl-grooves relative flex items-center justify-center border-l border-white/10 animate-spin"
              style={{ animationDuration: '24s', animationTimingFunction: 'linear' }}
            >
              {/* Outer Surface Rim Layers */}
              <div className="absolute inset-8 rounded-full border border-white/[0.03]" />
              <div className="absolute inset-24 rounded-full border border-white/[0.02]" />
              <div className="absolute inset-48 rounded-full border border-white/[0.02]" />
              <div className="absolute inset-72 rounded-full border border-white/[0.01]" />
              
              {/* Central Sticker Label */}
              <div className="w-52 h-52 rounded-full rainbow-spectrum p-1.5 shadow-2xl flex items-center justify-center relative z-20">
                <div className="w-full h-full bg-[#05070d] rounded-full flex flex-col items-center justify-center text-center p-4 text-white">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-400 font-bold uppercase">LAZY DAYS</span>
                  {/* Spindle Core Hole */}
                  <div className="w-2.5 h-2.5 bg-[#030712] rounded-full border border-white/30 mt-1.5 shadow-inner" />
                  <span className="font-mono text-[8px] text-zinc-500 mt-1.5">[BS266]</span>
                </div>
              </div>

              {/* Glossy Surface Sheen Reflection Rays */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent transform rotate-45" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-transparent via-white/[0.04] to-transparent transform rotate-45" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}