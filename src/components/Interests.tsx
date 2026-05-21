"use client";

import { motion } from "framer-motion";
import { 
  FiCpu, 
  FiShield, 
  FiTerminal, 
  FiLayers, 
  FiSmartphone, 
  FiZap, 
  FiGlobe,
  FiAward
} from "react-icons/fi";

const Interests = () => {
  const interestsList = [
    {
      title: "Artificial Intelligence",
      description: "Designing smart neural systems and cognitive computing flows that mimic advanced decision logic.",
      icon: <FiCpu className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600",
      glowColor: "group-hover:shadow-blue-500/20"
    },
    {
      title: "Cybersecurity",
      description: "Securing architectural borders and hardening systems against active operational threads.",
      icon: <FiShield className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      glowColor: "group-hover:shadow-emerald-500/20"
    },
    {
      title: "Ethical Hacking",
      description: "Finding vulnerabilities, testing defenses, and engineering bulletproof firewall configurations.",
      icon: <FiTerminal className="w-6 h-6" />,
      gradient: "from-red-500 to-rose-600",
      glowColor: "group-hover:shadow-rose-500/20"
    },
    {
      title: "Full Stack Development",
      description: "Pairing high-fidelity responsive user interfaces with solid, secure back-end database systems.",
      icon: <FiLayers className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-600",
      glowColor: "group-hover:shadow-purple-500/20"
    },
    {
      title: "Mobile App Development",
      description: "Creating highly optimized native interfaces that bring robust logic directly onto hand-held devices.",
      icon: <FiSmartphone className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-600",
      glowColor: "group-hover:shadow-orange-500/20"
    },
    {
      title: "Real-world Problem Solving",
      description: "Converting complicated engineering bottlenecks into seamless digital solutions for actual users.",
      icon: <FiZap className="w-6 h-6" />,
      gradient: "from-yellow-400 to-amber-500",
      glowColor: "group-hover:shadow-yellow-500/20"
    },
    {
      title: "Technology Innovation",
      description: "Actively researching bleeding-edge frameworks to lead design trends instead of just following them.",
      icon: <FiGlobe className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "group-hover:shadow-cyan-500/20"
    }
  ];

  return (
    <section id="interests" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 rounded-full bg-indigo-500/5 dark:bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 rounded-full bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Storytelling Section Flow Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200/30 dark:border-indigo-800/30 uppercase">
              Drive & Inspiration
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Vision &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Core Focus
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400">
              The intellectual drivers, design philosophies, and technological areas that form the bedrock of my engineering journey.
            </p>
          </motion.div>
        </div>

        {/* Storytelling Flow: Vision Showcase First */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative rounded-3xl p-[1px] overflow-hidden"
          >
            {/* Pulsing gradient vision border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 dark:opacity-40 blur-[1px]" />
            
            {/* Vision Container */}
            <div className="relative rounded-[23px] bg-gradient-to-br from-gray-55/80 via-white to-gray-50/50 dark:from-gray-950/80 dark:via-gray-950 dark:to-gray-900/80 backdrop-blur-xl p-5 md:p-6 border border-gray-150/40 dark:border-gray-800/40 flex flex-col md:flex-row items-center gap-5 justify-between shadow-2xl">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    <FiAward className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Grand Vision
                  </span>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-gray-900 dark:text-white leading-tight font-serif tracking-wide italic">
                  &ldquo;To become an expert in Artificial Intelligence and Cybersecurity while building impactful technology products that solve real-world problems.&rdquo;
                </h3>
                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
                  I believe that true engineering is not just about writing clean modules, but harnessing intelligence to build bulletproof defense strategies and digital utilities that directly improve human lives.
                </p>
              </div>
 
              {/* Decorative dynamic orb */}
              <div className="relative w-32 h-32 flex items-center justify-center pointer-events-none select-none">
                <div className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 blur-md opacity-30 animate-spin-slow" />
                <div className="absolute w-20 h-20 rounded-full bg-white dark:bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                  <FiCpu className="w-8 h-8 text-indigo-500 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
 
        {/* Interests Cards Section */}
        <div>
          <div className="text-center md:text-left mb-4">
            <h4 className="text-sm font-extrabold text-gray-900 dark:text-white uppercase tracking-wider">
              Core Technical Interests
            </h4>
            <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-1.5 mx-auto md:mx-0" />
          </div>
 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {interestsList.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="relative group rounded-3xl p-[1px] transition-all duration-300"
              >
                {/* Micro-glow hover overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]`} />
 
                {/* Card Container */}
                <div className={`relative rounded-[23px] bg-white dark:bg-gray-950/80 backdrop-blur-md p-4 h-full flex flex-col justify-between border border-gray-200/50 dark:border-gray-900/60 transition-all duration-300 shadow-md group-hover:shadow-lg ${interest.glowColor}`}>
                  <div>
                    {/* Icon container with platform-themed gradient backdrop */}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${interest.gradient} text-white flex items-center justify-center shadow-md mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {interest.icon}
                    </div>
 
                    <h5 className="text-sm font-extrabold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {interest.title}
                    </h5>
 
                    <p className="text-xs text-gray-650 dark:text-gray-400 mt-2 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
 
                  <div className="mt-3 pt-2 border-t border-gray-100/50 dark:border-gray-900/50 flex justify-end">
                    <span className="w-1 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
 
      </div>
    </section>
  );
};

export default Interests;
