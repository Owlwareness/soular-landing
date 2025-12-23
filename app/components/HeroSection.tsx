import { AppStoreBadge } from './AppStoreBadge';

interface HeroSectionProps {
  headline: string;
  tagline: string;
  appStoreUrl: string;
}

export function HeroSection({ headline, tagline, appStoreUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground leading-tight md:text-5xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-muted md:text-xl">
          {tagline}
        </p>
        <div className="mt-10 cta-glow inline-block">
          <AppStoreBadge url={appStoreUrl} />
        </div>
      </div>
    </section>
  );
}
