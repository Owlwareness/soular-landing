'use client';

import Image from 'next/image';
import { AppStoreBadge } from './AppStoreBadge';
import { GlowingCTA } from './GlowingCTA';
import { TextShimmer } from './TextShimmer';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  headline: string;
  tagline: string;
  appStoreUrl: string;
}

export function HeroSection({ headline, tagline, appStoreUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <ScrollReveal delay={0.1}>
          <Image
            src="/images/logo.png"
            alt="SoularLove logo"
            width={100}
            height={100}
            className="mx-auto mb-10 rounded-2xl md:w-32 md:h-32"
            priority
          />
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <h1 className="text-3xl font-bold leading-tight md:text-6xl tracking-tight">
            <span className="bg-gradient-to-r from-[#e0d0f0] via-[#b08fd0] to-[#d4a574] bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="mt-6">
            <TextShimmer
              as="p"
              className="text-base md:text-xl [--base-color:#8a7f92] [--base-gradient-color:#e8c47c]"
              duration={3}
              spread={3}
            >
              {tagline}
            </TextShimmer>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.55}>
          <div className="mt-12 flex justify-center">
            <GlowingCTA>
              <AppStoreBadge url={appStoreUrl} />
            </GlowingCTA>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
