"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // New function to handle link clicks
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Top Bar with Logo & Menu Button */}
      <div className="flex xl:hidden items-center justify-between p-4 bg-[#003851] shadow-md fixed top-0 left-0 w-full z-50">
        {/* Logo on the Left */}
        <Image src={logo} alt="Logo" width={150} height={50} className="z-50" priority />

        {/* Menu Button on the Right */}
        <button
          onClick={() => setIsOpen(true)}
          className="xl:hidden text-white p-0 m-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
          style={{ background: 'transparent', boxShadow: 'none' }}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 bg-[#003851]/60 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 text-white"
        >
          <X size={24} />
        </button>

        {/* Sidebar Links */}
        <nav className="mt-20 flex flex-col gap-6 p-6 text-white font-raleway text-right">
        {[
            { text: "ACCUEIL", id: "/" },
            { text: "NOTRE GROUPE", id: "NotreGroupe" },
            { text: "VISION & VALEURS", id: "V&V" },
            { text: "NOS MÉTIERS", id: "NosMetiers" },
            { text: "NOS MARQUES", id: "NosMarques" },
            { text: "ACTUALITÉS", id: "/#actualites" },
            { text: "CARRIÈRE", id: "Carriere" },
            { text: "CONTACT", id: "Contact" },
          ].map((item, index) => (
            <Link key={index} href={`${item.id}`} onClick={handleLinkClick}>
              <span className="hover:text-blue-200 transition-colors duration-200">{item.text}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay (Click outside to close) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-4"
        />
      )}
    </div>
  );
};

export default MobileSidebar;