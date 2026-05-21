"use client";

import { motion, Variants } from "framer-motion";
import { 
  FiBookOpen, 
  FiAward, 
  FiCpu, 
  FiShield, 
  FiCode, 
  FiActivity,
  FiCheckCircle,
  FiCalendar
} from "react-icons/fi";

const education = [
  {
    degree: "B.Tech in CSE (AI & ML)",
    institution: "Vardhaman College of Engineering",
    period: "2024 - Present",
    status: "Ongoing",
    desc: "VA707 & VA608 core pipelines, specialized neural networks study, advanced data structure models, and algorithm design.",
    color: "from-blue-500 to-indigo-600",
    glowColor: "shadow-blue-500/10",
    badge: "Student ID: 24881A6636"
  },
  {
    degree: "Intermediate Education",
    institution: "Sri Chaitanya Junior College",
    period: "2022 - 2024",
    status: "Completed",
    desc: "Rigorous focus on mathematics, logic, and physical sciences forming solid analytical and problem-solving bedrocks.",
    cgpa: "9.36 CGPA",
    color: "from-purple-500 to-pink-600",
    glowColor: "shadow-purple-500/10"
  },
  {
    degree: "10th Grade (Secondary)",
    institution: "Sri Chaitanya School",
    period: "Completed",
    status: "Completed",
    desc: "Early foundational computation, algebraic analysis, scientific principles, and logic development.",
    cgpa: "9.2 CGPA",
    color: "from-pink-500 to-red-600",
    glowColor: "shadow-pink-500/10"
  }
];

const focusAreas = [
  {
    title: "Artificial Intelligence",
    icon: <FiCpu className="w-5 h-5 text-blue-500" />,
    desc: "Building intelligent pipelines, neural layers, deep cognitive networks, and predictive systems.",
    techs: ["Deep Learning", "Data Science", "Neural Layers", "Model Architecture"]
  },
  {
    title: "Cybersecurity",
    icon: <FiShield className="w-5 h-5 text-emerald-500" />,
    desc: "Hardening systemic borders, performing ethical hacking drills, and preparing secure digital frameworks.",
    techs: ["Vulnerability Audits", "Ethical Hacking", "System Hardening", "Threat Analysis"]
  },
  {
    title: "Full-Stack Dev",
    icon: <FiCode className="w-5 h-5 text-purple-500" />,
    desc: "Developing frosted high-fidelity client-side interfaces backed by robust database architectures.",
    techs: ["React / Next.js", "API Systems", "SQL / NoSQL", "State Orchestration"]
  }
];

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      
      {/* Background radial overlays */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Modern Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border border-blue-200/30 dark:border-blue-800/30 uppercase">
              Profile Registry
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                Mohammed Sohail Khan
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Cinematic Grid Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column - Dynamic Bio & Telemetry Badge */}
          <motion.div 
            className="lg:col-span-7 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Story Card 1 */}
            <motion.div className="glass rounded-2xl p-5 sm:p-6 border border-gray-200/20 dark:border-gray-800/40 relative overflow-hidden" variants={cardVariants}>
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <FiCpu className="w-20 h-20 text-blue-500" />
              </div>
              <div className="flex items-center gap-3 mb-2.5">
                <FiBookOpen className="text-blue-500" size={24} />
                <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white">System Bio & Journey</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-350 leading-relaxed text-sm sm:text-base">
                I am currently pursuing a **B.Tech in CSE (AI & ML)** at **Vardhaman College of Engineering**. My technical foundation is driven by a deep analytical interest in how neural systems evolve, which drew me to specialize in **Artificial Intelligence** models and cognitive computation pipelines.
              </p>
            </motion.div>

            {/* Story Card 2 */}
            <motion.div className="glass rounded-2xl p-5 sm:p-6 border border-gray-200/20 dark:border-gray-800/40 relative overflow-hidden" variants={cardVariants}>
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <FiShield className="w-20 h-20 text-emerald-500" />
              </div>
              <div className="flex items-center gap-3 mb-2.5">
                <FiShield className="text-emerald-500" size={24} />
                <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white">Defensive Integration</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-355 leading-relaxed text-sm sm:text-base">
                Bridging machine learning with strict **Cybersecurity Hardening** protocols forms the core of my research. I believe that building intelligent software requires equal focus on vulnerability defense, system hardening, and secure API orchestrations to block active operational threats.
              </p>
            </motion.div>

            {/* Story Card 3 */}
            <motion.div className="glass rounded-2xl p-5 sm:p-6 border border-gray-200/20 dark:border-gray-800/40 relative overflow-hidden" variants={cardVariants}>
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <FiCode className="w-20 h-20 text-purple-500" />
              </div>
              <div className="flex items-center gap-3 mb-2.5">
                <FiCode className="text-purple-500" size={24} />
                <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white">Practical Engineering</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-355 leading-relaxed text-sm sm:text-base">
                Beyond purely theoretical models, I specialize in actively converting complex technology ideas into fully functional web applications. I dedicate sprints to **hackathons**, building frosted glassmorphic client-side portals backed by secure database query systems.
              </p>
            </motion.div>

            {/* Academic & Professional Stats Dock */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1"
              variants={cardVariants}
            >
              <div className="bg-gray-50/50 dark:bg-gray-950/20 border border-gray-200/30 dark:border-gray-800/40 p-2.5 rounded-xl text-center backdrop-blur-sm">
                <span className="block text-xl font-black text-blue-500">9.36</span>
                <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase font-semibold mt-0.5 block">Inter CGPA</span>
              </div>
              <div className="bg-gray-50/50 dark:bg-gray-950/20 border border-gray-200/30 dark:border-gray-800/40 p-2.5 rounded-xl text-center backdrop-blur-sm">
                <span className="block text-xl font-black text-purple-500">9.20</span>
                <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase font-semibold mt-0.5 block">School CGPA</span>
              </div>
              <div className="bg-gray-50/50 dark:bg-gray-950/20 border border-gray-200/30 dark:border-gray-800/40 p-2.5 rounded-xl text-center backdrop-blur-sm">
                <span className="block text-xl font-black text-emerald-500">69%</span>
                <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase font-semibold mt-0.5 block">NPTEL Elite</span>
              </div>
              <div className="bg-gray-50/50 dark:bg-gray-950/20 border border-gray-200/30 dark:border-gray-800/40 p-2.5 rounded-xl text-center backdrop-blur-sm">
                <span className="block text-xl font-black text-pink-550">81.5%</span>
                <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase font-semibold mt-0.5 block">HTML/CSS Exam</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column - High-Tech Cyber Timeline */}
          <div className="lg:col-span-5 relative pl-8 border-l-2 border-dashed border-gray-200 dark:border-gray-800 space-y-5 lg:mt-0 mt-6">
            
            {/* Ambient Line highlight overlay */}
            <div className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent pointer-events-none" />

            <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[100%] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30 text-[9px] font-mono tracking-widest text-blue-500 uppercase font-bold">
              Timeline_Registry
            </div>

            {education.map((edu, index) => {
              const isOngoing = edu.status === "Ongoing";
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Glowing Anchor Status Node */}
                  <div className="absolute left-[-42px] top-4 z-10">
                    <span className="relative flex h-5 w-5">
                      {isOngoing ? (
                        <>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-white dark:border-gray-900 shadow-md"></span>
                        </>
                      ) : (
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 border-2 border-white dark:border-gray-900 shadow-md flex items-center justify-center">
                          <FiCheckCircle className="text-white w-3 h-3" />
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Node Glassmorphic Card */}
                  <div className={`glass rounded-2xl p-4 border border-gray-250/20 dark:border-gray-800/40 relative shadow-lg hover:scale-[1.01] transition-all duration-300 ${edu.glowColor}`}>
                    
                    {/* Period and Status Tag */}
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <FiCalendar className="w-3 h-3 text-blue-500" />
                        <span className="text-[9px] font-mono tracking-wider font-semibold uppercase">{edu.period}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[8px] font-mono tracking-wider uppercase font-bold ${
                        isOngoing 
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-500"
                          : "bg-blue-500/10 border border-blue-500/20 text-blue-500"
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Degree and Institution */}
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mt-0.5 uppercase tracking-wider leading-none">
                      {edu.institution}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mt-1.5 text-xs leading-relaxed">
                      {edu.desc}
                    </p>

                    {/* Footer Metrics */}
                    {(edu.cgpa || edu.badge) && (
                      <div className="mt-2.5 pt-1.5 border-t border-gray-100/5 dark:border-gray-900/5 flex flex-wrap gap-1.5 items-center justify-between">
                        {edu.cgpa && (
                          <div className="flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-lg">
                            <FiAward className="text-yellow-600 dark:text-yellow-400 w-3 h-3" />
                            <span className="text-[10px] text-yellow-600 dark:text-yellow-400 font-bold font-mono leading-none">
                              {edu.cgpa}
                            </span>
                          </div>
                        )}
                        {edu.badge && (
                          <span className="text-[8px] font-mono tracking-widest text-gray-400 dark:text-gray-550 uppercase font-semibold">
                            {edu.badge}
                          </span>
                        )}
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

        {/* Section Divider Accent */}
        <div className="relative py-4 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200/30 dark:border-gray-800/30"></div>
          </div>
          <div className="relative px-4 bg-white dark:bg-black text-gray-400 dark:text-gray-500 text-[10px] font-mono uppercase tracking-widest flex items-center space-x-2">
            <FiActivity className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
            <span>Operational_Focus_Metrics</span>
          </div>
        </div>

        {/* Technology Focus Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="glass rounded-2xl p-4 border border-gray-200/20 dark:border-gray-800/40 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-extrabold text-gray-900 dark:text-white uppercase tracking-wider">
                    {area.title}
                  </h4>
                  <div className="p-1.5 bg-gray-50 dark:bg-gray-950/40 rounded-lg border border-gray-200/30 dark:border-gray-800/30">
                    {area.icon}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-450 text-xs leading-relaxed mb-3">
                  {area.desc}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1">
                {area.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-[8px] font-semibold bg-gray-100/50 dark:bg-gray-900/30 px-1.5 py-0.5 rounded text-gray-500 dark:text-gray-400 border border-gray-200/10 dark:border-gray-800/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
