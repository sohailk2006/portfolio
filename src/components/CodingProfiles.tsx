"use client";

import { useState } from "react";
import { FiCode, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const CodingProfiles = () => {
  const [logoErrors, setLogoErrors] = useState<Record<string, boolean>>({});

  const profiles = [
    {
      platform: "LeetCode",
      username: "sohail_06k",
      url: "https://leetcode.com/u/sohail_06k/",
      verified: true,
      color: "from-amber-500 to-orange-500",
      description: "Problem solving and algorithmic challenges",
      logoPath: "/logos/leetcode.png"
    },
    {
      platform: "HackerRank",
      username: "mdsohailkhan744",
      url: "https://www.hackerrank.com/profile/mdsohailkhan744",
      verified: true,
      color: "from-green-500 to-emerald-500",
      description: "Coding challenges and certifications",
      logoPath: "/logos/hackerrank.png"
    },
    {
      platform: "GeeksforGeeks",
      username: "sohail06k",
      url: "https://www.geeksforgeeks.org/user/sohail06k/",
      verified: true,
      color: "from-emerald-600 to-teal-500",
      description: "Data structures and algorithms practice",
      logoPath: "/logos/geeksforgeeks.png"
    },
    {
      platform: "GitHub",
      username: "sohailk2006",
      url: "https://github.com/sohailk2006",
      verified: true,
      color: "from-gray-700 to-gray-900",
      description: "Open source projects and repositories",
      logoPath: "/logos/github.png"
    },
  ];

  return (
    <section id="coding-profiles" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-emerald-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-72 h-72 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200/30 dark:border-emerald-800/30 uppercase">
              Developer Ecosystem
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Coding{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500">
                Platforms
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Active on major competitive programming and open-source platforms, continuously solving complex algorithmic problems.
            </p>
          </motion.div>
        </div>

        {/* Profiles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group rounded-3xl p-[1px] transition-all duration-300"
            >
              {/* Hover gradient glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]`} />
              
              {/* Card Container */}
              <div className="relative rounded-[23px] bg-white dark:bg-gray-950/80 backdrop-blur-md p-4 h-full flex flex-col justify-between border border-gray-200/50 dark:border-gray-900/60 shadow-md">
                
                <div>
                  {/* Top Bar with Platform Logo and Verified Seal */}
                  <div className="flex items-center justify-between mb-3">
                    
                    {/* Platform Logo Box */}
                    <div className="relative w-20 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden p-1.5 flex-shrink-0">
                      {!logoErrors[profile.platform] ? (
                        <img
                          src={profile.logoPath}
                          alt={`${profile.platform} logo`}
                          className="w-full h-full object-contain"
                          onError={() => {
                            setLogoErrors(prev => ({ ...prev, [profile.platform]: true }));
                          }}
                        />
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${profile.color} text-white rounded-lg`}>
                          <FiCode size={18} />
                        </div>
                      )}
                    </div>
 
                    {profile.verified && (
                      <div className="flex items-center gap-1 px-2.5 py-0.5 bg-green-50 dark:bg-green-950/30 border border-green-200/30 dark:border-green-800/30 rounded-full">
                        <FiCheckCircle className="text-green-600 dark:text-green-400" size={10} />
                        <span className="text-[8px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                          Active
                        </span>
                      </div>
                    )}
                  </div>
 
                  {/* Platform Name and Handle */}
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                    {profile.platform}
                  </h3>
                  
                  <p className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 font-mono">
                    @{profile.username}
                  </p>
 
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    {profile.description}
                  </p>
                </div>
 
                {/* Card CTA Footer */}
                <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-900">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    <span>View Profile</span>
                    <FiExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
 
              </div>
            </motion.a>
          ))}
        </div>
 
      </div>
    </section>
  );
};

export default CodingProfiles;
