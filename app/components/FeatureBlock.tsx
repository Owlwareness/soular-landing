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
    <section className="py-12 md:py-24">
      <div className={`mx-auto max-w-6xl flex flex-col gap-6 md:flex-row md:items-center md:gap-16 md:px-6 ${isRight ? 'md:flex-row-reverse' : ''}`}>
        {/* Mockup - full screen width on mobile, 60% on desktop */}
        <div className="w-screen -mx-[50vw] left-1/2 relative md:w-3/5 md:mx-0 md:left-0">
          <IPhoneMockup>
            {media.type === 'video' ? (
              <video
                src={media.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full"
                aria-label={media.alt}
              >
                <track kind="descriptions" label={media.alt} />
              </video>
            ) : (
              <img
                src={media.src}
                alt={media.alt}
                className="h-full w-full"
              />
            )}
          </IPhoneMockup>
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
