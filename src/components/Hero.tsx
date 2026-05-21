"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiArrowDown, 
  FiDownload,
  FiShield,
  FiCpu,
  FiCode,
  FiZap,
  FiTerminal
} from "react-icons/fi";

const roles = [
  "AI & Machine Learning",
  "Deep Learning",
  "Data Science",
  "Cyber Security",
  "Hackathons",
  "Frontend Development",
  "Backend Development",
  "App Development",
  "Web Development"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 60;
    const currentFullText = roles[currentRole];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background visual depth lights */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-500/5 blur-[120px] pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative glass rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/5 dark:shadow-black/40 overflow-hidden border border-white/10 dark:border-gray-800/40">
          
          {/* Futuristic Technical Blueprint Grid backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
            
            {/* 3D Animated Profile Image Section */}
            <motion.div 
              className="lg:w-1/3 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto group">
                
                {/* Layered Cyber Ambient Backlight Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 rounded-full blur-2xl opacity-30 dark:opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
                
                {/* Slow Spinning Outer Orbital Ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 animate-spin pointer-events-none" style={{ animationDuration: '10s' }} />
                
                {/* Fast Rotating Dot Accents */}
                <div className="absolute -inset-2 rounded-full border border-dashed border-gray-300/40 dark:border-gray-700/40 animate-spin pointer-events-none" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                
                {/* Inner Gradient Breathing Ring */}
                <div className="absolute -inset-1.5 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-white dark:bg-black rounded-full" />
                </div>
                
                {/* Image Crop Container */}
                <div className="absolute inset-0.5 rounded-full overflow-hidden border-2 border-white dark:border-gray-900 shadow-inner bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
                  <img
                    src="/profile.jpeg"
                    alt="Mohammed Sohail Khan"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Cybersecurity Shield Floating Badge */}
                <div className="absolute bottom-2 right-2 p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/20 border border-white/20 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center">
                  <FiShield className="w-4 h-4" />
                </div>

              </div>
            </motion.div>

            {/* Content Text Section */}
            <div className="lg:w-2/3 text-center lg:text-left flex flex-col justify-center">
              
              {/* Title Header with Glowing Cyber Gradient */}
              <motion.h1 
                className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight leading-tight"
                variants={itemVariants}
              >
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 font-black">Mohammed Sohail Khan</span>
              </motion.h1>
              
              {/* Tech Typist / Cybersecurity Console Subtitle */}
              <motion.div 
                className="w-fit mx-auto lg:mx-0 mb-3"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2 font-mono text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-900/40 px-3 py-2 rounded-lg border border-gray-200/30 dark:border-gray-800/30 shadow-inner backdrop-blur-sm">
                  <span className="text-blue-500 font-bold font-mono">$</span>
                  <span className="text-gray-400 dark:text-gray-550 uppercase font-semibold tracking-wider text-[9px] font-mono">system_role:</span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold tracking-wide">{displayText}</span>
                  <span className="inline-block w-1.5 h-3 bg-purple-500 animate-pulse ml-0.5" />
                </div>
              </motion.div>
              
              {/* Elegant Supporting Pitch Statement */}
              <motion.p 
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                variants={itemVariants}
              >
                Engineering highly secure, autonomous intelligence pipelines and defensive architectures that convert complex technical bottlenecks into clean user-centric solutions.
              </motion.p>
 
              {/* Core Expert Pillars Badges Dock */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-1 bg-gray-50/50 dark:bg-gray-950/30 px-2.5 py-1.5 rounded-lg border border-gray-200/20 dark:border-gray-800/30 text-[9px] sm:text-xs font-semibold text-gray-650 dark:text-gray-400">
                  <FiCpu className="text-blue-500" />
                  <span>AI Systems</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-50/50 dark:bg-gray-950/30 px-2.5 py-1.5 rounded-lg border border-gray-200/20 dark:border-gray-800/30 text-[9px] sm:text-xs font-semibold text-gray-650 dark:text-gray-400">
                  <FiShield className="text-emerald-500" />
                  <span>Cybersec Hardening</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-50/50 dark:bg-gray-950/30 px-2.5 py-1.5 rounded-lg border border-gray-200/20 dark:border-gray-800/30 text-[9px] sm:text-xs font-semibold text-gray-650 dark:text-gray-400">
                  <FiCode className="text-purple-500" />
                  <span>Full-Stack Dev</span>
                </div>
              </motion.div>

              {/* Action Channels & Social Grid Lockup */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
                variants={itemVariants}
              >
                {/* CTA Action Triggers */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                  <motion.a
                    href="#projects"
                    className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 inline-flex items-center justify-center gap-1.5 border border-indigo-500/20"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiTerminal />
                    Explore Work
                  </motion.a>
                  
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25 inline-flex items-center justify-center gap-1.5 border border-purple-500/20"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiDownload />
                    Download CV
                  </motion.a>
                  
                  <motion.a
                    href="#contact"
                    className="px-5 py-2 bg-gray-100/50 hover:bg-gray-150/50 dark:bg-gray-900/60 dark:hover:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-gray-250/20 dark:border-gray-800/40 transition-all duration-355"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get In Touch
                  </motion.a>
                </div>

                {/* Vertical Divider on Desktop */}
                <div className="hidden sm:block h-5 w-[1px] bg-gray-200 dark:bg-gray-800" />

                {/* Social Badges Dock */}
                <div className="flex space-x-3.5">
                  <motion.a
                    href="https://github.com/sohail06k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-50 dark:bg-gray-950/40 rounded-xl border border-gray-200/30 dark:border-gray-800/40 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-400"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={18} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/mohammed-sohail-khan-80214a338/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-50 dark:bg-gray-950/40 rounded-xl border border-gray-200/30 dark:border-gray-800/40 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-400"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiLinkedin size={18} />
                  </motion.a>
                  <motion.a
                    href="mailto:mdsohailkhan744@gmail.com"
                    className="p-2.5 bg-gray-50 dark:bg-gray-950/40 rounded-xl border border-gray-200/30 dark:border-gray-800/40 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-400"
                    aria-label="Email"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiMail size={18} />
                  </motion.a>
                </div>

              </motion.div>

            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.a
          href="#about"
          className="inline-block mt-6 mx-auto block text-center cursor-pointer w-fit group"
          aria-label="Scroll to about section"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold group-hover:text-blue-500 transition-colors">system_scroll</span>
            <FiArrowDown className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors mt-2" size={24} />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
