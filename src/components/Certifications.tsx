"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiAward, 
  FiCheckCircle, 
  FiBookOpen, 
  FiEye, 
  FiClock,
  FiShield,
  FiX
} from "react-icons/fi";

interface Certification {
  title: string;
  provider: string;
  date: string;
  credentialId: string;
  skills: string[];
  logoPath: string;
  certPath: string;
  gradient: string;
  fallbackIcon: React.ReactNode;
}

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  
  // State to track image load errors and dynamically trigger fallback templates
  const [logoErrors, setLogoErrors] = useState<Record<string, boolean>>({});
  const [certErrors, setCertErrors] = useState<Record<string, boolean>>({});

  const certifications: Certification[] = [
    {
      title: "Ethical Hacking",
      provider: "NPTEL Online Certification",
      date: "Jul-Oct 2025",
      credentialId: "Consolidated Score: 69%",
      skills: ["Elite Certification", "Online Assignments: 22.97/25", "Proctored Exam: 46.5/75", "IIT Kharagpur & Swayam"],
      logoPath: "/logos/nptel.png",
      certPath: "/certifications/ethical_hacking.png",
      gradient: "from-amber-500 via-orange-600 to-red-600",
      fallbackIcon: <FiShield className="w-5 h-5" />
    },
    {
      title: "Advanced Data Structures",
      provider: "Vardhaman College of Engineering",
      date: "July 10 - Nov 15, 2025",
      credentialId: "VA707 - Student ID: 24881A6636",
      skills: ["Value-Added Course (VA707)", "Advanced Data Structures", "Assessment Score: 55%", "Autonomous VCE Status"],
      logoPath: "/logos/vardhaman.png",
      certPath: "/certifications/advanced_dsa.png",
      gradient: "from-blue-600 via-indigo-605 to-purple-600",
      fallbackIcon: <FiBookOpen className="w-5 h-5" />
    },
    {
      title: "24 Hour Hackathon Drill",
      provider: "TechIn Community",
      date: "February 2025",
      credentialId: "In Collaboration with Connect Club & Eduknox",
      skills: ["Agile Prototyping Sprints", "Full-Stack Design", "Connect Club (VMEG)", "Eduknox Technologies"],
      logoPath: "/logos/eduknox.png",
      certPath: "/certifications/hackathon_drill.png",
      gradient: "from-purple-600 via-violet-600 to-indigo-700",
      fallbackIcon: <FiAward className="w-5 h-5" />
    },
    {
      title: "AI for Beginners",
      provider: "HP LIFE",
      date: "April 24, 2025",
      credentialId: "f12530f2-44dc-478b-affe-28afadfd321e",
      skills: ["AI Fundamentals & Impact", "Technological Landscape", "Data & AI Systems", "Ethical Implications"],
      logoPath: "/logos/hp.png",
      certPath: "/certifications/ai_beginners.png",
      gradient: "from-blue-500 via-sky-500 to-cyan-600",
      fallbackIcon: <FiAward className="w-5 h-5" />
    },
    {
      title: "AI Tools Workshop",
      provider: "be10X",
      date: "May 12, 2024",
      credentialId: "Awarded by be10X Co-Founders",
      skills: ["1-Day AI Tools Workshop", "Productivity Automation", "Aditya Kachave & Aditya Goenka", "AI-Powered Workflows"],
      logoPath: "/logos/be10x.png",
      certPath: "/certifications/ai_tools.png",
      gradient: "from-teal-500 via-emerald-600 to-green-700",
      fallbackIcon: <FiAward className="w-5 h-5" />
    },
    {
      title: "HTML & CSS",
      provider: "Vardhaman College of Engineering",
      date: "Feb 3 - Jun 14, 2025",
      credentialId: "VA608 - Student ID: 24881A6636",
      skills: ["Value-Added Course (VA608)", "Assessment Score: 81.5%", "Vardhaman Autonomous Status", "Responsive Design & Coding"],
      logoPath: "/logos/vardhaman.png",
      certPath: "/certifications/html_css.png",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      fallbackIcon: <FiBookOpen className="w-5 h-5" />
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 90, damping: 14 } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="certifications" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      
      {/* Visual background lights */}
      <div className="absolute top-1/3 right-1/10 w-80 h-80 rounded-full bg-emerald-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-80 h-80 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

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
              Academic Credentials
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500">
                Certifications
              </span>
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Verified technical training, cybersecurity accomplishments, and specialized domain coursework.
            </p>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative group rounded-3xl p-[1px] transition-all duration-300"
            >
              {/* Dynamic light border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${cert.gradient} opacity-10 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]`} />
              
              {/* Card Container */}
              <div className="relative rounded-[23px] bg-white dark:bg-gray-950/80 backdrop-blur-md p-5 h-full flex flex-col justify-between border border-gray-200/50 dark:border-gray-900/60 shadow-md">
                
                <div>
                  {/* Top line with Logo and verified tick */}
                  <div className="flex items-center justify-between mb-4">
                    
                    {/* Issuer Logo Container (with local path and error fallback initial badge) */}
                    <div className="relative h-11 w-auto min-w-[44px] max-w-[140px] flex items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden px-2.5 py-1 flex-shrink-0">
                      {!logoErrors[cert.credentialId] ? (
                        <img
                          src={cert.logoPath}
                          alt={`${cert.provider} logo`}
                          className="h-full w-auto object-contain"
                          onError={() => {
                            setLogoErrors(prev => ({ ...prev, [cert.credentialId]: true }));
                          }}
                        />
                      ) : (
                        <div className={`h-full px-2 flex items-center justify-center bg-gradient-to-br ${cert.gradient} text-white font-extrabold text-[10px] uppercase tracking-wider rounded-lg`}>
                          {cert.provider.substring(0, 3)}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-950/30 border border-green-200/30 dark:border-green-800/30 rounded-full">
                      <FiCheckCircle className="text-green-600 dark:text-green-400" size={14} />
                      <span className="text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Title and provider */}
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200 line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">
                    {cert.provider}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-[10px] font-medium px-2.5 py-1 bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 border border-gray-200/30 dark:border-gray-800/30 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer and interactive buttons */}
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 dark:text-gray-500 font-semibold mb-2.5">
                    <FiClock className="w-3.5 h-3.5" />
                    <span>Completed: {cert.date}</span>
                  </div>

                  {/* Single action preview button spanning the card footer */}
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-900">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-200/30 dark:border-gray-800/60 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-300 transition-colors duration-200"
                    >
                      <FiEye size={14} />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

          {/* Elegant Continuous Learning Empty-State Card */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-3xl p-[1px] min-h-[300px]"
          >
            {/* Soft gradient border indicating continuous roadmap */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 opacity-20 blur-[1px]" />
            
            <div className="relative rounded-[23px] bg-white/40 dark:bg-gray-950/20 backdrop-blur-sm p-5 h-full flex flex-col items-center justify-center text-center border border-dashed border-gray-200 dark:border-gray-800/80 shadow-inner">
              <div className="p-4 rounded-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200/40 dark:border-gray-800/50 mb-2.5 animate-pulse">
                <FiBookOpen className="w-8 h-8 text-gray-400 dark:text-gray-600" />
              </div>
              <h4 className="text-base font-extrabold text-gray-700 dark:text-gray-300">
                Continuous Education
              </h4>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500 max-w-[200px] leading-relaxed">
                More certifications coming soon as part of continuous learning journey.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Certificate Preview Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Window Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring" as const, duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-900 rounded-[32px] overflow-hidden shadow-2xl z-10"
            >
              
              {/* Modal Top Header Bar */}
              <div className="flex justify-between items-center px-5 py-3 border-b border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-950/50">
                <div className="flex items-center gap-2">
                  <FiAward className="text-emerald-500 w-5 h-5" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    Official Certificate Preview
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-900 text-gray-500 dark:text-gray-400 transition-colors duration-200"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Modal Core Content */}
              <div className="p-5 md:p-6 flex flex-col lg:flex-row gap-5 items-center lg:items-stretch">
                
                {/* Visual Image / Dynamic Mock Fallback Frame */}
                <div className="relative w-full lg:w-3/5 aspect-[1.414/1] bg-gray-100 dark:bg-gray-900/60 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-800/80">
                  
                  {!certErrors[selectedCert.credentialId] ? (
                    <img
                      src={selectedCert.certPath}
                      alt={`${selectedCert.title} certificate`}
                      className="w-full h-full object-contain"
                      onError={() => {
                        setCertErrors(prev => ({ ...prev, [selectedCert.credentialId]: true }));
                      }}
                    />
                  ) : (
                    /* Elegant Dynamic Fallback Document Template */
                    <div className="relative w-full h-full bg-stone-50 dark:bg-gray-950 p-4 md:p-5 border-[6px] border-double border-amber-600/30 flex flex-col justify-between overflow-hidden text-stone-900 dark:text-white">
                      
                      {/* Security stamp backdrop watermark */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] dark:opacity-[0.01] pointer-events-none select-none">
                        <FiAward size={200} />
                      </div>

                      {/* Cert header */}
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[9px] font-black text-amber-600 dark:text-amber-500 tracking-widest uppercase">
                            Digital Validation
                          </p>
                          <h4 className="text-xs md:text-sm font-black tracking-wide mt-0.5">
                            {selectedCert.provider}
                          </h4>
                        </div>
                        {/* Stylized Crest */}
                        <div className="w-9 h-9 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                          {selectedCert.fallbackIcon}
                        </div>
                      </div>

                      {/* Cert Main Body Text */}
                      <div className="text-center my-1">
                        <h5 className="text-[16px] md:text-[22px] font-black tracking-wider leading-none font-serif text-stone-900 dark:text-white">
                          VERIFIED CREDENTIAL
                        </h5>
                        <p className="text-[8px] md:text-[10px] text-stone-500 dark:text-stone-400 italic mt-2">
                          This digital record validates that
                        </p>
                        <h6 className="text-[14px] md:text-[18px] font-black text-amber-600 dark:text-amber-500 mt-1 tracking-wide font-sans">
                          Mohammed Sohail Khan
                        </h6>
                        <p className="text-[8px] md:text-[10px] text-stone-500 dark:text-stone-400 max-w-[280px] mx-auto leading-relaxed mt-2">
                          has successfully fulfilled all requirements, academic criteria, and coursework criteria designated for:
                        </p>
                        <p className="text-[10px] md:text-[12px] font-extrabold text-stone-800 dark:text-white bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-lg inline-block mt-2 tracking-wide">
                          {selectedCert.title}
                        </p>
                      </div>

                      {/* Validation Footer */}
                      <div className="flex justify-between items-end border-t border-stone-200/50 dark:border-stone-800/80 pt-2">
                        <div className="text-left">
                          <p className="text-[7px] text-stone-400 dark:text-stone-500 uppercase tracking-widest font-bold">
                            Credential Details
                          </p>
                          <p className="text-[8px] text-stone-700 dark:text-stone-300 font-mono mt-0.5 font-bold">
                            ID: {selectedCert.credentialId}
                          </p>
                          <p className="text-[8px] text-stone-500 dark:text-stone-400 mt-0.5">
                            Issued: {selectedCert.date}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right hidden sm:block">
                            <p className="text-[7px] text-stone-400 dark:text-stone-500 font-bold uppercase tracking-widest">
                              Custom Certificate
                            </p>
                            <p className="text-[8px] text-stone-500 italic mt-0.5">
                              Replace: public{selectedCert.certPath}
                            </p>
                          </div>
                          {/* SVG custom QR logo */}
                          <div className="w-8 h-8 bg-white p-1 rounded-md border border-stone-200 flex items-center justify-center text-stone-900">
                            <svg className="w-full h-full opacity-70" viewBox="0 0 100 100" fill="currentColor">
                              <path d="M0 0h30v30H0V0zm10 10v10h10V10H10zm60-10h30v30H70V0zm10 10v10h10V10H80zM0 70h30v30H0V70zm10 10v10h10V10H10zm35-65h10v10H45V15zm5 25h10v10H50V40zm15 15h10v10H65V55zm-15 15h10v10H50V70zm20 15h10v10H70V85zm15-15h10v10H85V70zm-15-15h10v10H70V55zm-15 30h10v10H55V85z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                </div>

                {/* Right: Metadata details, skills gained */}
                <div className="w-full lg:w-2/5 flex flex-col justify-between">
                  <div>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-gradient-to-r ${selectedCert.gradient} rounded-full mb-2.5 shadow-sm`}>
                      {selectedCert.provider} Credential
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-2">
                      {selectedCert.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-4">
                      Issued in {selectedCert.date}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-905 p-3 rounded-2xl">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 block mb-1">
                          Verified Key Identifier
                        </span>
                        <code className="text-xs font-mono font-bold text-gray-800 dark:text-gray-300 block select-all">
                          {selectedCert.credentialId}
                        </code>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 block mb-2">
                          Domain Skills Gained
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {selectedCert.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-semibold px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100/30 dark:border-emerald-900/50 rounded-xl"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-900">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className={`w-full py-3 rounded-2xl text-sm font-bold text-white bg-gradient-to-r ${selectedCert.gradient} hover:brightness-110 shadow-lg transition-all duration-200`}
                    >
                      Close Viewer
                    </button>
                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certifications;
