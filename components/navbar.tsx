import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center md:hidden"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/80 hover:text-white transition">Overview</a>
            <a href="#" className="text-white/80 hover:text-white transition">Edition</a>
            <a href="#" className="text-white/80 hover:text-white transition">Info</a>
            <a href="#" className="text-white/80 hover:text-white transition">Company</a>
          </div>

          {/* Search Icon */}
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-md z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-8"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="flex flex-col gap-6">
            <a href="#" className="text-white/80 hover:text-white transition text-lg">Overview</a>
            <a href="#" className="text-white/80 hover:text-white transition text-lg">Edition</a>
            <a href="#" className="text-white/80 hover:text-white transition text-lg">Info</a>
            <a href="#" className="text-white/80 hover:text-white transition text-lg">Company</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
