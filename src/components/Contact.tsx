"use client";

import { useState, useRef } from "react";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiGithub, 
  FiLinkedin, 
  FiCheckCircle, 
  FiAlertTriangle, 
  FiLoader 
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to handle form sending, success, and error feedback overlays
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState<"success" | "error" | null>(null);
  const [resultMessage, setResultMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
      valid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Please enter a subject.";
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter your message.";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setSendResult(null);

    // Read environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS keys are set; if not, run premium simulation mode
    if (!serviceId || !templateId || !publicKey) {
      console.log("EmailJS keys are missing from environment variables. Running in high-fidelity simulated mode.");
      console.log("Submission data:", formData);
      
      // Simulate network request duration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSending(false);
      setSendResult("success");
      setResultMessage("Message successfully sent! (Simulated Mode - configure environment variables to connect live EmailJS).");
      
      // Clear form
      setFormData({ name: "", email: "", subject: "", message: "" });
      return;
    }

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          {
            publicKey: publicKey
          }
        );
        setSendResult("success");
        setResultMessage("Thank you! Your message has been successfully sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setSendResult("error");
      const errorMsg = error?.text || error?.message || (typeof error === "string" ? error : JSON.stringify(error)) || "Unknown error";
      setResultMessage(`Error: ${errorMsg}`);
    } finally {
      setIsSending(false);
    }
  };

  const contactMethods = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Direct Email",
      value: "mdsohailkhan744@gmail.com",
      link: "mailto:mdsohailkhan744@gmail.com",
      gradient: "from-blue-500 to-indigo-600",
      description: "Expect a response within 24 hours."
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Mobile Contact",
      value: "+91 9063725939",
      link: "tel:+919063725939",
      gradient: "from-emerald-500 to-teal-600",
      description: "Available for technical queries."
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Current Location",
      value: "Hyderabad, India",
      link: null,
      gradient: "from-purple-500 to-pink-600",
      description: "Open to hybrid, onsite, and remote roles."
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/sohailk2006",
      color: "hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900 border-gray-250 dark:border-gray-800"
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohammed-sohail-khan-80214a338/",
      color: "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 border-blue-200/50 dark:border-blue-900/40"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      
      {/* Background visual light elements */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 rounded-full bg-blue-600/5 dark:bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 rounded-full bg-purple-600/5 dark:bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border border-blue-200/30 dark:border-blue-800/30 uppercase">
              Get In Touch
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                Connect
              </span>
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400">
              I am open to discuss new software projects, collaborative cybersecurity research, or professional engineering opportunities.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Socials, direct methods */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="relative rounded-3xl p-[1px] overflow-hidden shadow-lg h-full">
              {/* Soft border indicator */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 opacity-30" />
              
              <div className="relative rounded-[23px] bg-gradient-to-br from-gray-55/40 to-white dark:from-gray-950/80 dark:to-gray-950 p-5 sm:p-6 h-full flex flex-col justify-between border border-gray-150/30 dark:border-gray-800/40">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                    Contact Channels
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Feel free to reach out via these direct lines or follow my active open-source updates on GitHub and LinkedIn.
                  </p>

                  <div className="mt-4 space-y-4">
                    {contactMethods.map((method, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${method.gradient} text-white flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform`}>
                          {method.icon}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 block">
                            {method.title}
                          </span>
                          {method.link ? (
                            <a
                              href={method.link}
                              className="text-sm font-semibold text-gray-950 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mt-0.5 inline-block transition-colors break-all"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className="text-sm font-semibold text-gray-950 dark:text-gray-200 mt-0.5 inline-block break-all">
                              {method.value}
                            </span>
                          )}
                          <span className="text-xs text-gray-450 dark:text-gray-500 block mt-0.5">
                            {method.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social media connections */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-900">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500 block mb-2.5">
                    Developer Socials
                  </span>
                  <div className="flex gap-4">
                    {socialLinks.map((social, sIdx) => (
                      <a
                        key={sIdx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-bold text-gray-650 dark:text-gray-400 transition-all duration-300 ${social.color}`}
                      >
                        {social.icon}
                        <span>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Modern Glassmorphic Form with validation */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-[1px] overflow-hidden shadow-2xl h-full">
              {/* Dynamic border gradient glow on focus */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 dark:opacity-30 blur-[1px]" />
              
              <div className="relative rounded-[23px] bg-white dark:bg-gray-950/80 backdrop-blur-xl p-5 sm:p-6 border border-gray-150/40 dark:border-gray-800/40 flex flex-col justify-between h-full">
                
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                    Send Secure Message
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Your details are verified and securely processed.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="mt-4 space-y-4">
                    
                    {/* Name field */}
                    <div className="relative">
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-450 dark:text-gray-500 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                          formErrors.name 
                            ? "border-red-500 focus:border-red-500" 
                            : "border-gray-200/50 dark:border-gray-800/80 focus:border-blue-500"
                        }`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="text-[11px] font-bold text-red-500 mt-1.5 flex items-center gap-1">
                          <FiAlertTriangle size={12} /> {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="relative">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-450 dark:text-gray-500 mb-1.5">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                          formErrors.email 
                            ? "border-red-500 focus:border-red-500" 
                            : "border-gray-200/50 dark:border-gray-800/80 focus:border-blue-500"
                        }`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <p className="text-[11px] font-bold text-red-500 mt-1.5 flex items-center gap-1">
                          <FiAlertTriangle size={12} /> {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject field */}
                    <div className="relative">
                      <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-gray-450 dark:text-gray-500 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                          formErrors.subject 
                            ? "border-red-500 focus:border-red-500" 
                            : "border-gray-200/50 dark:border-gray-800/80 focus:border-blue-500"
                        }`}
                        placeholder="Project discussion, opportunity, etc."
                      />
                      {formErrors.subject && (
                        <p className="text-[11px] font-bold text-red-500 mt-1.5 flex items-center gap-1">
                          <FiAlertTriangle size={12} /> {formErrors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message field */}
                    <div className="relative">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-450 dark:text-gray-500 mb-1.5">
                        Message Content
                      </label>
                      <textarea
                         id="message"
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         rows={3}
                         className={`w-full px-4 py-2.5 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none ${
                          formErrors.message 
                            ? "border-red-500 focus:border-red-500" 
                            : "border-gray-200/50 dark:border-gray-800/80 focus:border-blue-500"
                        }`}
                        placeholder="Write your details here..."
                      />
                      {formErrors.message && (
                        <p className="text-[11px] font-bold text-red-500 mt-1.5 flex items-center gap-1">
                          <FiAlertTriangle size={12} /> {formErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:brightness-110 text-white rounded-xl font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSending ? (
                          <>
                            <FiLoader className="animate-spin w-4 h-4" />
                            <span>Transmitting Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FiSend size={15} />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>

                {/* Send status feedback overlay */}
                <AnimatePresence>
                  {sendResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`mt-6 p-4 rounded-xl flex items-start gap-3 border ${
                        sendResult === "success"
                          ? "bg-green-50/30 dark:bg-green-950/20 border-green-200/50 dark:border-green-900/40 text-green-800 dark:text-green-400"
                          : "bg-red-50/30 dark:bg-red-950/20 border-red-200/50 dark:border-red-900/40 text-red-800 dark:text-red-400"
                      }`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {sendResult === "success" ? (
                          <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-450" />
                        ) : (
                          <FiAlertTriangle className="w-5 h-5 text-red-650 dark:text-red-450" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider mb-0.5">
                          {sendResult === "success" ? "Transmission Succeeded" : "Transmission Failed"}
                        </p>
                        <p className="text-xs font-semibold leading-relaxed">
                          {resultMessage}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
