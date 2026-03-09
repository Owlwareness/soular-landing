'use client';

import { type ReactNode } from 'react';

interface GlowingCTAProps {
  children: ReactNode;
  className?: string;
}

export function GlowingCTA({ children, className = '' }: GlowingCTAProps) {
  return (
    <div className={`group relative inline-block rounded-xl p-[2px] ${className}`}>
      {/* Animated rotating gradient border */}
      <div
        className="absolute inset-0 rounded-xl opacity-75 blur-sm transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'conic-gradient(from var(--glow-angle, 0deg), #6b5b7b, #9b7ec8, #d4a574, #c4875a, #6b5b7b)',
          animation: 'glow-spin 3s linear infinite',
        }}
      />
      {/* Sharper border layer on top */}
      <div
        className="absolute inset-0 rounded-xl opacity-90"
        style={{
          background:
            'conic-gradient(from var(--glow-angle, 0deg), #6b5b7b, #9b7ec8, #d4a574, #c4875a, #6b5b7b)',
          animation: 'glow-spin 3s linear infinite',
        }}
      />
      {/* Inner content with solid bg to mask the gradient */}
      <div className="relative rounded-[10px] bg-[#0a0812]">
        {children}
      </div>
    </div>
  );
}
