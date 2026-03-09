import { HeroSection } from './components/HeroSection';
import { FeatureBlock } from './components/FeatureBlock';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { StarBackground } from './components/StarBackground';
import { landingContent } from '@/config/content';

export default function Home() {
  const { hero, features, trust } = landingContent;

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

        <BottomCTA appStoreUrl={hero.appStoreUrl} />

        <Footer
          privacyPolicyUrl={trust.privacyPolicyUrl}
          termsOfServiceUrl={trust.termsOfServiceUrl}
          supportUrl={trust.supportUrl}
        />
      </main>
    </>
  );
}
