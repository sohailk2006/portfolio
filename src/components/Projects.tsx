"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  FiGithub, 
  FiExternalLink, 
  FiX, 
  FiCalendar, 
  FiLayers,
  FiCode,
  FiMapPin,
  FiStar,
  FiClock,
  FiSearch,
  FiMail,
  FiBell,
  FiBookOpen,
  FiCheck,
  FiCheckCircle,
  FiMonitor,
  FiSmartphone,
  FiShield,
  FiActivity
} from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiFirebase, 
  SiFlutter, 
  SiStripe 
} from "react-icons/si";

interface Project {
  title: string;
  identityLabel: string;
  labels: string[];
  description: string;
  longDescription: string;
  category: string;
  statusBadge: string;
  technologies: string[];
  gradient: string;
  shadowColor: string;
  github: string;
  demo: string;
  features: string[];
  visualMockType: "phone" | "dashboard";
}

const projects: Project[] = [
  {
    title: "Commune Connect",
    identityLabel: "Full-stack community web platform",
    labels: ["Community Platform", "Event Management", "SaaS Web Application", "Real-Time System"],
    description: "Commune Connect is a smart community engagement and event management platform built to simplify event discovery, scheduling, and interaction between organizers and participants.",
    longDescription: "Commune Connect is a comprehensive SaaS community platform engineered to maximize public engagement while streamlining administrative complexity. Built on modern web layers, it coordinates event cataloging, instant seat booking, automated lifecycle transactional notifications, and real-time community engagement frameworks. The software helps community managers prevent booking collisions and access key dashboard insights dynamically.",
    category: "Web App",
    statusBadge: "DEPLOYED // v1.0.0-PRODUCTION",
    technologies: [
      "React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", 
      "Socket.io", "Nodemailer", "JWT Authentication", "Firebase", 
      "Cloudinary", "Redux Toolkit", "Express.js"
    ],
    gradient: "from-blue-650 via-indigo-500 to-cyan-550",
    shadowColor: "shadow-blue-500/10 dark:shadow-blue-500/5",
    github: "https://github.com/sohailk2006/commune-connect",
    demo: "https://commune-connect.demo",
    features: [
      "Smart event discovery and booking system",
      "Automated email confirmations and reminders",
      "Real-time notifications and communication",
      "Slot conflict handling and scheduling automation",
      "Attendance and engagement management",
      "Community interaction tools",
      "Responsive modern dashboard UI",
      "Organizer event management system"
    ],
    visualMockType: "dashboard"
  },
  {
    title: "Kosmic Shine",
    identityLabel: "Flutter-based marketplace mobile app",
    labels: ["Mobile App", "Marketplace", "Vehicle Care", "Cross-Platform"],
    description: "Kosmic Shine is a modern car wash and detailing service marketplace application built to connect users with nearby vehicle care providers.",
    longDescription: "Kosmic Shine provides a highly optimized vehicle care marketplace. Users get a premium, mobile-first experience inspired by Swiggy where they can discover neighboring service providers, compare comprehensive car wash packages, check reviews, and process payments securely. Built on Flutter and Dart, the platform ensures rapid fluid interactions, rich native layouts, and full map visualization.",
    category: "Marketplace",
    statusBadge: "APP MARKET // v1.2.0-STABLE",
    technologies: [
      "Flutter", "Dart", "Firebase", "Google Maps API", "Node.js", 
      "Express.js", "MongoDB", "Stripe API", "Provider", "Bloc", 
      "Cloudinary", "FCM Notifications"
    ],
    gradient: "from-purple-650 via-pink-500 to-orange-550",
    shadowColor: "shadow-purple-500/10 dark:shadow-purple-500/5",
    github: "https://github.com/sohailk2006/kosmic-shine",
    demo: "https://kosmic-shine.demo",
    features: [
      "Nearby car wash and detailing discovery",
      "Service package browsing and comparison",
      "Real-time booking and appointment scheduling",
      "Interactive maps and location-based filtering",
      "Ratings and reviews system",
      "Secure online payments",
      "Service provider management dashboard",
      "Mobile-first smooth UI/UX"
    ],
    visualMockType: "phone"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Lock body scroll when case study modal is open to prevent background scroll leakage and "stuck" scrolling
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const categories = ["All", "Web App", "Marketplace"];

  // Steps for Commune Connect case study
  const communeSteps = [
    {
      title: "AI Recommendation & Search",
      desc: "Users search for public events, matched dynamically against preferences and scheduled intervals.",
      icon: <FiSearch size={18} />,
      ui: (
        <div className="bg-slate-900/60 p-4 rounded-xl border border-blue-500/20 text-xs font-mono space-y-2">
          <div className="flex justify-between text-gray-400 text-[10px]">
            <span>SYSTEM: SEARCH_SCANNER</span>
            <span className="text-emerald-400">ONLINE</span>
          </div>
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <motion.div className="h-full bg-blue-500 w-[75%]" animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
          </div>
          <div className="bg-gray-950 p-2 rounded text-[10px] text-gray-300">
            {`> Event Found: "AI Innovation Summit"`}
            <br />
            {`> Date: Sat, Jun 20 • 10:00 AM`}
            <br />
            {`> Venue: Hall 4 // JNTU`}
          </div>
        </div>
      )
    },
    {
      title: "Conflict Diagnostics Engine",
      desc: "Collision avoidance algorithm checks against double bookings and capacity ceilings dynamically.",
      icon: <FiShield size={18} />,
      ui: (
        <div className="bg-slate-900/60 p-4 rounded-xl border border-blue-500/20 text-xs font-mono space-y-2">
          <div className="text-[10px] font-bold text-blue-400">DIAGNOSTICS GATE</div>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[8px] font-bold">SLOT: FREE</span>
            <span className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[8px] font-bold">CAPACITY: 76%</span>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-650 to-indigo-650 text-white text-[9px] py-1.5 rounded font-bold shadow-md flex items-center justify-center gap-1.5">
            <FiCheckCircle size={10} />
            <span>Pass Conflict Audits</span>
          </button>
        </div>
      )
    },
    {
      title: "Nodemailer Ticket Delivery",
      desc: "Fires secure automated SMTP mail pipelines distributing high-fidelity tickets and calendar attachments.",
      icon: <FiMail size={18} />,
      ui: (
        <div className="bg-slate-900/60 p-4 rounded-xl border border-blue-500/20 text-[9px] font-mono text-gray-400 flex flex-col gap-1.5">
          <div className="flex justify-between border-b pb-1 border-gray-800 font-bold text-white">
            <span>SMTP: MAIL_DAEMON</span>
            <span className="text-blue-400 font-bold">INBOX</span>
          </div>
          <div><span className="text-gray-500">FROM:</span> commune-connect@service.com</div>
          <div><span className="text-gray-500">TO:</span> mohammed.sohail@dev.com</div>
          <div className="bg-slate-950 p-2 rounded border border-gray-800 text-center font-bold text-emerald-400 text-[8px] mt-1">
            SECURE_TICKET: #COMMUNE-8874-AI
          </div>
        </div>
      )
    },
    {
      title: "Socket.io Communication Feed",
      desc: "Coordinates instant live websocket channels updating real-time seats and dynamic announcement banners.",
      icon: <FiBell size={18} />,
      ui: (
        <div className="bg-slate-900/60 p-4 rounded-xl border border-blue-500/20 flex flex-col gap-2 font-mono text-[9px]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-green-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-ping"></span> SOCKET_CONNECTED
            </span>
            <span className="text-[8px] text-gray-500">WS://ACTIVE</span>
          </div>
          <div className="bg-slate-950 p-2 rounded border border-gray-800 text-gray-300">
            <div className="text-blue-400 font-bold">[WS_BROADCAST]</div>
            <div className="text-[8px] mt-0.5">Summit starting in 15 mins. Join Auditorium 1!</div>
          </div>
        </div>
      )
    }
  ];

  // Steps for Kosmic Shine case study
  const kosmicSteps = [
    {
      title: "Nearby Detailer Search",
      desc: "Swiggy-inspired location logic fetches neighboring wash studios using latitude/longitude data points.",
      icon: <FiMapPin size={18} />,
      ui: (
        <div className="bg-slate-900/60 p-4 rounded-xl border border-purple-500/20 text-xs font-mono space-y-2">
          <div className="flex justify-between text-gray-400 text-[10px]">
            <span>GEOLOCATION SCANNER</span>
            <span className="text-purple-400">ACTIVE</span>
          </div>
          <div className="bg-slate-950 p-2 rounded text-[10px] text-gray-300">
            {`> Lat: 19.0760 // Long: 72.8777`}
            <br />
            {`> Status: Locating wash partners...`}
            <br />
            {`> Found: 3 detailing studios nearby.`}
          </div>
        </div>
      )
    },
    {
      title: "Service Package Comparison",
      desc: "Renders multi-tier packages (Foam wash, Ceramic coat, Wax polish) with side-by-side pricing models.",
      icon: <FiLayers size={18} />,
      ui: (
        <div className="bg-slate-900/60 p-4 rounded-xl border border-purple-500/20 text-xs font-mono space-y-2">
          <div className="text-[10px] font-bold text-pink-400">COMPARING CATALOGS</div>
          <div className="space-y-1 bg-slate-950 p-2 rounded text-[9px]">
            <div className="flex justify-between text-white">
              <span>1. Platinum Polish</span>
              <span className="text-pink-400 font-bold">$120</span>
            </div>
            <div className="flex justify-between text-white">
              <span>2. Basic Foam Wash</span>
              <span className="text-purple-400 font-bold">$35</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Secure Stripe Payment Gate",
      desc: "Full Stripe API integration processing rapid, secure merchant transactions with webhooks.",
      icon: <FiCheckCircle size={18} />,
      ui: (
        <div className="bg-slate-900/60 p-4 rounded-xl border border-purple-500/20 text-xs font-mono space-y-2">
          <div className="text-[10px] font-bold text-blue-400">STRIPE_PAYMENT_GATE</div>
          <div className="bg-slate-950 p-2 rounded text-[9px] text-emerald-400 font-bold text-center border border-emerald-500/20">
            [SUCCESS] CHARGE_ID: ch_3MxxXXL5
          </div>
          <p className="text-[8px] text-gray-550 dark:text-gray-555 text-center mt-1">Receipt distributed successfully.</p>
        </div>
      )
    },
    {
      title: "FCM Push Notifications",
      desc: "Firebase Cloud Messaging updates status bars regarding detailing van progress in real time.",
      icon: <FiBell size={18} />,
      ui: (
        <div className="bg-slate-900/60 p-4 rounded-xl border border-purple-500/20 text-xs font-mono space-y-2">
          <div className="text-[10px] text-pink-400 font-bold">FCM SERVICE LOGS</div>
          <div className="bg-slate-950 p-2 rounded text-[9px] text-gray-300">
            {`[FCM] Token handshakes: OK`}
            <br />
            {`[PUSH] "Detailer is on the way!" dispatched`}
            <br />
            {`[STATUS] Status packet broadcasted.`}
          </div>
        </div>
      )
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const activeModalSteps = selectedProject?.title === "Commune Connect" ? communeSteps : kosmicSteps;

  return (
    <section id="projects" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      
      {/* Background Cyber Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />

      {/* Decorative Radial glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border border-blue-200/30 dark:border-blue-800/30 uppercase">
              Production Artifacts
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Projects{" " }
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                Showcase
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
            
            <p className="text-gray-555 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-xs sm:text-sm leading-relaxed">
              Explore high-fidelity engineering systems representing fully realized architectures—built to optimize, connect, and perform at scale.
            </p>
          </motion.div>
        </div>

        {/* Categories Filtering Pill */}
        <div className="flex justify-center mb-10">
          <div className="flex justify-center gap-1.5 p-1.5 bg-gray-50/80 dark:bg-gray-950/40 border border-gray-200/40 dark:border-gray-800/50 backdrop-blur-md rounded-2xl w-full max-w-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-650 text-white shadow-lg shadow-blue-500/10 scale-[1.03]" 
                    : "text-gray-550 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Alternating Cards */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isCommune = project.title === "Commune Connect";
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`glass rounded-3xl border relative overflow-hidden transition-all duration-350 ${project.shadowColor} ${
                    isCommune 
                      ? "hover:border-blue-500/25 border-gray-250/20 dark:border-gray-800/40" 
                      : "hover:border-purple-500/25 border-gray-250/20 dark:border-gray-800/40"
                  }`}
                >
                  {/* Decorative glowing gradient top-border */}
                  <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                  
                  {/* Card Main Body Grid Layout */}
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 p-5 sm:p-8 lg:p-10 items-center">
                    
                    {/* Visual Mockups Column - Swaps order depending on index for visual alternating rhythm */}
                    <div className={`lg:col-span-5 flex justify-center items-center relative py-4 lg:py-0 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      
                      {project.visualMockType === "phone" ? (
                        /* KOSMIC SHINE: PURE-CSS APP-FIRST MOBILE MOCKUP */
                        <div className="relative group/mock">
                          {/* Pulsing neon backing glow */}
                          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 to-orange-500 rounded-[50px] blur-3xl opacity-[0.08] group-hover/mock:opacity-20 transition-opacity duration-500" />
                          
                          {/* Interactive orbital status rings */}
                          <div className="absolute -top-10 -left-10 w-28 h-28 border border-dashed border-purple-500/10 rounded-full animate-spin-slow pointer-events-none" />
                          <div className="absolute -bottom-10 -right-10 w-28 h-28 border border-dashed border-pink-500/10 rounded-full animate-spin-reverse pointer-events-none" />

                          {/* Smartphone Body Chassis */}
                          <div className="w-[210px] h-[420px] bg-gray-900 dark:bg-black rounded-[38px] p-2 shadow-2xl relative border-[3.5px] border-gray-800 dark:border-gray-900 flex flex-col overflow-hidden transform group-hover/mock:rotate-[1.5deg] group-hover/mock:scale-[1.03] transition-all duration-500">
                            {/* Device camera notch and ear-speaker */}
                            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-b-2xl z-30 flex items-center justify-center">
                              <div className="w-8 h-[3px] bg-gray-800 rounded-full mb-1"></div>
                              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full absolute right-5 mb-1"></div>
                            </div>

                            {/* Mobile Screen Container */}
                            <div className="flex-grow bg-slate-50 dark:bg-slate-900 rounded-[28px] overflow-hidden flex flex-col relative text-gray-800 dark:text-gray-100 font-sans border border-black/10 dark:border-white/5">
                              
                              {/* Swiggy/Zomato Themed Custom Header */}
                              <div className="bg-white dark:bg-gray-950 px-4 pt-5 pb-2 border-b border-gray-100 dark:border-gray-900 flex flex-col gap-1.5 relative z-10">
                                {/* Simulating Top status icons */}
                                <div className="flex justify-between items-center text-[7px] font-mono text-gray-400">
                                  <span className="font-bold">09:41</span>
                                  <div className="flex items-center gap-1 font-bold">
                                    <span>5G</span>
                                    <div className="w-3.5 h-1.5 border border-gray-400 rounded-sm p-[0.5px]">
                                      <div className="h-full w-full bg-gray-400 rounded-2xs"></div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Dynamic Swiggy-like Location pin selector */}
                                <div className="flex items-center gap-1 text-[8px] text-purple-500 font-extrabold mt-0.5">
                                  <FiMapPin size={9} className="text-purple-500" />
                                  <span className="tracking-wide">Madhapur Hubs, HYD</span>
                                </div>
                                
                                {/* Search input mockup */}
                                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-1 flex items-center gap-1.5 text-gray-450 text-[7px] border border-gray-100 dark:border-gray-800 shadow-inner">
                                  <FiSearch size={9} className="text-gray-400" />
                                  <span>Search car polish, dry wash...</span>
                                </div>
                              </div>

                              {/* Swiggy Wash Marketplace Listings Stream */}
                              <div className="flex-grow p-2.5 overflow-y-auto space-y-2 bg-gray-50 dark:bg-black/20 text-[9px] scrollbar-none">
                                {/* Interactive Swiggy Offer Slider */}
                                <div className="bg-gradient-to-r from-purple-650 to-pink-550 rounded-xl p-2 text-white relative overflow-hidden shadow-md">
                                  <div className="font-black text-[10px] tracking-wide">Elite Detailing</div>
                                  <div className="text-[6.5px] opacity-85 mt-0.5">30% Instant Discount</div>
                                  <div className="bg-white text-purple-600 font-extrabold rounded px-1.5 py-0.5 w-fit mt-1.5 text-[5px] tracking-wider uppercase">
                                    Book Studio
                                  </div>
                                </div>

                                {/* Marketplace Title Section */}
                                <div className="flex justify-between items-center font-extrabold text-gray-850 dark:text-gray-250 text-[8px] tracking-wide">
                                  <span>FEATURED SPA PARTNERS</span>
                                  <span className="text-[6px] text-purple-500 uppercase tracking-widest font-black">All</span>
                                </div>

                                {/* Wash Partner Item 1 */}
                                <div className="bg-white dark:bg-gray-900 rounded-xl p-1.5 shadow-sm border border-gray-150/40 dark:border-gray-850 flex gap-1.5 hover:scale-[1.01] transition-transform duration-200">
                                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-extrabold text-[9px] shadow-inner shrink-0">
                                    KS
                                  </div>
                                  <div className="flex-1 flex flex-col justify-between overflow-hidden">
                                    <div className="font-extrabold text-gray-900 dark:text-white truncate">Kosmic detailing studio</div>
                                    <div className="flex items-center gap-1.5 text-gray-400 text-[6.5px]">
                                      <FiStar size={7} className="text-yellow-500 fill-yellow-500" />
                                      <span className="font-extrabold text-gray-700 dark:text-gray-300">4.9</span>
                                      <span>• 1.2 km away</span>
                                    </div>
                                    <div className="text-[5.5px] text-green-500 font-bold flex items-center gap-1">
                                      <span className="w-1 h-1 bg-green-500 rounded-full animate-ping"></span>
                                      Express Wash Slots Open
                                    </div>
                                  </div>
                                </div>

                                {/* Wash Partner Item 2 */}
                                <div className="bg-white dark:bg-gray-900 rounded-xl p-1.5 shadow-sm border border-gray-150/40 dark:border-gray-850 flex gap-1.5 hover:scale-[1.01] transition-transform duration-200">
                                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-extrabold text-[9px] shadow-inner shrink-0">
                                    EH
                                  </div>
                                  <div className="flex-1 flex flex-col justify-between overflow-hidden">
                                    <div className="font-extrabold text-gray-900 dark:text-white truncate">Elite Detailing Hub</div>
                                    <div className="flex items-center gap-1.5 text-gray-400 text-[6.5px]">
                                      <FiStar size={7} className="text-yellow-500 fill-yellow-500" />
                                      <span className="font-extrabold text-gray-700 dark:text-gray-300">4.7</span>
                                      <span>• 2.8 km away</span>
                                    </div>
                                    <div className="text-[5.5px] text-amber-500 font-bold">Booking Window Closed</div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* COMMUNE CONNECT: PURE-CSS SAAS-STYLE WEB PREVIEW */
                        <div className="relative group/mock w-full max-w-[370px]">
                          {/* Pulsing dashboard backplate glow */}
                          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl blur-3xl opacity-[0.08] group-hover/mock:opacity-20 transition-opacity duration-500" />

                          {/* Desktop browser chrome frame */}
                          <div className="w-full h-[220px] bg-gray-950 rounded-2xl border border-gray-250/20 dark:border-gray-900 shadow-2xl overflow-hidden flex flex-col font-mono text-[9px] transform group-hover/mock:-translate-y-1.5 group-hover/mock:scale-[1.02] transition-all duration-500">
                            {/* Browser window top bar */}
                            <div className="bg-gray-950 px-4 py-2 border-b border-gray-900 flex items-center justify-between">
                              <div className="flex gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
                                <span className="w-2 h-2 rounded-full bg-yellow-500/70"></span>
                                <span className="w-2 h-2 rounded-full bg-green-500/70"></span>
                              </div>
                              <div className="bg-gray-900/80 border border-gray-800 rounded px-4 py-0.5 text-[7px] text-gray-400 w-1/2 text-center truncate">
                                https://commune-connect.dev/diagnostics
                              </div>
                              <div className="w-4"></div>
                            </div>

                            {/* Mini SaaS Dashboard visual panel */}
                            <div className="flex-1 p-2.5 grid grid-cols-12 gap-2.5 bg-gray-950/40 relative">
                              {/* Left Dashboard Grid: Automatic Calendar */}
                              <div className="col-span-7 bg-black/40 rounded-xl p-1.5 border border-gray-850 flex flex-col gap-1">
                                <div className="font-extrabold text-white text-[7.5px] flex items-center justify-between pb-1 border-b border-gray-900">
                                  <span>June 2026</span>
                                  <span className="text-[6px] text-emerald-450 font-bold uppercase tracking-widest flex items-center gap-0.5">
                                    <span className="w-1 h-1 bg-green-400 rounded-full animate-ping"></span>
                                    COLLISION_OK
                                  </span>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center text-gray-500 text-[5px] font-bold">
                                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center text-gray-300 text-[7px]">
                                  <span className="p-0.5 text-gray-600">15</span>
                                  <span className="p-0.5 text-gray-600">16</span>
                                  <span className="p-0.5 text-gray-600">17</span>
                                  <span className="p-0.5 text-gray-650">18</span>
                                  <span className="p-0.5 text-gray-650">19</span>
                                  {/* Actively booked event day node */}
                                  <span className="p-0.5 bg-blue-650 rounded-full text-white font-black relative group/day">
                                    20
                                    <span className="absolute -top-6 left-1/2 -translate-x-[50%] bg-blue-600 text-white text-[5px] rounded px-1.5 py-0.5 whitespace-nowrap shadow-md scale-0 group-hover/day:scale-100 transition-transform origin-bottom z-15 font-sans font-bold">
                                      AI Summit
                                    </span>
                                  </span>
                                  <span className="p-0.5">21</span>
                                </div>
                              </div>

                              {/* Right Dashboard Grid: Live notifications */}
                              <div className="col-span-5 flex flex-col gap-2">
                                <div className="bg-black/40 rounded-xl p-2 border border-gray-850 text-[6.5px] text-gray-400 space-y-1">
                                  <div className="font-extrabold text-white text-[7px] pb-1 border-b border-gray-900">SYSTEM LOG</div>
                                  <div className="text-blue-400 font-black truncate">User // Mohammed S.</div>
                                  <div className="text-slate-500 font-bold uppercase tracking-wider">Ticket Confirmed</div>
                                </div>

                                {/* Active toast alert */}
                                <div className="bg-gradient-to-r from-blue-650 to-indigo-650 rounded-xl p-1.5 shadow-lg flex items-center gap-1.5 text-white animate-pulse">
                                  <FiBell size={9} className="shrink-0" />
                                  <div className="truncate">
                                    <div className="font-black text-[6.5px] leading-tight">SMTP Mail Sent</div>
                                    <div className="text-[5.5px] opacity-80 leading-none">Diagnostic Gate Verified</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Details Column */}
                    <div className={`lg:col-span-7 flex flex-col justify-between h-full space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div>
                        {/* Upper Badges Block */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                          <div className="flex flex-wrap gap-1.5">
                            {project.labels.slice(0, 3).map((lbl, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                                  isCommune
                                    ? "bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200/20 dark:border-blue-800/20"
                                    : "bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border border-purple-200/20 dark:border-purple-800/20"
                                }`}
                              >
                                {lbl}
                              </span>
                            ))}
                          </div>
                          
                          {/* Live Status Beacon */}
                          <div className="flex items-center gap-1.5 bg-gray-50/50 dark:bg-gray-950 px-2.5 py-1 rounded-lg border border-gray-200/20 dark:border-gray-900/80">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[8px] font-mono tracking-widest font-extrabold text-gray-550 dark:text-gray-400 uppercase">
                              {project.statusBadge}
                            </span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-1 leading-tight tracking-tight">
                          {project.title}
                        </h3>
                        
                        <div className="text-xs font-semibold text-gray-400 dark:text-gray-550 mb-2.5 flex items-center gap-2 tracking-wide">
                          <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                          {project.identityLabel}
                        </div>

                        <p className="text-gray-600 dark:text-gray-350 text-sm sm:text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Stack Badges Section */}
                      <div>
                        <h4 className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-550 mb-2">
                          Featured Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 7).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2.5 py-1 bg-gray-50 dark:bg-gray-900/40 border border-gray-200/25 dark:border-gray-800/40 rounded-lg text-xs font-semibold text-gray-650 dark:text-gray-400 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 7 && (
                            <span className="px-2.5 py-1 bg-gray-50 dark:bg-gray-900/40 border border-gray-200/25 dark:border-gray-800/40 rounded-lg text-xs font-bold text-gray-400 dark:text-gray-500 font-mono">
                              +{project.technologies.length - 7} MORE
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Links & CTAs */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className={`px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center`}
                        >
                          Explore Case Study
                        </button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 glass hover:bg-gray-100/50 dark:hover:bg-gray-900/35 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-200 text-center flex items-center justify-center gap-2 border border-gray-250/20 dark:border-gray-800/30"
                        >
                          <FiGithub size={16} />
                          <span>code_repo // github</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Details Modal Drawer Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 overflow-y-auto p-4 sm:p-6 flex justify-center items-start sm:items-center"
            onClick={() => {
              setSelectedProject(null);
              setActiveStep(0);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 25, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 25, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white dark:bg-gray-950 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative border border-gray-150/20 dark:border-gray-900 flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Gradient Block */}
              <div className={`h-28 bg-gradient-to-r ${selectedProject.gradient} p-6 flex justify-between items-start text-white shrink-0 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#ffffff15,transparent)]" />
                <div className="relative z-10">
                  <span className="px-3 py-1 rounded-full text-[9px] font-mono tracking-widest bg-white/20 uppercase font-black">
                    Diagnostic_Case_Study
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-1.5 truncate max-w-md sm:max-w-xl">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setActiveStep(0);
                  }}
                  className="p-2.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors duration-200 relative z-10"
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* Modal Body (Scrollable container) */}
              <div className="p-5 sm:p-6 space-y-5 text-gray-800 dark:text-gray-100 font-sans">
                
                {/* Visual Pipeline Stepper for Case Study workflows */}
                <div className="bg-gray-50/40 dark:bg-gray-950/60 p-4 rounded-2xl border border-gray-150/40 dark:border-gray-900 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <h4 className="text-sm font-extrabold text-gray-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <FiActivity size={16} className="text-blue-500 animate-pulse" />
                      Visual Implementation Workflow
                    </h4>
                    <span className="text-[9px] font-mono bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-black px-2.5 py-0.5 rounded-full border border-blue-200/10 dark:border-blue-800/10 uppercase tracking-wider">
                      Module Lifecycle Check
                    </span>
                  </div>

                  {/* Stepper buttons menu */}
                  <div className="grid grid-cols-4 gap-2 border-b border-gray-200/30 dark:border-gray-900 pb-2.5">
                    {activeModalSteps.map((step, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`flex flex-col items-center text-center p-1.5 rounded-xl transition-all duration-300 border ${
                          activeStep === idx 
                            ? "bg-white dark:bg-gray-900 shadow-md border-blue-500/20 text-blue-650 dark:text-blue-400 scale-[1.03]" 
                            : "text-gray-400 hover:text-gray-650 dark:hover:text-gray-300 border-transparent"
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg mb-1 ${activeStep === idx ? "bg-gradient-to-br from-blue-500 to-indigo-650 text-white shadow-sm" : "bg-gray-100/80 dark:bg-gray-900 text-gray-500"}`}>
                          {step.icon}
                        </div>
                        <span className="text-[7.5px] sm:text-[9.5px] font-bold truncate max-w-full uppercase tracking-wider">{step.title.split(" ")[0]}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Step preview layout */}
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-7 space-y-2">
                      <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-blue-500">Stage 0{activeStep + 1} {"//"} Lifecycle</div>
                      <h5 className="text-base font-extrabold text-gray-900 dark:text-white uppercase tracking-wide">{activeModalSteps[activeStep].title}</h5>
                      <p className="text-xs text-gray-550 dark:text-gray-400 leading-relaxed">
                        {activeModalSteps[activeStep].desc}
                      </p>
                    </div>
                    <div className="md:col-span-5 flex justify-center">
                      <div className="w-full max-w-[270px]">
                        {activeModalSteps[activeStep].ui}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Details section */}
                <div className="grid md:grid-cols-12 gap-4 sm:gap-6">
                  <div className="md:col-span-7 space-y-3">
                    <h4 className="text-base font-extrabold text-gray-950 dark:text-white uppercase tracking-wider">Project Narrative</h4>
                    <p className="text-xs sm:text-sm text-gray-550 dark:text-gray-400 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <div className="md:col-span-5 space-y-3 bg-gray-50/40 dark:bg-gray-950 p-4 rounded-2xl border border-gray-150/40 dark:border-gray-900">
                    <h4 className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-550">Technical Specifics</h4>
                    <div className="space-y-2.5 text-xs">
                      <div className="flex justify-between border-b border-gray-200/10 pb-1">
                        <span className="font-extrabold text-gray-900 dark:text-gray-300">Category:</span>
                        <span className="text-gray-550 dark:text-gray-400 font-semibold">{selectedProject.category}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200/10 pb-1">
                        <span className="font-extrabold text-gray-900 dark:text-gray-300">System Format:</span>
                        <span className="text-gray-550 dark:text-gray-400 font-semibold truncate max-w-[150px]">{selectedProject.identityLabel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-extrabold text-gray-900 dark:text-gray-300">Status Check:</span>
                        <span className="text-emerald-500 font-bold uppercase tracking-wider font-mono text-[10px]">Verified Online</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Architecture Stack */}
                <div className="space-y-3">
                  <h4 className="text-base font-extrabold text-gray-950 dark:text-white uppercase tracking-wider">System Architecture Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-200/10 dark:border-gray-800 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-350 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullet Feature Highlights */}
                <div className="space-y-3">
                  <h4 className="text-base font-extrabold text-gray-950 dark:text-white uppercase tracking-wider font-sans">Feature Modules Verified</h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-550 dark:text-gray-450">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 mt-1"><FiCheck size={14} className="stroke-[3]" /></span>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action button */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-900">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full px-6 py-3 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl text-center font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
                  >
                    <FiGithub size={16} />
                    <span>Browse Code Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
