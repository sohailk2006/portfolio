"use client";

import { motion } from "framer-motion";
import { 
  FiAward, 
  FiBookOpen, 
  FiShield, 
  FiTarget, 
  FiCpu, 
  FiTrendingUp, 
  FiLayers
} from "react-icons/fi";

const Achievements = () => {
  const stats = [
    {
      value: "9.36",
      label: "Intermediate CGPA",
      institution: "Sri Chaitanya College",
      icon: <FiTrendingUp className="w-6 h-6 text-emerald-400" />,
      gradient: "from-emerald-500/20 to-teal-400/20 hover:from-emerald-500 hover:to-teal-400",
      glow: "rgba(16,185,129,0.15)",
      textGradient: "from-emerald-400 to-teal-300"
    },
    {
      value: "9.20",
      label: "10th Grade CGPA",
      institution: "Sri Chaitanya School",
      icon: <FiAward className="w-6 h-6 text-blue-400" />,
      gradient: "from-blue-500/20 to-cyan-400/20 hover:from-blue-500 hover:to-cyan-400",
      glow: "rgba(59,130,246,0.15)",
      textGradient: "from-blue-400 to-cyan-300"
    },
    {
      value: "2",
      label: "Core Real-World Apps",
      institution: "Commune Connect & Kosmic Shine",
      icon: <FiLayers className="w-6 h-6 text-purple-400" />,
      gradient: "from-purple-500/20 to-fuchsia-400/20 hover:from-purple-500 hover:to-fuchsia-400",
      glow: "rgba(139,92,246,0.15)",
      textGradient: "from-purple-400 to-fuchsia-300"
    },
    {
      value: "5+",
      label: "Domain Certifications",
      institution: "NPTEL, HP, Vardhaman",
      icon: <FiShield className="w-6 h-6 text-orange-400" />,
      gradient: "from-orange-500/20 to-rose-400/20 hover:from-orange-500 hover:to-rose-400",
      glow: "rgba(249,115,22,0.15)",
      textGradient: "from-orange-400 to-rose-300"
    }
  ];

  const timelineData = [
    {
      title: "B.Tech CSE (AI & ML) Student",
      institution: "Vardhaman College of Engineering",
      period: "2024 - Present (Ongoing)",
      description: "Acquiring a deep academic foundation in computer science with a specialization in Artificial Intelligence and Machine Learning. Actively bridging computational theory with hands-on full-stack development and defensive security concepts.",
      details: ["AI & ML Core Concepts", "Autonomous Coursework", "Computational Logic"],
      icon: <FiCpu className="w-5 h-5" />,
      gradient: "from-purple-500 via-violet-600 to-indigo-650",
      glow: "shadow-purple-500/20"
    },
    {
      title: "Commune Connect SaaS Platform",
      institution: "Full-Stack Web Development",
      period: "Late 2025",
      description: "Designed, built, and deployed a modern community engagement and event discovery SaaS application. Engineered slot-conflict diagnostics logic, real-time message streams via Socket.io, and automated Nodemailer notification pipelines.",
      details: ["Next.js & React", "MongoDB Database", "Socket.io Webservices"],
      icon: <FiLayers className="w-5 h-5" />,
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      glow: "shadow-cyan-500/20"
    },
    {
      title: "Ethical Hacking Explorations",
      institution: "IIT Kharagpur • NPTEL Coursework",
      period: "Jul - Oct 2025",
      description: "Successfully completed NPTEL's academic course on Ethical Hacking with a consolidated score of 69%. Explored vulnerability analysis pipelines, cryptography fundamentals, network protocol security, and basic security configuration standards.",
      details: ["NPTEL Course Completion", "Elite Performance Score: 69%", "Network Security & Defense"],
      icon: <FiShield className="w-5 h-5" />,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      glow: "shadow-emerald-500/20"
    },
    {
      title: "Kosmic Shine Mobile App",
      institution: "Cross-Platform Mobile Development",
      period: "Mid 2025",
      description: "Developed a premium, cross-platform vehicle detailing marketplace application. Constructed utilizing Flutter and Dart for fluid UI/UX, integrated with Firebase, Google Maps API geographical sorting, and secure checkout frameworks.",
      details: ["Flutter Mobile SDK", "Firebase Backend", "Google Maps Integration"],
      icon: <FiTarget className="w-5 h-5" />,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glow: "shadow-purple-500/20"
    },
    {
      title: "24-Hour Hackathon Drill",
      institution: "TechIn Community • Vardhaman Connect",
      period: "February 2025",
      description: "Collaborated in an intensive, high-pressure collaborative sprint with student developers. Researched, designed, tested, and presented a functional software prototype while pitching architecture layout to evaluation panels.",
      details: ["Rapid Product Prototyping", "UI/UX Wireframing", "Group Collaboration & Pitch"],
      icon: <FiTrendingUp className="w-5 h-5" />,
      gradient: "from-rose-500 via-orange-500 to-amber-500",
      glow: "shadow-rose-500/20"
    },
    {
      title: "Intermediate Education (MPC)",
      institution: "Sri Chaitanya Junior College",
      period: "2022 - 2024",
      description: "Graduated high honors specialized in Mathematics, Physics, and Chemistry (MPC), building a strong analytical mindset, solid scholastic metrics, and rigorous logic foundations.",
      details: ["Meritorious 9.36/10.0 CGPA", "STEM Academic Focus", "Mathematical & Physics Theory"],
      icon: <FiBookOpen className="w-5 h-5" />,
      gradient: "from-blue-500 via-indigo-500 to-cyan-500",
      glow: "shadow-blue-500/20"
    },
    {
      title: "Secondary Board Excellence",
      institution: "Sri Chaitanya School",
      period: "2022",
      description: "Completed secondary education board assessments with high distinction. Highlighted primary computational logic, analytical discipline, and outstanding core scholarly aptitude.",
      details: ["Stellar 9.20/10.0 Board Score", "Primary Computational Math", "Secondary Academic Honors"],
      icon: <FiAward className="w-5 h-5" />,
      gradient: "from-amber-400 via-orange-500 to-yellow-500",
      glow: "shadow-amber-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 }
    }
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="achievements" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50 dark:bg-black/30 border-t border-gray-200/50 dark:border-gray-900/50">
      
      {/* Decorative cyber grids and glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/30 border border-violet-200/30 dark:border-violet-800/30 uppercase">
              Milestone Progression
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Academic & Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-500 to-emerald-400">
                Achievements
              </span>
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400">
              An authentic chronological overview of scholastic milestones, key engineering projects, and specialized domain training.
            </p>
          </motion.div>
        </div>

        {/* Dashboard Stats Panel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statItemVariants}
              whileHover={{ y: -5 }}
              className="relative group rounded-3xl p-[1px] transition-all duration-300"
              style={{
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.03)`,
              }}
            >
              {/* Active glow hover border overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-600/30 via-blue-500/30 to-emerald-400/30 opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
              
              {/* Card Body */}
              <div className="relative rounded-[23px] bg-white dark:bg-gray-950 p-5 h-full flex flex-col justify-between border border-gray-200/40 dark:border-gray-900/80 shadow-md">
                
                <div className="flex justify-between items-start mb-2.5">
                  <div className={`p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800/80`}>
                    {stat.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 dark:text-gray-550 uppercase tracking-wider">
                    Credential
                  </span>
                </div>

                <div>
                  <h3 className={`text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br ${stat.textGradient}`}>
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-gray-950 dark:text-white leading-snug">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-450 leading-normal">
                    {stat.institution}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Component */}
        <div className="relative">
          
          {/* Futuristic timeline spine */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-violet-600 via-blue-500 to-emerald-400 rounded-full opacity-30 dark:opacity-20 pointer-events-none" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={timelineItemVariants}
                  className="relative flex flex-col md:flex-row items-center justify-between group"
                >
                  
                  {/* Timeline circular node connection */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 group-hover:scale-110">
                    {/* Ring scale pulsing indicator */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} opacity-15 blur-sm transition-opacity duration-300 group-hover:opacity-40`} />
                    <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-[4px]`} />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} animate-pulse opacity-10`} />
                    
                    {/* Core icon */}
                    <div className="relative w-8 h-8 rounded-full bg-white dark:bg-gray-950 border border-gray-250 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-md transition-colors duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-100 dark:group-hover:from-gray-900 dark:group-hover:to-gray-950">
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </span>
                    </div>
                  </div>

                  {/* Card wrapper layout */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-14 md:mr-auto' : 'md:pl-14 md:ml-auto'}`}>
                    
                    <div className="relative rounded-3xl p-[1px] transition-all duration-300 hover:scale-[1.01]">
                      {/* Neon dynamic border glow overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-300 blur-[2px]`} />
                      
                      {/* Card block */}
                      <div className="relative rounded-[23px] bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl p-5 md:p-6 border border-gray-250/50 dark:border-gray-900/60 shadow-lg group-hover:shadow-xl dark:group-hover:shadow-black/50 transition-all duration-300">
                        
                        <div className="flex flex-col items-start mb-2.5">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-white bg-gradient-to-r ${item.gradient} shadow-sm ${item.glow} mb-2`}>
                            {item.period}
                          </span>
                          <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white leading-tight text-left">
                            {item.title}
                          </h3>
                          <p className="text-xs text-violet-600 dark:text-violet-400 font-bold mt-1 text-left">
                            {item.institution}
                          </p>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 text-left">
                          {item.description}
                        </p>
                        
                        {/* Highlight bullet badges */}
                        <div className="flex flex-wrap gap-2 justify-start">
                          {item.details.map((detail, dIdx) => (
                            <span 
                              key={dIdx} 
                              className="text-[10px] sm:text-xs px-2.5 py-1 bg-gray-50 dark:bg-gray-900/40 text-gray-600 dark:text-gray-300 border border-gray-250/30 dark:border-gray-800/30 rounded-xl font-medium tracking-wide shadow-sm"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
