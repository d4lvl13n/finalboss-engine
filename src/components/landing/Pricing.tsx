"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckOutlined, ArrowRightOutlined, ThunderboltFilled } from '@ant-design/icons';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.finalboss.io';

const plans = [
  {
    name: 'Autopilot',
    price: '$199',
    period: '/month',
    description: 'For teams that want autonomous content without the overhead.',
    accent: 'blue' as const,
    cta: 'Start Publishing',
    href: `${APP_URL}/sign-up`,
    features: [
      'Unlimited AI-generated articles',
      'Automated research & fact-checking',
      'Industry-matched brand voice',
      'WordPress & CMS auto-publishing',
      'SEO optimization & internal linking',
      'AI-generated images',
      'Semantic gap analysis',
      'Email support',
    ],
  },
  {
    name: 'Fully Managed',
    price: '$499',
    period: '/month',
    description: 'We run everything. You review and approve.',
    accent: 'orange' as const,
    cta: 'Talk to Us',
    href: `${APP_URL}/sign-up?plan=managed`,
    popular: true,
    features: [
      'Everything in Autopilot',
      'Dedicated content strategist',
      'Custom editorial calendar',
      'Multi-vertical persona setup',
      'Priority publishing queue',
      'Backlink coordination',
      'Monthly performance reports',
      'Slack & priority support',
    ],
  },
];

const accentStyles = {
  blue: {
    border: 'border-[rgba(214,235,253,0.19)]',
    badge: 'text-[#3b9eff] bg-[rgba(0,117,255,0.12)] border-[rgba(0,117,255,0.2)]',
    price: 'text-[#f0f0f0]',
    cta: 'bg-white hover:bg-[#f0f0f0] text-black',
    check: 'text-[#3b9eff]',
  },
  orange: {
    border: 'border-[rgba(255,128,31,0.3)]',
    badge: 'text-[#ff801f] bg-[rgba(255,89,0,0.12)] border-[rgba(255,89,0,0.2)]',
    price: 'text-[#f0f0f0]',
    cta: 'bg-[#ff801f] hover:bg-[#ffa057] text-black',
    check: 'text-[#ff801f]',
  },
};

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(214,235,253,0.19)] text-xs font-medium text-[#a1a4a5] mb-6">
            <ThunderboltFilled className="text-[#ffc53d]" /> SIMPLE PRICING
          </div>
          <h2
            className="text-3xl md:text-[3.5rem] font-normal tracking-tight text-[#f0f0f0] mb-4 leading-[1.1]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            One engine. <span className="text-[#464a4d]">Two ways to run it.</span>
          </h2>
          <p className="text-[#a1a4a5] max-w-xl mx-auto leading-relaxed">
            No per-article fees. No hidden costs. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => {
            const styles = accentStyles[plan.accent];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative rounded-2xl border ${styles.border} p-8 flex flex-col`}
                style={{ boxShadow: 'rgba(176, 199, 217, 0.145) 0px 0px 0px 1px' }}
              >
                {plan.popular && (
                  <div className={`absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-medium border ${styles.badge}`}>
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">{plan.name}</h3>
                  <p className="text-sm text-[#5c5c5c] mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-5xl font-normal tracking-tight ${styles.price}`}
                      style={{ fontFamily: "var(--font-dm-serif), serif" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-[#5c5c5c] text-sm">{plan.period}</span>
                  </div>
                </div>

                <a
                  href={plan.href}
                  className={`group w-full py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] mb-8 ${styles.cta}`}
                >
                  {plan.cta}
                  <ArrowRightOutlined className="group-hover:translate-x-0.5 transition-transform text-xs" />
                </a>

                <div className="flex flex-col gap-3.5">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckOutlined className={`text-xs mt-1 ${styles.check}`} />
                      <span className="text-sm text-[#a1a4a5]">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[#464a4d] mt-10"
        >
          Need a custom plan for your agency or enterprise?{' '}
          <a href="#" className="text-[#3b9eff] hover:text-white transition-colors">Let&apos;s talk.</a>
        </motion.p>
      </div>
    </section>
  );
};
