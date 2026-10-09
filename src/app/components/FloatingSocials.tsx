"use client";
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { 
    name: "Linkedin", 
    icon: <FaLinkedinIn />, 
    url: "https://www.linkedin.com/in/avant-pharma-47b443441/", // Yahan apna LinkedIn link daalein
    bgColor: "hover:bg-[#0077b5]" 
  },
  { 
    name: "Facebook", 
    icon: <FaFacebookF />, 
    url: "https://www.facebook.com/profile.php?id=61594224072327", // Yahan apna Facebook link daalein
    bgColor: "hover:bg-[#1877f2]" 
  },
  { 
    name: "Youtube", 
    icon: <FaYoutube />, 
    url: "https://www.youtube.com/@AvantpharmaceuticalPvtLtd", // Yahan apna YouTube link daalein
    bgColor: "hover:bg-[#ff0000]" 
  },
  { 
    name: "Instagram", 
    icon: <FaInstagram />, 
    url: "https://www.instagram.com/avantpharma.pakistan/", // Yahan apna Instagram link daalein
    bgColor: "hover:bg-[#E1306C]" 
  },
];

export default function FloatingSocials() {
  return (
    <>
      {/* Social Icons Sidebar - Left Side */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:gap-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-end bg-[#00B894] rounded-r-full overflow-hidden h-10 w-10 md:h-12 md:w-12 md:hover:w-[165px] transition-all duration-500 ease-in-out shadow-lg ${social.bgColor}`}
          >
            {/* Text (Hover par show hoga) */}
            <span className="absolute left-4 md:left-7 text-white font-semibold text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">
              {social.name}
            </span>
            
            {/* Icon Container */}
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white bg-[#00D2C6] group-hover:bg-transparent transition-colors duration-500 z-10 relative">
              {social.icon}
            </div>
          </a>
        ))}
      </div>

      {/* WhatsApp Floating Button - Bottom Left */}
      <a
        href="https://wa.me/923218288378" // Yahan apna WhatsApp number daalein (country code ke sath, bina + ke)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </a>
    </>
  );
}