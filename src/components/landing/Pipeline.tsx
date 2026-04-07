"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  RadarChartOutlined,
  DatabaseFilled,
  EditFilled,
  CloudServerOutlined,
  CheckCircleFilled,
  LoadingOutlined,
  RightOutlined
} from '@ant-design/icons';

// --- MICRO VISUALS ---

const ScannerVisual = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-16 overflow-hidden bg-black rounded-lg border border-[rgba(214,235,253,0.12)] mt-4 flex items-center justify-center">
    <motion.div
      className="absolute w-full h-[1px] bg-[#3b9eff]"
      style={{ boxShadow: '0 0 8px rgba(59,158,255,0.6)' }}
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute w-1.5 h-1.5 bg-[#11ff99] rounded-full"
      style={{ top: '30%', left: '40%' }}
      animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
    <motion.div
      className="absolute w-1.5 h-1.5 bg-[#11ff99] rounded-full"
      style={{ top: '60%', left: '70%' }}
      animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
    />
    {isActive && (
      <div className="absolute bottom-1 right-2 text-[8px] text-[#3b9eff] bg-[rgba(0,117,255,0.12)] px-1.5 rounded-full"
        style={{ fontFamily: "var(--font-jetbrains), monospace" }}
      >
        SIGNAL FOUND
      </div>
    )}
  </div>
);

const AnalyzerVisual = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-16 overflow-hidden bg-black rounded-lg border border-[rgba(214,235,253,0.12)] mt-4 p-2 text-[8px] leading-tight text-[#464a4d]"
    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
  >
    <motion.div animate={{ y: isActive ? [0, -40] : 0 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
      <div className="text-[#11ff99]">{'>'} GET /api/perplexity</div>
      <div>{'>'} Query: &quot;trends_2025&quot;</div>
      <div>{'>'} Fetching sources...</div>
      <div className="text-[#3b9eff]">{'>'} Source[1]: Validated</div>
      <div className="text-[#3b9eff]">{'>'} Source[2]: Validated</div>
      <div>{'>'} Extracting facts...</div>
      <div>{'>'} Bias check: PASS</div>
      <div className="text-[#11ff99]">{'>'} DATA READY</div>
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
  </div>
);

const WriterVisual = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-16 overflow-hidden bg-black rounded-lg border border-[rgba(214,235,253,0.12)] mt-4 p-2 flex flex-col gap-1.5">
    <motion.div
      className="h-1.5 bg-[#464a4d] rounded-sm w-3/4"
      animate={{ width: isActive ? ["0%", "75%"] : "75%", opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
    />
    <motion.div
      className="h-1.5 bg-[#464a4d] rounded-sm w-full"
      animate={{ width: isActive ? ["0%", "100%"] : "100%", opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
    <motion.div
      className="h-1.5 bg-[#464a4d] rounded-sm w-5/6"
      animate={{ width: isActive ? ["0%", "83%"] : "83%", opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    />
    <div className="mt-auto flex gap-1">
      <span className="w-2 h-2 rounded-full bg-[rgba(255,128,31,0.4)]" />
      <span className="text-[8px] text-[#464a4d]" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>PERSONA: TECH_LEAD</span>
    </div>
  </div>
);

const UploaderVisual = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-16 overflow-hidden bg-black rounded-lg border border-[rgba(214,235,253,0.12)] mt-4 flex flex-col items-center justify-center">
    {isActive ? (
      <>
        <motion.div
          className="text-[#11ff99] text-lg mb-1"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircleFilled />
        </motion.div>
        <div className="text-[8px] text-[#11ff99]" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>PUBLISHED</div>
      </>
    ) : (
      <div className="w-3/4 h-1 bg-[rgba(214,235,253,0.08)] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#3b9eff] rounded-full"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    )}
  </div>
);

// --- STEP ---

const PipelineStep = ({ icon, step, title, desc, isActive, isCompleted, visual }: any) => (
  <div className={`relative flex flex-col p-6 z-10 transition-opacity duration-500 ${isActive || isCompleted ? 'opacity-100' : 'opacity-40'}`}>
    <div className="absolute left-6 top-16 bottom-0 w-px bg-[rgba(214,235,253,0.08)] md:hidden" />
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl transition-colors duration-300
            ${isActive
              ? 'bg-black border-[#3b9eff] text-[#3b9eff]'
              : isCompleted
                ? 'bg-black border-[rgba(214,235,253,0.19)] text-[#a1a4a5]'
                : 'bg-black border-[rgba(214,235,253,0.08)] text-[#464a4d]'
            }`}
          style={isActive ? { boxShadow: '0 0 20px rgba(59,158,255,0.15)' } : {}}
          animate={isActive ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isActive ? <LoadingOutlined spin /> : icon}
        </motion.div>
        <div className="flex flex-col">
          <span className={`text-[10px] font-bold tracking-wider mb-1 ${isActive ? 'text-[#3b9eff]' : 'text-[#464a4d]'}`}
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            STEP 0{step}
          </span>
          <h3 className={`text-lg font-semibold leading-none ${isActive ? 'text-[#f0f0f0]' : 'text-[#a1a4a5]'}`}>
            {title}
          </h3>
        </div>
      </div>
      <p className="text-sm text-[#5c5c5c] leading-relaxed min-h-[40px]">{desc}</p>
      {visual}
    </div>
    {isActive && (
      <motion.div
        layoutId="activeGlowFB"
        className="absolute inset-0 rounded-2xl border border-[rgba(59,158,255,0.2)] -z-10"
        style={{ boxShadow: '0 0 30px rgba(59,158,255,0.05)' }}
        transition={{ duration: 0.3 }}
      />
    )}
  </div>
);

// --- MAIN ---

export const Pipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="workflow" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-[20%] left-0 right-0 h-px bg-[rgba(214,235,253,0.08)] hidden md:block" />
      <motion.div
        className="absolute top-[20%] left-0 h-[1px] w-32 bg-gradient-to-r from-transparent via-[#3b9eff] to-transparent hidden md:block z-0"
        style={{ filter: 'blur(1px)' }}
        animate={{ left: ["-10%", "110%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(214,235,253,0.19)] text-xs font-medium text-[#a1a4a5] mb-6"
          >
            <span className="w-2 h-2 bg-[#3b9eff] rounded-full animate-pulse" />
            THE CONTENT LOOP
          </motion.div>
          <h2
            className="text-3xl md:text-[3.5rem] font-normal text-[#f0f0f0] tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Set It Once. <span className="text-[#464a4d]">Content Runs Forever.</span>
          </h2>
          <p className="text-[#a1a4a5] mt-4 max-w-2xl mx-auto leading-relaxed">
            Define your topics and brand voice once. FinalBoss handles the rest — researching, writing, and publishing on a continuous loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <PipelineStep step="1" icon={<RadarChartOutlined />} title="Spot the Opportunity" desc="Monitors trends, RSS feeds, and competitors to find what to write next." isActive={activeStep === 0} isCompleted={activeStep > 0} visual={<ScannerVisual isActive={activeStep === 0} />} />
          <div className="md:hidden flex justify-center text-[#464a4d] py-2"><RightOutlined className="rotate-90" /></div>
          <PipelineStep step="2" icon={<DatabaseFilled />} title="Research Everything" desc="Verifies every claim against live sources before writing." isActive={activeStep === 1} isCompleted={activeStep > 1} visual={<AnalyzerVisual isActive={activeStep === 1} />} />
          <div className="md:hidden flex justify-center text-[#464a4d] py-2"><RightOutlined className="rotate-90" /></div>
          <PipelineStep step="3" icon={<EditFilled />} title="Write in Your Voice" desc="Drafts articles that match your industry's tone and standards." isActive={activeStep === 2} isCompleted={activeStep > 2} visual={<WriterVisual isActive={activeStep === 2} />} />
          <div className="md:hidden flex justify-center text-[#464a4d] py-2"><RightOutlined className="rotate-90" /></div>
          <PipelineStep step="4" icon={<CloudServerOutlined />} title="Format & Publish" desc="Images, links, and formatting handled — then pushed to your CMS." isActive={activeStep === 3} isCompleted={activeStep > 3} visual={<UploaderVisual isActive={activeStep === 3} />} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 border-t border-[rgba(214,235,253,0.19)] pt-8 flex justify-center"
        >
          <div className="flex items-center gap-8 text-xs text-[#5c5c5c]" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#11ff99] rounded-full" />
              SYSTEM LATENCY: 120ms
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#11ff99] rounded-full" />
              API UPTIME: 99.99%
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#3b9eff] rounded-full" />
              QUEUED JOBS: 4,231
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
