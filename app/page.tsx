import { HeroSection } from './components/HeroSection';
import { FeatureBlock } from './components/FeatureBlock';
import { AppStoreBadge } from './components/AppStoreBadge';
import { Footer } from './components/Footer';
import { StarBackground } from './components/StarBackground';
import { landingContent } from '@/config/content';

export default function Home() {
  const { hero, features, trust, footer } = landingContent;

  return (
    <>
      <StarBackground />
      <main className="relative z-10 min-h-screen">
        <HeroSection
          headline={hero.headline}
          tagline={hero.tagline}
          appStoreUrl={hero.appStoreUrl}
        />

        {features.map((feature, index) => (
          <FeatureBlock
            key={feature.id}
            title={feature.title}
            description={feature.description}
            media={feature.media}
            alignment={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}

        {/* Final CTA - above footer */}
        <section className="py-10 md:py-16 px-4 text-center">
          <div className="cta-glow inline-block">
            <AppStoreBadge url={hero.appStoreUrl} />
          </div>
        </section>

        <Footer
          tagline={footer.tagline}
          privacyPolicyUrl={trust.privacyPolicyUrl}
          termsOfServiceUrl={trust.termsOfServiceUrl}
        />
      </main>
    </>
  );
}
