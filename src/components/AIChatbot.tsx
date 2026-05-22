"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMessageSquare, 
  FiX, 
  FiSend, 
  FiCpu, 
  FiChevronRight, 
  FiInfo, 
  FiArrowRight,
  FiTerminal,
  FiAward,
  FiShield,
  FiMail,
  FiPhone,
  FiActivity
} from "react-icons/fi";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Sohail's AI Agent. I have fully calibrated access to his academic records, certified scores, full-stack projects, and your active session telemetry. \n\nType `/help` to view all recognized query commands or ask me anything!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: "📊 My Telemetry", q: "/telemetry" },
    { label: "💻 Skills Logs", q: "/skills" },
    { label: "🚀 Projects Detail", q: "/projects" },
    { label: "🛡️ Ethical Hacking", q: "What is your NPTEL Ethical Hacking score?" },
    { label: "🎓 College ID & Grades", q: "/grades" },
    { label: "📞 Connect / Hire", q: "/connect" }
  ];

  // Keep track of active chat session duration
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputValue("");
    setIsThinking(true);

    // Track analytics inquiry click if dashboard state is available
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sohail_visitor_telemetry");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          parsed.chatbotInquiries = (parsed.chatbotInquiries || 0) + 1;
          localStorage.setItem("sohail_visitor_telemetry", JSON.stringify(parsed));
        } catch (e) {
          console.error(e);
        }
      }
    }

    // Simulate network delay for cognitive processing
    await new Promise((resolve) => setTimeout(resolve, 850));

    // Dynamic natural keyword-based analyzer
    const query = text.trim().toLowerCase();
    let response = "";

    // 1. Visitor Telemetry Query
    let telemetryClicks = 0;
    let telemetryVisits = 1;
    let telemetryInquiries = 0;
    let telemetryContacts = 0;
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sohail_visitor_telemetry");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          telemetryClicks = parsed.clicks || 0;
          telemetryVisits = parsed.visits || 1;
          telemetryInquiries = parsed.chatbotInquiries || 0;
          telemetryContacts = parsed.contactClicks || 0;
        } catch (e) {}
      }
    }
    const telemetryScore = (telemetryClicks * 2) + (telemetryInquiries * 10) + (telemetryContacts * 25);
    const engagementPercentage = Math.min(Math.round(telemetryScore), 100);

    // 2. Strict Exact Command Triggers (Highest Priority)
    if (query === "/help" || query === "help" || query === "command" || query === "options") {
      response = `[SYSTEM HELP SHELL]
Here are my recognized quick-command inquiries to explore Sohail's background:

• \`/telemetry\` - Scan your active live session analytics
• \`/skills\` - Inspect technical language & framework details
• \`/projects\` - Drill into high-fidelity system applications
• \`/grades\` - Audit educational scores & VCE indices
• \`/certs\` - Verify licenses and NPTEL Ethical Hacking results
• \`/connect\` - Display secure communication channels

Or feel free to ask questions naturally (e.g. "what is your college ID?", "tell me about the collision engine", "NPTEL score").`;
    }
    else if (query === "/telemetry") {
      response = `[VISITOR TELEMETRY REPORT]
• Chat Session Duration: ${formatTime(sessionSeconds)}
• Page Navigation Clicks: ${telemetryClicks}
• Direct Contact Clicks: ${telemetryContacts}
• Chatbot Queries: ${telemetryInquiries}
• Total Site Visits: ${telemetryVisits}
• Interactivity Engagement Index: ${engagementPercentage}%

[STATUS: ${engagementPercentage >= 50 ? "🟢 HIGHLY INTERACTIVE" : "🟡 MONITORING SYSTEM"}]
These statistics are pulled in real time from your live local storage telemetry. You can click the left-bottom pulse button to toggle your complete visual analytics dashboard!`;
    }
    else if (query === "/grades") {
      response = `[ACADEMIC REGISTRY LOGS]
Mohammed Sohail Khan's verified academic path and scores:

🎓 B.Tech in Computer Science & Engineering (AI & ML)
• Institution: Vardhaman College of Engineering (Autonomous)
• Period: 2024 - Present (Ongoing)
• Student ID: 24881A6636
• Course VA707 (Advanced Data Structures): 55%
• Course VA608 (HTML & CSS Assessment): 81.5%

🏫 Intermediate Board of Education (MPC)
• Institution: Sri Chaitanya Junior College (2022 - 2024)
• Cumulative Score: 9.36 / 10.0 CGPA

🎒 Secondary School Board Excellence
• Institution: Sri Chaitanya School (Graduated 2022)
• Cumulative Score: 9.20 / 10.0 CGPA`;
    }
    else if (query === "/certs") {
      response = `[VERIFIED TECHNICAL CREDENTIALS]
Sohail has calibrated verified certificates and assessment rankings:

🛡️ Ethical Hacking Elite Certification (NPTEL / IIT Kharagpur)
• Consolidated Score: 69%
• Assignments: 22.97 / 25
• Proctored Exam: 46.5 / 75
• Period: Jul-Oct 2025

🧠 AI for Beginners (HP LIFE)
• Focus: Neural Models, System Ecosystems, AI Ethics
• Credential ID: f12530f2-44dc-478b-affe-28afadfd321e
• Date: April 24, 2025

⚡ 24-Hour Hackathon Drill Certificate (TechIn Community)
• Collaboration: Eduknox Technologies & VMEG Connect Club
• Focus: Rapid Agile Sprints & Production Wireframing
• Date: February 2025

⚙️ Advanced Data Structures (VA707 - Vardhaman Autonomous)
• Assessment Score: 55%

🌐 HTML & CSS Development (VA608 - Vardhaman Autonomous)
• Assessment Score: 81.5%

🛠️ AI Tools Productivity Workshop
• Awarded by be10X Co-Founders Aditya Goenka & Aditya Kachave`;
    }
    else if (query === "/projects") {
      response = `[SYSTEM APPLICATIONS CATALOG]
Sohail has built two high-fidelity core production systems:

🚀 Commune Connect (v1.0.0-Production)
• Type: Full-Stack Community Event Booking & Engagement SaaS
• Stack: React, Next.js, Node.js, Express, MongoDB, Socket.io, Nodemailer, Firebase, JWT Auth
• Conflict Diagnostics Engine: Autonomous scheduling collision avoidance algorithm preventing seat double-bookings and capacity leaks.
• Communication Feed: Live websockets (Socket.io) broadcasting instant announcements and Nodemailer secure SMTP ticket distributions (#COMMUNE-8874-AI).

⭐ Kosmic Shine (v1.2.0-Stable)
• Type: Cross-Platform Mobile Detailing & Vehicle Care Marketplace
• Stack: Flutter, Dart, Firebase, Stripe API, Google Maps API, FCM Notifications, Bloc state management
• Nearby Detailer Discovery: Swiggy-inspired location logic fetching neighboring detailers via Latitude/Longitude coordinates.
• Hardened Checkout Gate: Secure Stripe API merchant transactions with real-time webhooks (Charge ID: ch_3MxxXXL5).`;
    }
    else if (query === "/skills") {
      response = `[CAPABILITY MATRIX LOGS]
Sohail's specialized engineering capabilities:

💻 Languages & Systems Foundations:
• Python [90%]: Advanced neural pipelines, deep learning models (PyTorch/TensorFlow, PyEngine v3.12).
• C++ [80%]: High-performance allocations, STL libraries, dynamic memory structures.
• JavaScript [88%]: Event loops, client hydration logic, rendering at 60 FPS.
• TypeScript [85%]: Strict guards, Generics, interfaces, 0 compile errors.

🌐 Full-Stack & Frameworks:
• React / Next.js [90%]: App Router, server pre-renders, Virtual DOM.
• Node.js / Express [82%]: API microservices listeners on port 5000, JWT authentication.
• Tailwind CSS [92%]: Custom JIT compiling engine styling, glassmorphism.

📱 Mobile & Databases:
• Flutter / Dart [80%]: Cross-platform app engines, Bloc state architecture.
• MongoDB [82%]: Mongoose schema designs, Atlas connection handshakes.
• Firebase [85%]: Real-time Cloud Firestore BaaS databases.

🛡️ Domain Specializations:
• AI/ML Systems [88%]: Supervised Neural Training (94.6% accuracy convergence).
• Cybersecurity [82%]: OWASP penetration audits, defensive header hardening.`;
    }
    else if (query === "/connect") {
      response = `[SECURE CONNECTION PIPELINES]
Sohail is actively available for Remote, Hybrid, or Onsite (Hyderabad, India) engineering, full-stack development, and cybersecurity roles:

📬 Option 1: Send a Secure Message Form
• Directly scroll to the "Contact" section at the bottom of this website. Fill out your details (name, email, subject, content) and click Send. The form will securely transmit your message via EmailJS!

📧 Option 2: Direct Professional Email
• Address: mdsohailkhan744@gmail.com
• Response window: Guaranteed within 24 Hours

📞 Option 3: Direct Telephony & Mobile
• Contact: +91 9063725939
• Available for technical consults and urgent discussions

💼 Option 4: Professional Platforms
• GitHub: github.com/sohailk2006
• LinkedIn: linkedin.com/in/mohammed-sohail-khan-80214a338`;
    }
    
    // 3. Natural Language Phrase Triggers (Fallback Priority)
    else if (
      query.includes("telemetry") || 
      query.includes("session") || 
      query.includes("engagement") || 
      query.includes("clicks") || 
      query.includes("visits") || 
      query.includes("active duration") || 
      query.includes("my stats") ||
      query.includes("my activity")
    ) {
      response = `[VISITOR TELEMETRY REPORT]
• Chat Session Duration: ${formatTime(sessionSeconds)}
• Page Navigation Clicks: ${telemetryClicks}
• Direct Contact Clicks: ${telemetryContacts}
• Chatbot Queries: ${telemetryInquiries}
• Total Site Visits: ${telemetryVisits}
• Interactivity Engagement Index: ${engagementPercentage}%

[STATUS: ${engagementPercentage >= 50 ? "🟢 HIGHLY INTERACTIVE" : "🟡 MONITORING SYSTEM"}]
These statistics are pulled in real time from your live local storage telemetry. You can click the left-bottom pulse button to toggle your complete visual analytics dashboard!`;
    }
    else if (
      query.includes("cert") || 
      query.includes("nptel") || 
      query.includes("hp") || 
      query.includes("be10x") || 
      query.includes("hackathon") || 
      query.includes("drill") || 
      query.includes("eduknox") || 
      query.includes("credential") ||
      query.includes("hacking") ||
      query.includes("elite") ||
      query.includes("workshop")
    ) {
      response = `[VERIFIED TECHNICAL CREDENTIALS]
Sohail has calibrated verified certificates and assessment rankings:

🛡️ Ethical Hacking Elite Certification (NPTEL / IIT Kharagpur)
• Consolidated Score: 69%
• Assignments: 22.97 / 25
• Proctored Exam: 46.5 / 75
• Period: Jul-Oct 2025

🧠 AI for Beginners (HP LIFE)
• Focus: Neural Models, System Ecosystems, AI Ethics
• Credential ID: f12530f2-44dc-478b-affe-28afadfd321e
• Date: April 24, 2025

⚡ 24-Hour Hackathon Drill Certificate (TechIn Community)
• Collaboration: Eduknox Technologies & VMEG Connect Club
• Focus: Rapid Agile Sprints & Production Wireframing
• Date: February 2025

⚙️ Advanced Data Structures (VA707 - Vardhaman Autonomous)
• Assessment Score: 55%

🌐 HTML & CSS Development (VA608 - Vardhaman Autonomous)
• Assessment Score: 81.5%

🛠️ AI Tools Productivity Workshop
• Awarded by be10X Co-Founders Aditya Goenka & Aditya Kachave`;
    }
    else if (
      query.includes("college id") || 
      query.includes("student id") || 
      query.includes("roll number") || 
      query.includes("grade") || 
      query.includes("cgpa") || 
      query.includes("gpa") || 
      query.includes("marks") || 
      query.includes("score") || 
      query.includes("vardhaman") || 
      query.includes("vce") || 
      query.includes("sri chaitanya") || 
      query.includes("school") || 
      query.includes("education") || 
      query.includes("college") || 
      query.includes("b.tech")
    ) {
      response = `[ACADEMIC REGISTRY LOGS]
Mohammed Sohail Khan's verified academic path and scores:

🎓 B.Tech in Computer Science & Engineering (AI & ML)
• Institution: Vardhaman College of Engineering (Autonomous)
• Period: 2024 - Present (Ongoing)
• Student ID: 24881A6636
• Course VA707 (Advanced Data Structures): 55%
• Course VA608 (HTML & CSS Assessment): 81.5%

🏫 Intermediate Board of Education (MPC)
• Institution: Sri Chaitanya Junior College (2022 - 2024)
• Cumulative Score: 9.36 / 10.0 CGPA

🎒 Secondary School Board Excellence
• Institution: Sri Chaitanya School (Graduated 2022)
• Cumulative Score: 9.20 / 10.0 CGPA`;
    }
    else if (
      query.includes("commune") || 
      query.includes("kosmic") || 
      query.includes("shine") || 
      query.includes("saas") || 
      query.includes("marketplace") || 
      query.includes("wash") || 
      query.includes("car care") || 
      query.includes("slot") || 
      query.includes("conflict") || 
      query.includes("collision") || 
      query.includes("nodemailer") || 
      query.includes("stripe") || 
      query.includes("fcm") || 
      query.includes("websocket") || 
      query.includes("socket") ||
      query.includes("project")
    ) {
      response = `[SYSTEM APPLICATIONS CATALOG]
Sohail has built two high-fidelity core production systems:

🚀 Commune Connect (v1.0.0-Production)
• Type: Full-Stack Community Event Booking & Engagement SaaS
• Stack: React, Next.js, Node.js, Express, MongoDB, Socket.io, Nodemailer, Firebase, JWT Auth
• Conflict Diagnostics Engine: Autonomous scheduling collision avoidance algorithm preventing seat double-bookings and capacity leaks.
• Communication Feed: Live websockets (Socket.io) broadcasting instant announcements and Nodemailer secure SMTP ticket distributions (#COMMUNE-8874-AI).

⭐ Kosmic Shine (v1.2.0-Stable)
• Type: Cross-Platform Mobile Detailing & Vehicle Care Marketplace
• Stack: Flutter, Dart, Firebase, Stripe API, Google Maps API, FCM Notifications, Bloc state management
• Nearby Detailer Discovery: Swiggy-inspired location logic fetching neighboring detailers via Latitude/Longitude coordinates.
• Hardened Checkout Gate: Secure Stripe API merchant transactions with real-time webhooks (Charge ID: ch_3MxxXXL5).`;
    }
    else if (
      query.includes("connect") || 
      query.includes("contact") || 
      query.includes("email") || 
      query.includes("phone") || 
      query.includes("mobile") || 
      query.includes("whatsapp") || 
      query.includes("social") || 
      query.includes("linkedin") || 
      query.includes("github") || 
      query.includes("hire") || 
      query.includes("job") || 
      query.includes("role") || 
      query.includes("open") || 
      query.includes("work") || 
      query.includes("available") || 
      query.includes("remote") || 
      query.includes("hybrid")
    ) {
      response = `[SECURE CONNECTION PIPELINES]
Sohail is actively available for Remote, Hybrid, or Onsite (Hyderabad, India) engineering, full-stack development, and cybersecurity roles:

📬 Option 1: Send a Secure Message Form
• Directly scroll to the "Contact" section at the bottom of this website. Fill out your details (name, email, subject, content) and click Send. The form will securely transmit your message via EmailJS!

📧 Option 2: Direct Professional Email
• Address: mdsohailkhan744@gmail.com
• Response window: Guaranteed within 24 Hours

📞 Option 3: Direct Telephony & Mobile
• Contact: +91 9063725939
• Available for technical consults and urgent discussions

💼 Option 4: Professional Platforms
• GitHub: github.com/sohailk2006
• LinkedIn: linkedin.com/in/mohammed-sohail-khan-80214a338`;
    }
    else if (
      query.includes("skill") || 
      query.includes("tech") || 
      query.includes("language") || 
      query.includes("framework") || 
      query.includes("python") || 
      query.includes("c++") || 
      query.includes("cpp") || 
      query.includes("typescript") || 
      query.includes("javascript") || 
      query.includes("react") || 
      query.includes("next") || 
      query.includes("node") || 
      query.includes("express") || 
      query.includes("tailwind") || 
      query.includes("mongodb") || 
      query.includes("firebase") || 
      query.includes("flutter") || 
      query.includes("ai/ml") || 
      query.includes("cybersecurity")
    ) {
      response = `[CAPABILITY MATRIX LOGS]
Sohail's specialized engineering capabilities:

💻 Languages & Systems Foundations:
• Python [90%]: Advanced neural pipelines, deep learning models (PyTorch/TensorFlow, PyEngine v3.12).
• C++ [80%]: High-performance allocations, STL libraries, dynamic memory structures.
• JavaScript [88%]: Event loops, client hydration logic, rendering at 60 FPS.
• TypeScript [85%]: Strict guards, Generics, interfaces, 0 compile errors.

🌐 Full-Stack & Frameworks:
• React / Next.js [90%]: App Router, server pre-renders, Virtual DOM.
• Node.js / Express [82%]: API microservices listeners on port 5000, JWT authentication.
• Tailwind CSS [92%]: Custom JIT compiling engine styling, glassmorphism.

📱 Mobile & Databases:
• Flutter / Dart [80%]: Cross-platform app engines, Bloc state architecture.
• MongoDB [82%]: Mongoose schema designs, Atlas connection handshakes.
• Firebase [85%]: Real-time Cloud Firestore BaaS databases.

🛡️ Domain Specializations:
• AI/ML Systems [88%]: Supervised Neural Training (94.6% accuracy convergence).
• Cybersecurity [82%]: OWASP penetration audits, defensive header hardening.`;
    }
    else {
      // Default natural fallback response
      response = `I detected queries related to Sohail's background. As an AI/ML Engineering student at Vardhaman College of Engineering (Student ID: 24881A6636), he specializes in building high-fidelity products like Commune Connect (SaaS with Conflict Diagnostics Engine) and Kosmic Shine (geolocated detailing marketplace).

For direct collaboration or direct contact, feel free to run these commands or ask about:
• \`/telemetry\` - Scan your active live session analytics
• \`/skills\` - Inspect technical language & framework details
• \`/projects\` - Drill into high-fidelity system applications
• \`/grades\` - Audit educational scores & VCE indices
• \`/certs\` - Verify licenses and NPTEL Ethical Hacking results
• \`/connect\` - Display secure communication channels

Or direct email: mdsohailkhan744@gmail.com / Direct Mobile: +91 9063725939`;
    }

    setIsThinking(false);
    setMessages((prev) => [...prev, { sender: "bot", text: response }]);
  };

  return (
    <>
      {/* Pulse Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 select-none">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:brightness-110 rounded-full text-white shadow-2xl flex items-center justify-center relative cursor-pointer group"
          aria-label="Open AI Assistant"
        >
          {/* Outer glowing pulsing aura */}
          <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-20 group-hover:scale-125 group-hover:opacity-40 animate-ping duration-1000" />
          <FiMessageSquare className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Floating chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-6 w-[340px] sm:w-[380px] h-[520px] bg-white dark:bg-gray-950 rounded-3xl border border-gray-150 dark:border-gray-900 shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 sm:p-5 flex items-center justify-between text-white relative">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-white/10 rounded-xl">
                  <FiCpu className="w-5 h-5 text-cyan-300 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm tracking-wide">Sohail&apos;s AI Agent</h4>
                  <span className="text-[10px] text-cyan-200/90 font-bold flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Online & Ready
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/15 text-white/95 transition-colors cursor-pointer"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-black/20 text-xs sm:text-sm font-medium scrollbar-thin">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm border whitespace-pre-line leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent"
                        : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-gray-150 dark:border-gray-850"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-850 text-gray-500 rounded-2xl px-4 py-3 flex items-center gap-1">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce"></span>
                    <span className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce delay-100"></span>
                    <span className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined Quick Actionprompts */}
            <div className="p-3 bg-gray-50 dark:bg-gray-950/80 border-t border-gray-100 dark:border-gray-900">
              <span className="text-[9px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">
                Suggested Telemetry Queries
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt.q)}
                    className="flex items-center gap-1 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 px-2.5 py-1.5 rounded-xl cursor-pointer transition-colors"
                  >
                    <span>{prompt.label}</span>
                    <FiChevronRight size={10} />
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-3 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about skills, certificates, projects..."
                className="flex-1 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-150 dark:border-gray-800 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-md"
              >
                <FiSend size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
