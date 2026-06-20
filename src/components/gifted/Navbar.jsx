import React, { useState, useEffect } from "react";
import { Youtube, Facebook, Instagram, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#programs" },
    { label: "VALUES", href: "#about" },
    { label: "EXPRESSIONS", href: "#gallery" },
    { label: "JOIN", href: "#belong" },
    { label: "CONNECT", href: "#connect" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0618]/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/assets/ab2c6f2be_HandLogoofficial.png"
            alt="Hand Logo"
            className="h-10 w-10 object-contain"
          />
          <img
            src="/assets/226dd3561_GiftedHandsWordsnobackground.png"
            alt="Gifted Hands"
            className="h-8 object-contain"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-xs text-white/80 hover:text-[#c9a84c] tracking-[0.12em] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4 text-white/70">
          <a href="https://www.youtube.com/@giftedhands.church" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-[#c9a84c] transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
          <a href="https://www.facebook.com/share/1D7zLT3QFa/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#c9a84c] transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/giftedhands.church?igsh=YjNmeGxhMDR3bHNv" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#c9a84c] transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a0a2e] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm text-white/80 hover:text-[#c9a84c] tracking-[0.12em] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}