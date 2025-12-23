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
    <section className="py-16 px-6 md:py-24">
      <div className={`mx-auto max-w-5xl flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${isRight ? 'md:flex-row-reverse' : ''}`}>
        {/* Mockup */}
        <div className="flex-1">
          <IPhoneMockup>
            {media.type === 'video' ? (
              <video
                src={media.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
                aria-label={media.alt}
              >
                <track kind="descriptions" label={media.alt} />
              </video>
            ) : (
              <img
                src={media.src}
                alt={media.alt}
                className="h-full w-full object-cover"
              />
            )}
          </IPhoneMockup>
        </div>
        
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
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
