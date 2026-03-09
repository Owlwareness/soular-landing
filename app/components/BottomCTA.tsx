'use client';

import { AppStoreBadge } from './AppStoreBadge';
import { GlowingCTA } from './GlowingCTA';
import { ScrollReveal } from './ScrollReveal';

interface BottomCTAProps {
  appStoreUrl: string;
}

export function BottomCTA({ appStoreUrl }: BottomCTAProps) {
  return (
    <section className="py-10 md:py-16 px-4 text-center">
      <ScrollReveal>
        <div className="flex justify-center">
          <GlowingCTA>
            <AppStoreBadge url={appStoreUrl} />
          </GlowingCTA>
        </div>
      </ScrollReveal>
    </section>
  );
}
