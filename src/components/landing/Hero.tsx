"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightOutlined, RadarChartOutlined } from '@ant-design/icons';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.finalboss.io';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">

      {/* Subtle warm glow behind hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,89,0,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[rgba(214,235,253,0.19)] text-xs font-medium text-[#a1a4a5] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#11ff99] opacity-50"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#11ff99]"></span>
          </span>
          Your content team, on autopilot
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[3rem] md:text-[6rem] font-normal text-[#f0f0f0] mb-8 leading-[1.00] tracking-[-0.96px]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          The Editorial Infrastructure<br className="hidden md:block" />
          That Thinks Before It Writes.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg text-[#a1a4a5] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          From trending topic to published article, fully autonomous.
          Research, writing, formatting, and publishing — handled for you.{' '}
          <span className="text-[#f0f0f0]">Every claim sourced and verified.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={`${APP_URL}/sign-up`}
            className="group px-8 py-2.5 bg-white hover:bg-[#f0f0f0] text-black font-medium text-sm rounded-full transition-all active:scale-[0.98] flex items-center gap-2"
          >
            Start Publishing
            <ArrowRightOutlined className="group-hover:translate-x-0.5 transition-transform text-xs" />
          </a>

          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-2.5 text-[#f0f0f0] border border-[rgba(214,235,253,0.19)] hover:bg-[rgba(255,255,255,0.28)] font-medium text-sm rounded-full transition-all flex items-center gap-2"
          >
            <RadarChartOutlined className="text-xs" />
            See How It Works
          </button>
        </motion.div>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        className="mt-24 max-w-6xl mx-auto px-4"
      >
        <div
          className="relative rounded-2xl border border-[rgba(214,235,253,0.19)] aspect-[16/9] overflow-hidden"
          style={{ boxShadow: 'rgba(176, 199, 217, 0.145) 0px 0px 0px 1px' }}
        >
          <div className="absolute inset-0 bg-black">
            <div
              className="flex items-center justify-center h-full text-[#464a4d] text-sm"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              [ SYSTEM INTERFACE PREVIEW : REAL-TIME TOPIC CLUSTERING ]
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(214,235,253,0.25)] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
