"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { StarFilled } from '@ant-design/icons';

const stats = [
  { value: '15,000+', label: 'Articles Published' },
  { value: '30+', label: 'Verticals Covered' },
  { value: '0', label: 'Manual Steps Required' },
  { value: '100%', label: 'Source-Backed Claims' },
];

const testimonials = [
  {
    quote: "We went from 3 articles a week to 3 a day — all sourced, formatted, and published without us touching a thing.",
    name: 'Sarah M.',
    role: 'Head of Content, SaaS Company',
    metric: '+340% organic traffic in 90 days',
  },
  {
    quote: "The research quality is what sold us. Every claim has a source. Our editors now review instead of write.",
    name: 'James K.',
    role: 'Editorial Director, Tech Publication',
    metric: 'Editorial time cut by 80%',
  },
  {
    quote: "We cover 4 verticals with different voices. FinalBoss nails the tone for each one — automotive, gaming, finance, tech.",
    name: 'Laura D.',
    role: 'COO, Digital Media Group',
    metric: '4 verticals, 1 engine',
  },
];

export const SocialProof: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-32 bg-black">
      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-3xl md:text-4xl font-normal text-[#f0f0f0] mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[#5c5c5c]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(214,235,253,0.19)] text-xs font-medium text-[#a1a4a5] mb-6">
            <div className="flex gap-0.5 text-[#ffc53d]">
              {[...Array(5)].map((_, i) => (
                <StarFilled key={i} className="text-[10px]" />
              ))}
            </div>
            TRUSTED BY CONTENT TEAMS
          </div>
          <h2
            className="text-3xl md:text-[3.5rem] font-normal tracking-tight text-[#f0f0f0] leading-[1.1]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Results speak louder <br className="hidden md:block" />
            <span className="text-[#464a4d]">than feature lists.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-[rgba(214,235,253,0.19)] p-8 flex flex-col justify-between"
              style={{ boxShadow: 'rgba(176, 199, 217, 0.145) 0px 0px 0px 1px' }}
            >
              <div>
                <p className="text-[#a1a4a5] leading-relaxed mb-6 text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium text-[#11ff99] bg-[rgba(17,255,153,0.08)] border border-[rgba(17,255,153,0.15)] mb-5"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {t.metric}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(214,235,253,0.08)] border border-[rgba(214,235,253,0.19)] flex items-center justify-center text-sm text-[#5c5c5c] font-medium">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#f0f0f0]">{t.name}</div>
                    <div className="text-xs text-[#5c5c5c]">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
