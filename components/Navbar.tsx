"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Code className={`h-8 w-8 transition-colors ${
              scrolled ? "text-primary-600" : "text-white"
            }`} />
            <span className={`text-2xl font-bold transition-colors ${
              scrolled ? "gradient-text" : "text-white"
            }`}>Dev Labs</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`transition-colors font-medium ${
                scrolled
                  ? "text-gray-900 hover:text-primary-600"
                  : "text-white hover:text-primary-200"
              }`}
            >
              Home
            </a>
            <a
              href="#projects"
              className={`transition-colors font-medium ${
                scrolled
                  ? "text-gray-900 hover:text-primary-600"
                  : "text-white hover:text-primary-200"
              }`}
            >
              Projects
            </a>
            <a
              href="#services"
              className={`transition-colors font-medium ${
                scrolled
                  ? "text-gray-900 hover:text-primary-600"
                  : "text-white hover:text-primary-200"
              }`}
            >
              Services
            </a>
            <a
              href="#expertise"
              className={`transition-colors font-medium ${
                scrolled
                  ? "text-gray-900 hover:text-primary-600"
                  : "text-white hover:text-primary-200"
              }`}
            >
              Expertise
            </a>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#home"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#expertise"
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Expertise
            </a>
            <a
              href="#contact"
              className="block py-2 bg-primary-600 text-white px-6 rounded-lg hover:bg-primary-700 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

