"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuOutlined, CloseOutlined, ThunderboltFilled } from '@ant-design/icons';
import Link from 'next/link';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.finalboss.io';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'workflow' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Pricing', id: 'pricing' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-[rgba(214,235,253,0.19)] py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg border border-[rgba(214,235,253,0.19)] flex items-center justify-center group-hover:border-[rgba(214,235,253,0.35)] transition-colors">
              <ThunderboltFilled className="text-[#f0f0f0] text-sm" />
            </div>
            <span className="text-lg font-semibold text-[#f0f0f0] tracking-tight group-hover:text-white transition-colors">
              FinalBoss_
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-[#a1a4a5] hover:text-[#f0f0f0] tracking-[0.35px] rounded-md transition-all hover:bg-[rgba(255,255,255,0.06)]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`${APP_URL}/sign-in`}
              className="px-4 py-1.5 text-sm font-medium text-[#a1a4a5] hover:text-white transition-colors"
            >
              Log in
            </a>
            <a
              href={`${APP_URL}/sign-up`}
              className="px-4 py-1.5 text-sm font-medium text-black bg-white hover:bg-[#f0f0f0] rounded-full transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#a1a4a5] hover:text-white rounded-md transition-colors"
          >
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-[rgba(214,235,253,0.19)] overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-lg font-medium text-[#a1a4a5] hover:text-white py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-[rgba(214,235,253,0.19)] my-4" />
              <a
                href={`${APP_URL}/sign-up`}
                className="block w-full py-3 text-center text-black bg-white font-medium rounded-full transition-all"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
