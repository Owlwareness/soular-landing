import { IPhoneMockup } from './IPhoneMockup';
import type { MediaConfig } from '@/config/content';

interface FeatureBlockProps {
  title: string;
  description: string;
  media: MediaConfig;
  alignment?: 'left' | 'right';
}

export function FeatureBlock({ title, description, media, alignment = 'left' }: FeatureBlockProps) {
  const isRight = alignment === 'right';
  
  return (
    <section className="py-12 md:py-24 overflow-visible">
      <div className={`flex flex-col gap-6 md:flex-row md:items-center md:gap-16 md:max-w-6xl md:mx-auto md:px-6 ${isRight ? 'md:flex-row-reverse' : ''}`}>
        {/* Mockup - 100vw on mobile, 60% on desktop */}
        <div className="w-full md:w-3/5">
          {media.type === 'video' ? (
            <video
              src={media.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              aria-label={media.alt}
            >
              <track kind="descriptions" label={media.alt} />
            </video>
          ) : (
            <img
              src={media.src}
              alt={media.alt}
              className="w-full h-auto"
            />
          )}
        </div>
        
        {/* Content - takes 40% on desktop */}
        <div className="px-6 md:px-0 md:w-2/5 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
