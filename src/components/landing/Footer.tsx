import React from 'react';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, ThunderboltFilled } from '@ant-design/icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[rgba(214,235,253,0.19)] pt-20 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <ThunderboltFilled className="text-[#f0f0f0]" />
              <span className="text-[#f0f0f0] font-semibold text-lg">FinalBoss_</span>
            </div>
            <p className="text-[#5c5c5c] leading-relaxed max-w-xs">
              The autonomous content engine that researches, writes, and publishes — so your team doesn&apos;t have to.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <SocialIcon icon={<TwitterOutlined />} />
              <SocialIcon icon={<GithubOutlined />} />
              <SocialIcon icon={<LinkedinOutlined />} />
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[#f0f0f0] font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-[#5c5c5c]">
              <FooterLink>The Engine</FooterLink>
              <FooterLink>Supported Verticals</FooterLink>
              <FooterLink>Integrations</FooterLink>
              <FooterLink>Pricing</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[#f0f0f0] font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-[#5c5c5c]">
              <FooterLink>Documentation</FooterLink>
              <FooterLink>API Reference</FooterLink>
              <FooterLink>System Status</FooterLink>
              <FooterLink>Changelog</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[#f0f0f0] font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-[#5c5c5c]">
              <FooterLink>Manifesto</FooterLink>
              <FooterLink>Contact</FooterLink>
              <FooterLink>Privacy</FooterLink>
              <FooterLink>Terms</FooterLink>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(214,235,253,0.19)] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#464a4d]">
            &copy; 2025 FinalBoss Engine. All systems operational.
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(214,235,253,0.19)]">
            <div className="w-2 h-2 rounded-full bg-[#11ff99] animate-pulse" />
            <span className="text-xs text-[#a1a4a5] font-medium">Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="text-[#5c5c5c] hover:text-white transition-colors text-lg">
    {icon}
  </a>
);

const FooterLink = ({ children }: { children: React.ReactNode }) => (
  <li>
    <a href="#" className="hover:text-[#3b9eff] transition-colors">
      {children}
    </a>
  </li>
);
