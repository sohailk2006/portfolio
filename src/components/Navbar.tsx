"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const navItems = [
  { name: "Home", href: "#home", num: "01" },
  { name: "About", href: "#about", num: "02" },
  { name: "Focus", href: "#interests", num: "03" },
  { name: "Skills", href: "#skills", num: "04" },
  { name: "Coding", href: "#coding-profiles", num: "05" },
  { name: "Projects", href: "#projects", num: "06" },
  { name: "Achievements", href: "#achievements", num: "07" },
  { name: "Certifications", href: "#certifications", num: "08" },
  { name: "Contact", href: "#contact", num: "09" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for floating state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Sweet spot for intersection trigger
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "top-4 mx-auto w-[92%] max-w-6xl rounded-full bg-white/70 dark:bg-black/75 border border-gray-200/50 dark:border-gray-800/60 shadow-xl shadow-black/5 dark:shadow-black/40 backdrop-blur-md px-6 py-2"
          : "top-0 w-full rounded-none bg-white/30 dark:bg-black/30 border-b border-gray-100/10 dark:border-gray-900/10 backdrop-blur-sm px-8 py-4"
      }`}
    >
      <div className="flex items-center justify-between">
        
        {/* Brand / Logo Lockup */}
        <a href="#home" className="flex items-center space-x-2 group relative z-10">
          <span className="font-mono text-sm text-blue-500 tracking-widest group-hover:text-purple-500 transition-colors duration-300">{"//"}</span>
          <span className="font-black text-sm tracking-widest text-gray-900 dark:text-white uppercase transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
            Sohail<span className="text-blue-500 animate-pulse font-bold">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-gray-100/30 dark:bg-gray-900/40 px-2 py-1 rounded-full border border-gray-200/20 dark:border-gray-800/30">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                }`}
              >
                {/* Monospace Index */}
                <span className={`font-mono text-[9px] mr-1 opacity-70 ${isActive ? "text-blue-500" : "text-gray-400"}`}>
                  {item.num}
                </span>
                
                {/* Item Name */}
                <span>{item.name}</span>

                {/* Animated Slide Pill for Active Item */}
                {isActive && (
                  <span className="absolute inset-0 bg-white dark:bg-gray-800/60 rounded-full -z-10 shadow-sm border border-gray-200/30 dark:border-gray-700/30 transition-all duration-300" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Widgets (Theme & Sys Status) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-100/50 dark:bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-200/30 dark:border-gray-800/30 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-gray-500 dark:text-gray-400 uppercase">SYS: ACTIVE</span>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gray-100/50 dark:bg-gray-900/50 border border-gray-200/30 dark:border-gray-800/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Glassmorphic) */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-full mt-3 rounded-2xl border border-gray-200/50 dark:border-gray-800/60 bg-white/90 dark:bg-black/90 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500 text-blue-600 dark:text-blue-400 font-bold"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/40"
                }`}
              >
                <span className="font-mono text-xs text-blue-500 mr-3">{item.num}</span>
                <span className="text-xs uppercase tracking-wider font-semibold">{item.name}</span>
              </a>
            );
          })}
          
          {/* Telemetry Badge inside Mobile view */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-900 flex justify-between items-center px-4">
            <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Telemetry status</span>
            <div className="flex items-center space-x-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] font-mono tracking-widest text-emerald-500 uppercase">SECURE_LINK: ON</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
