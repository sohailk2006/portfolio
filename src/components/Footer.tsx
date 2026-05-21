"use client";

import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: "https://github.com/sohail06k", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/mohammed-sohail-khan-80214a338/", label: "LinkedIn" },
    { icon: <FiMail size={20} />, href: "mailto:mdsohailkhan744@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Focus", href: "#interests" },
    { name: "Skills", href: "#skills" },
    { name: "Coding Profiles", href: "#coding-profiles" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="glass mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Mohammed Sohail Khan
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              AI & ML Engineering Student passionate about building intelligent systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:scale-110 transition-transform duration-200"
                  aria-label={social.label}
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              © {currentYear} Mohammed Sohail Khan. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
              Made with{" "}
              <FiHeart className="mx-1 text-red-500" size={16} />{" "}
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
