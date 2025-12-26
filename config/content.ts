export const landingContent = {
  hero: {
    headline: "Dating for people who hate dating apps",
    tagline: "No faces. Real depth. Real connection.",
    appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com/app/soular/id000000000"
  },
  features: [
    {
      id: 'relationship-mapping',
      title: "Go deep, unlock stars",
      description: "Your conversations build a constellation unique to your connection. Every meaningful exchange adds a new star to your shared map.",
      media: {
        type: 'video' as const,
        src: '/videos/relationship-mapping.mp4',
        alt: 'Deep message triggers star mapping animation'
      }
    },
    {
      id: 'personal-constellation',
      title: "Discover yourself through conversation",
      description: "The AI finds patterns in how you connect and invites you to go deeper. Build your personal constellation by exploring who you are.",
      media: {
        type: 'video' as const,
        src: '/videos/personal-constellation.mp4',
        alt: 'Personal insight expansion creating a star'
      }
    },
    {
      id: 'face-reveal',
      title: "See who you've connected with",
      description: "Not who you're swiping on. Faces unlock after real depth. Four stars of genuine connection reveals the person behind the conversation.",
      media: {
        type: 'video' as const,
        src: '/videos/face-reveal.mp4',
        alt: 'Face reveal unlock animation'
      }
    }
  ],
  trust: {
    privacyPolicyUrl: "/privacy",
    termsOfServiceUrl: "/terms"
  },
  footer: {
    tagline: "Built with love,\npowered by AI"
  }
} as const;

export type FeatureConfig = typeof landingContent.features[number];
export type MediaConfig = FeatureConfig['media'];
