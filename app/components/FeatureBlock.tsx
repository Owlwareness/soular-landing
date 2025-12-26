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
    <section className="py-4 md:py-16">
      <div className={`flex flex-col gap-3 md:flex-row md:items-center md:gap-12 md:max-w-7xl md:mx-auto md:px-8 ${isRight ? 'md:flex-row-reverse' : ''}`}>
        {/* Mockup - scale up and crop the black padding */}
        <div className="w-full md:w-3/5 overflow-hidden">
          <div className="scale-[1.8] md:scale-[1.25] origin-center">
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
        </div>
        
        {/* Content */}
        <div className="px-4 md:px-0 md:w-2/5 text-center md:text-left">
          <h2 className="text-xl font-semibold text-foreground md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-muted md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
