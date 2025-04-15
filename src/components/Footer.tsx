"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "@/assets/Arena-logo.png";

export function Footer() {
  return (
    <footer className="bg-[#003851] text-white py-8 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end">
        
        {/* Logo & Socials */}
        <div className="text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image src={logo} alt="Logo" width={200} height={80} className="w-45 xl:w-56 2xl:w-62 mt-[-8%]   md:mb-2 md:ml-24" />
            
            <div className="flex space-x-6  xl:ml-35">
              <a href="https://www.linkedin.com/company/arena-property-development/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin  className="text-white  hover:text-blue-700 h-6 w-6" />
              </a>
            </div>
          </div>

          <p className="text-base mt-6 md:mt-10 md:ml-28 text-center md:text-left" style={{ fontFamily: "Raleway", fontSize: "14px", letterSpacing: "3px" }}>
            © 2025 ARENA PROPERTY DEVELOPMENT. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-end gap-4 mt-6 md:mt-0 md:mr-28">
          {[
            { text: "ACCUEIL", id: "/" },
            { text: "NOTRE GROUPE", id: "NotreGroupe" },
            { text: "VISION & VALEURS", id: "V&V" },
            { text: "NOS MÉTIERS", id: "NosMetiers" },
            { text: "NOS MARQUES", id: "NosMarques" },
            { text: "ACTUALITÉS", id: "/#actualites" },
            { text: "CARRIÈRE", id: "Carriere" },
            { text: "CONTACT", id: "Contact" },
          ].map((link, index) => (
            <a key={index} href={`${link.id}`} className="text-lg hover:underline" style={{ fontFamily: "Raleway", fontSize: "14px", letterSpacing: "5px" }}>
              {link.text}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;
