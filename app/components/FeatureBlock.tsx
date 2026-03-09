'use client';

import { ScrollReveal } from './ScrollReveal';
import { BlurReveal } from './BlurReveal';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { MediaConfig } from '@/config/content';

interface FeatureBlockProps {
  title: string;
  description: string;
  media: MediaConfig;
  alignment?: 'left' | 'right';
}

export function FeatureBlock({ title, description, media, alignment = 'left' }: FeatureBlockProps) {
  const isRight = alignment === 'right';
  const [titleDone, setTitleDone] = useState(false);

  return (
    <section className="py-4 md:py-16">
      <div className={`flex flex-col gap-3 md:flex-row md:items-center md:gap-12 md:max-w-7xl md:mx-auto md:px-8 ${isRight ? 'md:flex-row-reverse' : ''}`}>
        {/* Mockup */}
        <ScrollReveal
          className="w-full md:w-3/5 overflow-hidden py-16 md:py-0"
          direction={isRight ? 'right' : 'left'}
          delay={0.1}
        >
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
        </ScrollReveal>

        {/* Content */}
        <div className="px-4 md:px-0 md:w-2/5 text-center md:text-left">
          <BlurReveal
            as="h2"
            className="text-xl font-semibold text-foreground md:text-3xl"
            inView
            once
            delay={0.4}
            speedReveal={0.8}
            speedSegment={0.35}
            onAnimationComplete={() => setTitleDone(true)}
          >
            {title}
          </BlurReveal>
          <motion.p
            className="mt-2 text-sm text-muted md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={titleDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
