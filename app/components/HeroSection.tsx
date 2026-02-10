import Image from 'next/image';
import { AppStoreBadge } from './AppStoreBadge';

interface HeroSectionProps {
  headline: string;
  tagline: string;
  appStoreUrl: string;
}

export function HeroSection({ headline, tagline, appStoreUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <Image
          src="/images/logo.png"
          alt="SoularVerse logo"
          width={80}
          height={80}
          className="mx-auto mb-6 rounded-2xl md:w-24 md:h-24"
          priority
        />
        <h1 className="text-3xl font-bold text-foreground leading-tight md:text-6xl tracking-tight">
          <span className="bg-gradient-to-r from-white via-accent-light to-accent bg-clip-text text-transparent">
            {headline}
          </span>
        </h1>
        <p className="mt-4 text-base text-muted md:text-xl">
          {tagline}
        </p>
        <div className="mt-8 cta-glow inline-block">
          <AppStoreBadge url={appStoreUrl} />
        </div>
      </div>
    </section>
  );
}
