"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  FiCode, 
  FiShield, 
  FiCpu, 
  FiTerminal, 
  FiActivity, 
  FiCheckCircle, 
  FiDatabase,
  FiTrendingUp,
  FiPocket
} from "react-icons/fi";
import { 
  SiPython, 
  SiJavascript, 
  SiCplusplus, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiTypescript
} from "react-icons/si";
import { FaBrain, FaRobot, FaLock, FaGlobe } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  description: string;
  status: string;
  rating: string;
  libraries: string[];
  application: string;
  logs: string[];
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string; // Tailwind class
  glowColor: string; // Custom glow ring
  accentColor: string; // Text color representation
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Foundations & Languages",
    icon: <FiCode className="w-5 h-5" />,
    color: "from-blue-500 to-indigo-600",
    glowColor: "shadow-blue-500/20 border-blue-500/30",
    accentColor: "text-blue-500",
    skills: [
      {
        name: "Python",
        icon: <SiPython className="w-8 h-8 text-blue-400" />,
        level: 90,
        description: "Primary engine for building intelligent neural networks, data analysis tools, and automated system scripts.",
        status: "Active / Calibrated",
        rating: "Advanced Systems",
        libraries: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-Learn"],
        application: "Autonomous neural pipelines, algorithmic predictive modeling, and system analytics.",
        logs: [
          "[INFO] Booting PyEngine v3.12...",
          "[OK] Thread calibration complete: 98% efficiency",
          "[SEC] Models locked in defensive memory space",
          "[STATUS] Active AI predictive metrics stream online"
        ]
      },
      {
        name: "C++",
        icon: <SiCplusplus className="w-8 h-8 text-indigo-400" />,
        level: 80,
        description: "High-performance systems programming, optimized memory allocation, and algorithmic structures.",
        status: "Stable / Optimized",
        rating: "Core Systems Architect",
        libraries: ["STL", "Data Structures", "Dynamic Allocation", "Pointer Models"],
        application: "Developing highly optimized calculation routines and lightweight local desktop integrations.",
        logs: [
          "[LOAD] Initializing static compiler variables...",
          "[OK] Memory allocation checks: 0 leaks detected",
          "[STABLE] CPU clock thread optimized successfully",
          "[STATUS] System engine fully ready for compilation"
        ]
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-8 h-8 text-yellow-500" />,
        level: 88,
        description: "Dynamic web scripting, client orchestrations, and interactive front-end engine features.",
        status: "Active / Scaled",
        rating: "Interactive Logic Engine",
        libraries: ["ES6+", "Async / Await", "DOM Orchestration", "Event Pipelines"],
        application: "Enforcing fluid interactive page metrics and fast JSON response handling.",
        logs: [
          "[BOOT] JavaScript Event Loop active...",
          "[OK] DOM hydration state parsed successfully",
          "[LOAD] Initializing event listening arrays",
          "[STATUS] Rendering logic running at 60 FPS"
        ]
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-8 h-8 text-blue-500" />,
        level: 85,
        description: "Strict typesafe client-side structures, preventing interface anomalies and model mismatch warnings.",
        status: "Strict / Active",
        rating: "Typesafe Architecture",
        libraries: ["Strict Interfaces", "Generics", "Type Guards", "Namespace Models"],
        application: "Scaling medium to large web portfolios without structural typescript lint crashes.",
        logs: [
          "[COMPILER] Initializing TS configuration compiler...",
          "[OK] 0 typesafe mismatches or implicit-any errors found",
          "[STABLE] Type structures integrated with server models",
          "[STATUS] Strict verification gates fully armed"
        ]
      }
    ]
  },
  {
    title: "Frameworks & Web",
    icon: <FiCpu className="w-5 h-5" />,
    color: "from-cyan-400 to-blue-500",
    glowColor: "shadow-cyan-500/20 border-cyan-500/30",
    accentColor: "text-cyan-400",
    skills: [
      {
        name: "React",
        icon: <SiReact className="w-8 h-8 text-cyan-400 animate-spin-slow" />,
        level: 90,
        description: "Reusable component ecosystems, optimized virtual DOM mappings, and state orchestrators.",
        status: "Active / Hydrated",
        rating: "Component Specialist",
        libraries: ["React Hooks", "Context API", "Redux Toolkit", "Framer Motion"],
        application: "Assembling modular glassmorphic client dashboards and stateful interfaces.",
        logs: [
          "[V-DOM] Initializing Virtual DOM state comparison...",
          "[OK] Component state tree resolved in 4.2ms",
          "[STABLE] Props distribution pathways aligned",
          "[STATUS] Client hydration complete, listening for hooks"
        ]
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-8 h-8 text-gray-300" />,
        level: 85,
        description: "Production-ready server-side framework, rendering server component hierarchies and route handlers.",
        status: "Production Build / Ready",
        rating: "Full-Stack Frameworks",
        libraries: ["App Router", "Server Actions", "Static Site Generation", "API Routing"],
        application: "Deploying high-speed production portfolios utilizing static-regeneration protocols.",
        logs: [
          "[SERVER] Initializing Next.js Route handlers...",
          "[OK] Server-Side Component Tree pre-rendered successfully",
          "[SEC] API routing paths locked behind local middlewares",
          "[STATUS] Production bundle initialized (Exit Code 0)"
        ]
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-8 h-8 text-emerald-400" />,
        level: 82,
        description: "Scalable runtime for custom database bridges, secure authentication systems, and API structures.",
        status: "Stable / Server Ready",
        rating: "Backend Logic Core",
        libraries: ["Express.js", "JWT Cryptography", "CORS Middleware", "File Stream IO"],
        application: "Constructing robust server microservices and parsing payload structures securely.",
        logs: [
          "[BACKEND] Launching Node cluster...",
          "[OK] Listening on port: 5000 successfully",
          "[SEC] JWT key security handshakes calibrated",
          "[STATUS] API listener active, parsing client streams"
        ]
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-8 h-8 text-cyan-300" />,
        level: 92,
        description: "Utility-first design scaling, enabling fluid responsive viewports and sleek neon layouts.",
        status: "Optimized / Fluid",
        rating: "UI Styling Specialist",
        libraries: ["Custom Configs", "JIT Engine", "Fluid Variables", "Media Queries"],
        application: "Writing consistent modern style systems, glassmorphism filters, and dynamic media grids.",
        logs: [
          "[CSS] Booting JIT Tailwind compiler...",
          "[OK] Style tokens compiled in 1.8ms",
          "[STABLE] Media queries mapped across responsive sizes",
          "[STATUS] Design systems matching 2026 aesthetics"
        ]
      }
    ]
  },
  {
    title: "Mobile & Platforms",
    icon: <FiDatabase className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    glowColor: "shadow-purple-500/20 border-purple-500/30",
    accentColor: "text-purple-500",
    skills: [
      {
        name: "Flutter",
        icon: <SiFlutter className="w-8 h-8 text-cyan-400" />,
        level: 80,
        description: "Cross-platform mobile applications, parsing fluid animations across native iOS and Android layers.",
        status: "Active / Native",
        rating: "Mobile App Engineer",
        libraries: ["Dart Core", "Bloc Pattern", "Provider State", "Custom Canvas"],
        application: "Designing portable application prototypes and syncing live backend states.",
        logs: [
          "[FLUTTER] Launching mobile compilation pipeline...",
          "[OK] Android/iOS native asset packs compiled",
          "[STABLE] Global state Bloc provider initialized",
          "[STATUS] Native app active on physical hardware emulator"
        ]
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-8 h-8 text-green-500" />,
        level: 82,
        description: "NoSQL document store, modeling complex schemas and execution of dynamic aggregation routines.",
        status: "Online / Connected",
        rating: "NoSQL Architect",
        libraries: ["Mongoose Engine", "Aggregation Pipelines", "Indexing", "Atlas Cloud"],
        application: "Storing platform analytics readouts and project information modules.",
        logs: [
          "[MONGO] Connecting to Atlas Cluster...",
          "[OK] Connection handshake established successfully",
          "[LOAD] Loading collection schemas and static indexes",
          "[STATUS] Query execution speeds: <2ms latency"
        ]
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="w-8 h-8 text-amber-500" />,
        level: 85,
        description: "BaaS database suite, syncing live chat engines, server authentication, and storage buckets.",
        status: "Online / Active",
        rating: "Cloud Services Integrator",
        libraries: ["Firestore Database", "Firebase Auth Engine", "Cloud Functions", "Asset Storage"],
        application: "Deploying rapid server-less database setups with native security parameters.",
        logs: [
          "[FIREBASE] Connecting database cloud client...",
          "[OK] Security rules verified & active",
          "[LOAD] Authenticated user registries synced",
          "[STATUS] Real-time sockets monitoring active payload streams"
        ]
      }
    ]
  },
  {
    title: "Specialized Domains",
    icon: <FiShield className="w-5 h-5" />,
    color: "from-red-500 to-rose-600",
    glowColor: "shadow-red-500/20 border-red-500/30",
    accentColor: "text-red-500",
    skills: [
      {
        name: "AI/ML Systems",
        icon: <FaBrain className="w-8 h-8 text-blue-400" />,
        level: 88,
        description: "Foundational machine learning pipelines, building supervised regressors, neural layouts, and cognitive processors.",
        status: "Calibrated / Running",
        rating: "AI Specialist",
        libraries: ["Deep Learning Models", "Model Hyperparameters", "Data Preprocessing", "Neural Layers"],
        application: "Deploying analytics predictors and cognitive pattern analysis on real-world inputs.",
        logs: [
          "[COGNITIVE] Checking neural weight parameters...",
          "[OK] Multi-layer classification threshold optimized",
          "[STABLE] Model learning curves converging smoothly",
          "[STATUS] Supervised training accuracy: 94.6% stable"
        ]
      },
      {
        name: "Cybersecurity",
        icon: <FaLock className="w-8 h-8 text-red-500" />,
        level: 82,
        description: "System defense hardening, scanning ports, performing secure audits, and integrating defensive headers.",
        status: "Armed / Defensive",
        rating: "Defensive Security Specialist",
        libraries: ["OWASP Testing", "Encryption Protocols", "Port Auditing", "Secure Headers"],
        application: "Analyzing API vulnerability points and verifying secure data transaction flows.",
        logs: [
          "[FIREWALL] Initializing integrity scanners...",
          "[OK] 0 malicious injection parameters detected",
          "[SEC] HTTPS CORS and CSP header rules fully active",
          "[STATUS] Hardened defensive boundaries armed"
        ]
      },
      {
        name: "Full-Stack Dev",
        icon: <FiCpu className="w-8 h-8 text-purple-400" />,
        level: 86,
        description: "Engineering cohesive software architectures, handling database connections, routing, and modern interfaces.",
        status: "Active / Orchestrated",
        rating: "Full-Stack Architect",
        libraries: ["System Architectures", "API Endpoints", "Database Models", "Interactive UI"],
        application: "Deploying high-speed, secure, full-stack applications with robust telemetry backings.",
        logs: [
          "[ORCHESTRATOR] Launching system design modules...",
          "[OK] Backend endpoints successfully connected to Client layers",
          "[STABLE] Data transaction bridges verified and operational",
          "[STATUS] System load balance optimized, operational"
        ]
      }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<Skill>(skillCategories[0].skills[0]);
  const [liveConsoleLogs, setLiveConsoleLogs] = useState<string[]>([]);
  
  // Update console logs when active/hovered skill changes
  useEffect(() => {
    if (hoveredSkill) {
      setLiveConsoleLogs([]);
      let logIndex = 0;
      const interval = setInterval(() => {
        if (logIndex < hoveredSkill.logs.length) {
          setLiveConsoleLogs(prev => [...prev, hoveredSkill.logs[logIndex]]);
          logIndex++;
        } else {
          clearInterval(interval);
        }
      }, 350);
      
      return () => clearInterval(interval);
    }
  }, [hoveredSkill]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      
      {/* Background Cyber Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] opacity-60 pointer-events-none" />
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border border-blue-200/30 dark:border-emerald-800/30 uppercase">
              Capability Matrix
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Skills &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                Technologies
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Categories Tab Dock */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-1.5 p-1.5 bg-gray-50/80 dark:bg-gray-950/40 border border-gray-200/40 dark:border-gray-800/50 backdrop-blur-md rounded-2xl w-full max-w-3xl">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setHoveredSkill(category.skills[0]);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeTab === index 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-[1.02] shadow-blue-500/10` 
                    : "text-gray-550 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/30"
                }`}
              >
                <span className="opacity-80">{category.icon}</span>
                <span className="whitespace-nowrap tracking-wide">{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Command Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Side: Diagnostic Telemetry Console */}
          <motion.div 
            className="lg:col-span-5 glass rounded-3xl p-4 sm:p-5 border border-gray-250/20 dark:border-gray-800/40 flex flex-col justify-between relative overflow-hidden backdrop-blur-md bg-gray-50/20 dark:bg-black/45"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Telemetry Grid Background Overlay */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <FiTerminal className="w-36 h-36 text-gray-500" />
            </div>

            <div>
              {/* Console Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100/10 dark:border-gray-800/30 mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase font-bold">
                    Telemetry_Diagnostic_Console
                  </span>
                </div>
                <div className="text-[8px] font-mono text-gray-550 dark:text-gray-550 uppercase tracking-widest">
                  SYS_CALIBRATION_OK
                </div>
              </div>

              {/* Skill Core Badge */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white dark:bg-gray-950/80 rounded-2xl border border-gray-250/10 dark:border-gray-800/30 shadow-md">
                  {hoveredSkill?.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white leading-none mb-1 flex items-center gap-2">
                    {hoveredSkill?.name}
                    <span className="text-[10px] font-mono font-normal tracking-wide px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200/40 dark:border-gray-800 text-gray-400 dark:text-gray-500">
                      {hoveredSkill?.rating}
                    </span>
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-blue-500 dark:text-blue-400">
                    Category // {skillCategories[activeTab].title}
                  </span>
                </div>
              </div>

              {/* Specific Skill Overview */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-[10px] font-mono text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">
                    Functional_Capability
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {hoveredSkill?.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">
                    Primary_Ecosystem_Application
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    {hoveredSkill?.application}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">
                    Integrated_Libraries_&_Modules
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {hoveredSkill?.libraries.map((lib, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] font-mono px-2 py-1 rounded bg-gray-100/50 dark:bg-gray-950 border border-gray-200/30 dark:border-gray-800/40 text-gray-600 dark:text-gray-400 font-semibold"
                      >
                        {lib}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Terminal Output Console */}
            <div className="mt-4">
              <div className="bg-gray-950 dark:bg-black border border-gray-250/20 dark:border-gray-900 rounded-xl p-3 font-mono text-[10px] leading-relaxed text-emerald-400 min-h-[105px] flex flex-col justify-end shadow-inner relative overflow-hidden">
                <div className="absolute top-2 left-3 flex gap-1.5 opacity-50">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                </div>
                <div className="absolute top-1 right-3 text-[7px] text-gray-600 dark:text-gray-500 tracking-widest">
                  LIVE_SYS_IO
                </div>
                <div className="space-y-1">
                  {liveConsoleLogs.map((log, index) => (
                    <div key={index} className="flex gap-2">
                      <span className="text-gray-650 dark:text-gray-500">{`>`}</span>
                      <span>{log}</span>
                    </div>
                  ))}
                  <div className="flex gap-2 items-center">
                    <span className="text-gray-650 dark:text-gray-500">{`>`}</span>
                    <span className="w-1.5 h-3 bg-emerald-400 animate-pulse inline-block"></span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Side: Skill Cards Grid */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid sm:grid-cols-2 gap-4"
              >
                {skillCategories[activeTab].skills.map((skill, index) => {
                  const isHovered = hoveredSkill?.name === skill.name;
                  
                  // Math for circular SVG gauge
                  const radius = 20;
                  const circumference = 2 * Math.PI * radius;
                  const offset = circumference - (skill.level / 100) * circumference;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onClick={() => setHoveredSkill(skill)}
                      className={`glass rounded-2xl p-4 border relative overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-md hover:scale-[1.02] ${
                        isHovered 
                          ? `bg-gray-50/50 dark:bg-gray-950/20 border-${skillCategories[activeTab].accentColor}/30 shadow-lg ${skillCategories[activeTab].glowColor}` 
                          : "border-gray-250/20 dark:border-gray-800/40 hover:border-gray-300 dark:hover:border-gray-700"
                      }`}
                    >
                      {/* Interactive Subtle Glow Spot */}
                      {isHovered && (
                        <div className="absolute top-[-50px] right-[-50px] w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-[0.08] dark:opacity-[0.15] blur-2xl pointer-events-none" />
                      )}

                      {/* Header elements */}
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-gray-100/50 dark:bg-gray-900 rounded-xl border border-gray-200/10 dark:border-gray-800 shadow-sm">
                            {skill.icon}
                          </div>
                          <div>
                            <h4 className="text-base font-extrabold text-gray-900 dark:text-white leading-tight">
                              {skill.name}
                            </h4>
                            <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
                              {skill.status}
                            </span>
                          </div>
                        </div>

                        {/* Circular Radial Gauge */}
                        <div className="relative w-12 h-12 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90">
                            {/* Track Circle */}
                            <circle
                              cx="24"
                              cy="24"
                              r={radius}
                              className="stroke-gray-100 dark:stroke-gray-800/60"
                              strokeWidth="3.5"
                              fill="transparent"
                            />
                            {/* Animated Value Circle */}
                            <motion.circle
                              cx="24"
                              cy="24"
                              r={radius}
                              className={`stroke-gradient bg-gradient-to-r ${
                                isHovered 
                                  ? skillCategories[activeTab].accentColor === "text-blue-500" 
                                    ? "stroke-blue-500" 
                                    : skillCategories[activeTab].accentColor === "text-cyan-400" 
                                      ? "stroke-cyan-400" 
                                      : skillCategories[activeTab].accentColor === "text-purple-500" 
                                        ? "stroke-purple-500" 
                                        : "stroke-red-500"
                                  : "stroke-gray-400 dark:stroke-gray-650"
                              }`}
                              strokeWidth="3.5"
                              fill="transparent"
                              strokeDasharray={circumference}
                              initial={{ strokeDashoffset: circumference }}
                              animate={{ strokeDashoffset: offset }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </svg>
                          <span className="absolute text-[10px] font-black font-mono text-gray-800 dark:text-gray-200">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Brief description in card */}
                      <p className="text-xs text-gray-550 dark:text-gray-400 leading-relaxed mb-3">
                        {skill.description.length > 90 
                          ? `${skill.description.substring(0, 87)}...` 
                          : skill.description
                        }
                      </p>

                      {/* Mini tech badges list */}
                      <div className="flex flex-wrap gap-1">
                        {skill.libraries.slice(0, 3).map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-gray-50 dark:bg-gray-900 border border-gray-200/20 dark:border-gray-800/30 text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Section Divider Accent */}
        <div className="relative py-8 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-100 dark:border-gray-900/50"></div>
          </div>
          <div className="relative px-6 bg-white dark:bg-black text-gray-400 dark:text-gray-500 text-xs font-mono uppercase tracking-widest flex items-center space-x-2">
            <FiActivity className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span>Capability_Diagnostics_Active</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
