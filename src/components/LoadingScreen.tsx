"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal, FiShield, FiCpu, FiCheck } from "react-icons/fi";

interface LoadingScreenProps {
  onComplete: () => void;
}

const bootLogs = [
  "LOG: Initializing security handshake...",
  "SECURE: Verification of identity: MOHAMMED SOHAIL KHAN... MATCH",
  "DEPT: Loading Academic Ledger (Vardhaman College of Engineering)... OK",
  "CERT: Verifying NPTEL Ethical Hacking consolidated score: 69%... Elite Starburst Validated",
  "PROJECT: Indexing Commune Connect event slots & slot collision triggers...",
  "PROJECT: Mounting Kosmic Shine mobile marketplace Bloc modules...",
  "AI: Injecting portfolio chatbot parameters & knowledge vectors...",
  "PHYS: Deployingconnected Canvas background particles grid...",
  "ANALYTICS: Establishing local secure visitor telemetry link...",
  "SUCCESS: Boot sequence verified. Decrypting portfolio environment..."
];

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if session has already seen the loader
    const hasSeenLoader = sessionStorage.getItem("hasSeenPortfolioLoader");
    if (hasSeenLoader) {
      onComplete();
      return;
    }

    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < bootLogs.length) {
        setLogs((prev) => [...prev, bootLogs[logIndex]]);
        logIndex++;
        setProgress((logIndex / bootLogs.length) * 100);
      } else {
        clearInterval(logInterval);
        setTimeout(() => {
          setIsDone(true);
          sessionStorage.setItem("hasSeenPortfolioLoader", "true");
          setTimeout(onComplete, 800); // Trigger parent reveal after fade
        }, 500);
      }
    }, 220);

    return () => clearInterval(logInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black text-emerald-500 font-mono flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
        >
          {/* Neon background overlays */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-emerald-950 pb-4 relative z-10">
            <div className="flex items-center gap-2">
              <FiTerminal className="w-5 h-5 animate-pulse text-emerald-400" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-400">
                Sohail Security Kernel v1.0.4
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[10px] uppercase font-bold text-emerald-600">
                Live Console Hooked
              </span>
            </div>
          </div>

          {/* Terminal Console Logs */}
          <div className="flex-1 my-8 overflow-y-auto space-y-2 text-xs sm:text-sm font-medium scrollbar-none max-w-4xl mx-auto w-full flex flex-col justify-end relative z-10">
            <AnimatePresence>
              {logs.map((log, index) => {
                const isSec = log.startsWith("SUCCESS:");
                const isErr = log.startsWith("ERROR:");
                const colorClass = isSec 
                  ? "text-emerald-400 font-extrabold" 
                  : isErr 
                    ? "text-red-500" 
                    : "text-emerald-600/90";
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-start gap-2.5 ${colorClass}`}
                  >
                    <span className="text-emerald-700 shrink-0 font-bold">[{index + 1}]</span>
                    <span className="break-all">{log}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Progress Bar & Footer telemetry */}
          <div className="border-t border-emerald-950 pt-6 space-y-4 max-w-4xl mx-auto w-full relative z-10">
            <div className="flex justify-between items-center text-xs text-emerald-600 font-bold">
              <span className="flex items-center gap-1.5">
                <FiCpu className="animate-spin text-emerald-500 w-3.5 h-3.5" />
                DECRYPTING PROFILE GRID...
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            
            <div className="h-1.5 w-full bg-emerald-950/40 rounded-full overflow-hidden border border-emerald-900/30">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between text-[9px] text-emerald-700 font-bold uppercase tracking-wider gap-2">
              <span>Telemetry Node: Vardhaman-AUTONOMOUS</span>
              <span>Encryption Status: 256-bit AES Handshake Completed</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
