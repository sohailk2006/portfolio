"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiActivity, 
  FiX, 
  FiClock, 
  FiMousePointer, 
  FiLayers, 
  FiMessageSquare, 
  FiExternalLink 
} from "react-icons/fi";

interface TelemetryData {
  visits: number;
  clicks: number;
  chatbotInquiries: number;
  contactClicks: number;
}

const AnalyticsDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [telemetry, setTelemetry] = useState<TelemetryData>({
    visits: 1,
    clicks: 0,
    chatbotInquiries: 0,
    contactClicks: 0
  });

  // Track session timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Initialize and load LocalStorage telemetry
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("sohail_visitor_telemetry");
    let currentData: TelemetryData;

    if (stored) {
      try {
        currentData = JSON.parse(stored);
        // Increment visit count for a new tab session
        if (!sessionStorage.getItem("sohail_visit_incremented")) {
          currentData.visits = (currentData.visits || 0) + 1;
          sessionStorage.setItem("sohail_visit_incremented", "true");
        }
      } catch (e) {
        currentData = { visits: 1, clicks: 0, chatbotInquiries: 0, contactClicks: 0 };
      }
    } else {
      currentData = { visits: 1, clicks: 0, chatbotInquiries: 0, contactClicks: 0 };
      sessionStorage.setItem("sohail_visit_incremented", "true");
    }

    localStorage.setItem("sohail_visitor_telemetry", JSON.stringify(currentData));
    setTelemetry(currentData);

    // Dynamic global click tracker to measure active interactivity score
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Exclude clicks inside the analytics dashboard itself
      if (target.closest(".analytics-dashboard-container")) return;

      currentData.clicks = (currentData.clicks || 0) + 1;

      // Track clicks on external socials or email/phone elements
      if (
        target.closest("a[href^='mailto:']") || 
        target.closest("a[href^='tel:']") || 
        target.closest("a[href*='github.com']") || 
        target.closest("a[href*='linkedin.com']")
      ) {
        currentData.contactClicks = (currentData.contactClicks || 0) + 1;
      }

      localStorage.setItem("sohail_visitor_telemetry", JSON.stringify(currentData));
      setTelemetry({ ...currentData });
    };

    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, [isOpen]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  // Calculate a premium relative active engagement index (0-100%)
  const calculateEngagementRating = () => {
    const totalClicks = telemetry.clicks;
    const chatbot = telemetry.chatbotInquiries;
    const contacts = telemetry.contactClicks;
    
    // Engagement points: clicks = 2pts, chatbot = 10pts, direct contact links = 25pts
    const score = (totalClicks * 2) + (chatbot * 10) + (contacts * 25);
    return Math.min(Math.round(score), 100);
  };

  const engagementPercentage = calculateEngagementRating();

  return (
    <>
      {/* Floating Left Telemetry Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40 select-none">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:brightness-110 rounded-full text-white shadow-2xl flex items-center justify-center relative cursor-pointer group"
          aria-label="Open Telemetry Analytics"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 group-hover:scale-125 group-hover:opacity-40 animate-ping duration-1000" />
          <FiActivity className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Analytics Dashboard modal popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="analytics-dashboard-container bg-white dark:bg-gray-950 rounded-3xl border border-gray-150 dark:border-gray-900 shadow-2xl w-full max-w-lg p-6 sm:p-8 flex flex-col relative overflow-hidden backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-900 pb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-xl">
                    <FiActivity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-900 dark:text-white leading-tight">
                      Visitor Telemetry Dashboard
                    </h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                      Client-side telemetry index (Stored Locally)
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-400 dark:text-gray-500 transition-colors cursor-pointer"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-2 gap-4 my-6">
                {/* Visits */}
                <div className="bg-gray-50/50 dark:bg-gray-900/35 border border-gray-100 dark:border-gray-900 p-4 rounded-2xl flex flex-col justify-between h-24">
                  <div className="flex justify-between items-center text-gray-400 dark:text-gray-500">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">Total Visits</span>
                    <FiLayers size={14} />
                  </div>
                  <div className="text-2xl font-black text-gray-900 dark:text-white">
                    {telemetry.visits}
                  </div>
                </div>

                {/* Session duration */}
                <div className="bg-gray-50/50 dark:bg-gray-900/35 border border-gray-100 dark:border-gray-900 p-4 rounded-2xl flex flex-col justify-between h-24">
                  <div className="flex justify-between items-center text-gray-400 dark:text-gray-500">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">Time on Site</span>
                    <FiClock size={14} />
                  </div>
                  <div className="text-2xl font-black text-gray-900 dark:text-white">
                    {formatTime(sessionSeconds)}
                  </div>
                </div>

                {/* Total Clicks */}
                <div className="bg-gray-50/50 dark:bg-gray-900/35 border border-gray-100 dark:border-gray-900 p-4 rounded-2xl flex flex-col justify-between h-24">
                  <div className="flex justify-between items-center text-gray-400 dark:text-gray-500">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">Interactions</span>
                    <FiMousePointer size={14} />
                  </div>
                  <div className="text-2xl font-black text-gray-900 dark:text-white">
                    {telemetry.clicks}
                  </div>
                </div>

                {/* Inquiries */}
                <div className="bg-gray-50/50 dark:bg-gray-900/35 border border-gray-100 dark:border-gray-900 p-4 rounded-2xl flex flex-col justify-between h-24">
                  <div className="flex justify-between items-center text-gray-400 dark:text-gray-500">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">Chat Inquiries</span>
                    <FiMessageSquare size={14} />
                  </div>
                  <div className="text-2xl font-black text-gray-900 dark:text-white">
                    {telemetry.chatbotInquiries}
                  </div>
                </div>
              </div>

              {/* Engagement Score gauge widget */}
              <div className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/10 p-5 rounded-2xl space-y-4">
                <div className="flex justify-between items-center text-xs font-bold text-gray-800 dark:text-gray-200">
                  <span className="uppercase tracking-wide">Telemetry Engagement Rating</span>
                  <span className="text-emerald-500 font-extrabold">{engagementPercentage}%</span>
                </div>
                
                {/* Horizontal dynamic gauge */}
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden border border-gray-200/20">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${engagementPercentage}%` }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500"
                  />
                </div>

                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-semibold">
                  This engagement index estimates your interest levels by tracking navigation clicks, contact link clicks, and AI chatbot prompts. 
                </p>
              </div>

              {/* Footer details */}
              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-900 text-center flex flex-col gap-2">
                <div className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  Secure Data Policy • Client-Side Only
                </div>
                <div className="text-[9px] text-gray-400 dark:text-gray-500 leading-relaxed max-w-sm mx-auto font-medium">
                  We care about privacy. Absolutely no logs are sent to external database endpoints. All click parameters are strictly confined to your local browser storage.
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnalyticsDashboard;
