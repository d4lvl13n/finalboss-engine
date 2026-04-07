"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ThunderboltFilled,
  SearchOutlined,
  CodeOutlined,
  ApartmentOutlined,
  CheckCircleFilled,
  LoadingOutlined,
  LineChartOutlined,
  GlobalOutlined
} from '@ant-design/icons';

// --- VISUAL COMPONENTS ---

// Stable positions to avoid SSR/client hydration mismatch (no Math.random)
const nodePositions = [
  { ix: 45, iy: 120, ax: [210, 80, 150], ay: [30, 170, 90], dur: 4.2 },
  { ix: 180, iy: 60, ax: [50, 260, 120], ay: [140, 20, 180], dur: 5.1 },
  { ix: 90, iy: 170, ax: [240, 30, 190], ay: [80, 160, 40], dur: 3.8 },
  { ix: 250, iy: 40, ax: [100, 200, 60], ay: [150, 70, 130], dur: 6.0 },
  { ix: 30, iy: 100, ax: [270, 140, 50], ay: [50, 190, 110], dur: 4.7 },
  { ix: 200, iy: 150, ax: [70, 230, 160], ay: [100, 30, 170], dur: 5.5 },
  { ix: 130, iy: 30, ax: [190, 60, 280], ay: [120, 80, 10], dur: 3.5 },
  { ix: 270, iy: 180, ax: [40, 170, 110], ay: [60, 140, 20], dur: 6.3 },
];

const BrainVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
    <div className="relative w-full h-full">
      {nodePositions.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#3b9eff] rounded-full"
          initial={{ x: node.ix, y: node.iy, opacity: 0 }}
          animate={{
            x: node.ax,
            y: node.ay,
            opacity: [0, 0.8, 0]
          }}
          transition={{ duration: node.dur, repeat: Infinity, ease: "linear" }}
        />
      ))}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M50,150 Q150,50 250,150"
          stroke="url(#gradBrainFB)"
          strokeWidth="1.5"
          fill="none"
          className="opacity-40"
          strokeDasharray="5 5"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradBrainFB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b9eff" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b9eff" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b9eff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

const ResearchVisual = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const logs = [
    { text: "Initializing Perplexity API handshake...", color: "text-[#11ff99]", icon: <CheckCircleFilled /> },
    { text: "Scanning SERP for 'Nvidia Blackwell Architecture'...", color: "text-[#a1a4a5]", icon: <LoadingOutlined /> },
    { text: "Cross-referencing: Reuters / AnandTech", color: "text-[#3b9eff]", icon: <GlobalOutlined /> },
    { text: "Fact extraction complete. Confidence: 99.8%", color: "text-[#11ff99]", icon: <CheckCircleFilled /> }
  ];

  return (
    <div className="w-full h-full p-6 text-xs overflow-hidden flex flex-col justify-end" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
      <div className="flex flex-col gap-3">
        <AnimatePresence mode='popLayout'>
          {logs.slice(0, step + 1).map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center gap-2 ${log.color}`}
            >
              <span className="opacity-70">{log.icon}</span>
              <span>{log.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="h-4 w-2 bg-[#464a4d] ml-1"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black via-black/80 to-transparent" />
    </div>
  );
};

const OpsVisual = () => (
  <div className="absolute right-0 bottom-0 w-4/5 h-4/5 bg-black border-t border-l border-[rgba(214,235,253,0.19)] rounded-tl-2xl p-5 flex flex-col gap-4 overflow-hidden">
    <div className="flex justify-between items-center pb-3 border-b border-[rgba(214,235,253,0.19)] z-10 bg-black">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#11ff99] rounded-full animate-pulse"></span>
        <span className="text-[10px] text-[#a1a4a5] tracking-wider" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>LIVE PIPELINE</span>
      </div>
      <span className="text-[10px] text-[#464a4d]" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>3 JOBS PROCESSING</span>
    </div>
    <div className="flex flex-col gap-3 relative">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
          className="flex items-center gap-3 p-2 rounded-sm hover:bg-[rgba(255,255,255,0.06)] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-black border border-[rgba(214,235,253,0.19)] flex items-center justify-center shrink-0">
            <div className="w-4 h-4 bg-[rgba(214,235,253,0.08)] rounded-sm" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="h-2 w-24 bg-[#464a4d] rounded-sm mb-1.5 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}></div>
            <div className="h-1.5 w-16 bg-[rgba(214,235,253,0.08)] rounded-sm"></div>
          </div>
          <motion.div
            className="ml-auto text-[10px] text-[#11ff99] bg-[rgba(17,255,153,0.12)] px-2 py-0.5 rounded-full border border-[rgba(17,255,153,0.18)]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            Publishing...
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SEOVisual = () => (
  <div className="absolute inset-0 flex items-end p-0 overflow-hidden">
    <div className="relative w-full h-3/4 px-6 pb-6">
      <svg className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="gradientAreaFB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,128,31,0.15)" />
            <stop offset="100%" stopColor="rgba(255,128,31,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,150 C50,150 100,100 150,120 C200,140 250,50 350,20 L350,200 L0,200 Z"
          fill="url(#gradientAreaFB)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.path
          d="M0,150 C50,150 100,100 150,120 C200,140 250,50 350,20"
          fill="none"
          stroke="#ff801f"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <circle cx="350" cy="20" r="3" fill="#fff" />
          <circle cx="350" cy="20" r="7" stroke="#ff801f" strokeWidth="1.5" className="animate-ping" />
          <foreignObject x="260" y="-30" width="120" height="40">
            <div className="border border-[rgba(214,235,253,0.19)] text-xs text-[#f0f0f0] px-2 py-1 rounded-lg text-center bg-black"
              style={{ boxShadow: 'rgba(176, 199, 217, 0.145) 0px 0px 0px 1px' }}
            >
              +420% Traffic
            </div>
          </foreignObject>
        </motion.g>
      </svg>
    </div>
  </div>
);

// --- BENTO CARD ---

type AccentColor = 'blue' | 'orange' | 'green';

const accentMap: Record<AccentColor, { badge: string; icon: string; borderHover: string }> = {
  blue:   { badge: 'text-[#3b9eff] bg-[rgba(0,117,255,0.12)] border-[rgba(0,117,255,0.2)]', icon: 'text-[#3b9eff]', borderHover: 'hover:border-[rgba(59,158,255,0.3)]' },
  orange: { badge: 'text-[#ff801f] bg-[rgba(255,89,0,0.12)] border-[rgba(255,89,0,0.2)]',   icon: 'text-[#ff801f]', borderHover: 'hover:border-[rgba(255,128,31,0.3)]' },
  green:  { badge: 'text-[#11ff99] bg-[rgba(17,255,153,0.12)] border-[rgba(17,255,153,0.18)]', icon: 'text-[#11ff99]', borderHover: 'hover:border-[rgba(17,255,153,0.3)]' },
};

const BentoCard = ({ title, description, icon, children, className, delay, headerRight, accent = 'blue' as AccentColor }: any) => {
  const colors = accentMap[accent as AccentColor] || accentMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative group overflow-hidden rounded-2xl border border-[rgba(214,235,253,0.19)] bg-black ${colors.borderHover} transition-all duration-500 flex flex-col ${className}`}
      style={{ boxShadow: 'rgba(176, 199, 217, 0.145) 0px 0px 0px 1px' }}
    >
      <div className="relative z-10 p-6 pb-0 flex flex-col h-full pointer-events-none">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 flex items-center justify-center rounded-xl border border-[rgba(214,235,253,0.19)] ${colors.icon}`}>
              {icon}
            </div>
            {headerRight && (
              <div className={`text-[10px] px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${colors.badge}`}
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: accent === 'green' ? '#11ff99' : accent === 'orange' ? '#ff801f' : '#3b9eff' }}></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: accent === 'green' ? '#11ff99' : accent === 'orange' ? '#ff801f' : '#3b9eff' }}></span>
                </span>
                {headerRight}
              </div>
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">{title}</h3>
        <p className="text-sm text-[#a1a4a5] leading-relaxed max-w-[90%]">{description}</p>

        <div className="relative flex-grow mt-6 min-h-[160px] rounded-t-xl overflow-hidden border-t border-l border-r border-[rgba(214,235,253,0.12)] bg-black">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN ---

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(214,235,253,0.19)] text-xs font-medium text-[#a1a4a5] mb-6"
          >
            <ThunderboltFilled className="text-[#ff801f]" /> HOW IT WORKS
          </motion.div>
          <h2
            className="text-3xl md:text-[3.5rem] font-normal tracking-tight text-[#f0f0f0] mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            From Trend to Published Article. <br />
            <span className="text-[#464a4d]">Fully autonomous.</span>
          </h2>
          <p className="text-lg text-[#a1a4a5] leading-relaxed">
            FinalBoss finds what to write, researches every claim, matches your brand voice, and publishes — without you touching a thing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">

          <BentoCard
            className="md:col-span-2"
            title="Finds What to Write"
            description="Scans your content and competitors to surface the topics you should be covering next."
            icon={<ApartmentOutlined />}
            delay={0.1}
            headerRight="LIVE MONITORING"
            accent="blue"
          >
            <BrainVisual />
          </BentoCard>

          <BentoCard
            className="md:col-span-1"
            title="Writes in Your Voice"
            description="Each article matches your industry's tone, jargon, and editorial standards — automatically."
            icon={<CodeOutlined />}
            delay={0.2}
            accent="orange"
          >
            <div className="w-full h-full p-5 text-[10px] text-[#a1a4a5] leading-relaxed" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
              <div className="flex gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-[rgba(255,32,71,0.3)]" />
                <div className="w-2 h-2 rounded-full bg-[rgba(255,197,61,0.3)]" />
                <div className="w-2 h-2 rounded-full bg-[rgba(17,255,153,0.3)]" />
              </div>
              <div className="opacity-70">
                <span className="text-[#ff801f]">&quot;persona&quot;</span>: <span className="text-[#a1a4a5]">&#123;</span><br/>
                &nbsp;&nbsp;<span className="text-[#3b9eff]">&quot;role&quot;</span>: <span className="text-[#11ff99]">&quot;Senior Mechanic&quot;</span>,<br/>
                &nbsp;&nbsp;<span className="text-[#3b9eff]">&quot;tone&quot;</span>: <span className="text-[#11ff99]">&quot;Pragmatic&quot;</span>,<br/>
                &nbsp;&nbsp;<span className="text-[#3b9eff]">&quot;jargon&quot;</span>: <span className="text-[#ff801f]">0.9</span>,<br/>
                &nbsp;&nbsp;<span className="text-[#3b9eff]">&quot;bias&quot;</span>: <span className="text-[#11ff99]">&quot;Experience&quot;</span><br/>
                <span className="text-[#a1a4a5]">&#125;</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard
            className="md:col-span-1 md:row-span-2"
            title="Researches Before Writing"
            description="Every claim is verified against live sources before a single word is published."
            icon={<SearchOutlined />}
            delay={0.3}
            headerRight="API: CONNECTED"
            accent="green"
          >
            <ResearchVisual />
          </BentoCard>

          <BentoCard
            className="md:col-span-2"
            title="Publish Without Lifting a Finger"
            description="Formatting, images, internal links, and CMS publishing — all handled automatically."
            icon={<ThunderboltFilled />}
            delay={0.4}
            accent="blue"
          >
            <OpsVisual />
          </BentoCard>

          <BentoCard
            className="md:col-span-2"
            title="Grow Faster Than Competitors"
            description="Cover more ground, rank for more topics, and build authority faster than any manual team."
            icon={<LineChartOutlined />}
            delay={0.5}
            headerRight="+420% INDEXING"
            accent="orange"
          >
            <SEOVisual />
          </BentoCard>

        </div>
      </div>
    </section>
  );
};
