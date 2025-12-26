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
    <section className="py-6 md:py-24 overflow-visible">
      <div className={`flex flex-col gap-4 md:flex-row md:items-center md:gap-16 md:max-w-6xl md:mx-auto md:px-6 ${isRight ? 'md:flex-row-reverse' : ''}`}>
        {/* Mockup - edge-to-edge on mobile, 60% on desktop */}
        <div className="w-full md:w-3/5 flex justify-center">
          {media.type === 'video' ? (
            <video
              src={media.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-[85vw] max-w-[400px] md:w-full md:max-w-none h-auto"
              aria-label={media.alt}
            >
              <track kind="descriptions" label={media.alt} />
            </video>
          ) : (
            <img
              src={media.src}
              alt={media.alt}
              className="w-[85vw] max-w-[400px] md:w-full md:max-w-none h-auto"
            />
          )}
        </div>
        
        {/* Content - takes 40% on desktop */}
        <div className="px-4 md:px-0 md:w-2/5 text-center md:text-left">
          <h2 className="text-xl font-semibold text-foreground md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-muted md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
