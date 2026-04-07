"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Pipeline } from '@/components/landing/Pipeline';
import { SocialProof } from '@/components/landing/SocialProof';
import { Pricing } from '@/components/landing/Pricing';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#f0f0f0] selection:bg-[rgba(0,117,255,0.34)] selection:text-white font-sans">
      <Header />

      {/* Frost Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-[rgba(214,235,253,0.4)] origin-left z-50"
        style={{ scaleX }}
      />

      <main className="relative">
        <Hero />
        <Features />
        <Pipeline />
        <SocialProof />

        {/* Reassurance Section */}
        <section className="relative py-32 border-t border-[rgba(214,235,253,0.19)]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-normal tracking-tight mb-6 text-[#f0f0f0]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Built for <span className="text-[#ff801f]">Truth</span>, not just Text.
            </h2>
            <p className="text-[#a1a4a5] max-w-2xl mx-auto text-lg leading-relaxed">
              Every article is backed by real-time research from live sources. No guessing, no filler — just verified, publishable content.
            </p>
          </div>
        </section>

        <Pricing />
        <Footer />
      </main>

      {/* Scroll Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-10 h-10 bg-transparent hover:bg-[rgba(255,255,255,0.28)] border border-[rgba(214,235,253,0.19)] rounded-full flex items-center justify-center text-[#a1a4a5] hover:text-[#f0f0f0] transition-all z-40"
        >
          <ArrowUpOutlined />
        </button>
      )}
    </div>
  );
}
