# Landing Page Design Document

## Overview

The Soular Landing Page is a mobile-first, single-page marketing website that communicates the app's anti-dating-app philosophy. It will be built as a standalone Next.js project, deployed to Vercel, and connected to a custom domain via Cloudflare DNS.

The page follows a vertical scroll narrative: Hook (Hero) → Magic (3 Feature Blocks) → Payoff (Trust + Footer). Each section builds on the previous to guide visitors from curiosity to download.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Landing Page                          │
├─────────────────────────────────────────────────────────┤
│  Next.js 14 (App Router)                                │
│  ├── Static Site Generation (SSG)                       │
│  ├── Tailwind CSS for styling                           │
│  └── Framer Motion for animations (optional)            │
├─────────────────────────────────────────────────────────┤
│  Deployment: Vercel                                      │
│  DNS: Cloudflare                                         │
│  Assets: Vercel Edge Network / optimized images          │
└─────────────────────────────────────────────────────────┘
```

### Page Structure

```
┌─────────────────────────────────────┐
│           HERO SECTION              │
│  ┌─────────────────────────────┐    │
│  │  "Dating for people who     │    │
│  │   hate dating apps"         │    │
│  │                             │    │
│  │  No faces. Real depth.      │    │
│  │  Real connection.           │    │
│  │                             │    │
│  │  [Download on App Store]    │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
          ↓ scroll ↓
┌─────────────────────────────────────┐
│      FEATURE BLOCK 1                │
│  "Go Deep, Unlock Stars"            │
│  ┌─────────────┐                    │
│  │  iPhone     │  Deep message →    │
│  │  Mockup     │  AI detects →      │
│  │  [video]    │  Stars appear      │
│  └─────────────┘                    │
└─────────────────────────────────────┘
          ↓ scroll ↓
┌─────────────────────────────────────┐
│      FEATURE BLOCK 2                │
│  "Discover Yourself"                │
│  ┌─────────────┐                    │
│  │  iPhone     │  AI insight →      │
│  │  Mockup     │  Expand theme →    │
│  │  [video]    │  Personal star     │
│  └─────────────┘                    │
└─────────────────────────────────────┘
          ↓ scroll ↓
┌─────────────────────────────────────┐
│      FEATURE BLOCK 3                │
│  "See Who You've Connected With"    │
│  ┌─────────────┐                    │
│  │  iPhone     │  Threshold →       │
│  │  Mockup     │  Face reveal →     │
│  │  [video]    │  Real person       │
│  └─────────────┘                    │
└─────────────────────────────────────┘
          ↓ scroll ↓
┌─────────────────────────────────────┐
│        TRUST SECTION                │
│  Privacy Policy | Terms of Service  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│           FOOTER                    │
│  Built with love by a human,        │
│  powered by AI                      │
│  [Download on App Store]            │
└─────────────────────────────────────┘
```

## Components and Interfaces

### Component Hierarchy

```
app/
├── page.tsx              # Main landing page
├── layout.tsx            # Root layout with metadata
├── globals.css           # Global styles + Tailwind
└── components/
    ├── HeroSection.tsx       # Hero with headline + CTA
    ├── FeatureBlock.tsx      # Reusable feature section
    ├── IPhoneMockup.tsx      # Device frame component
    ├── AppStoreBadge.tsx     # Apple badge link
    ├── TrustSection.tsx      # Legal links
    └── Footer.tsx            # Footer with tagline
```

### Component Interfaces

```typescript
// HeroSection.tsx
interface HeroSectionProps {
  headline: string;
  tagline: string;
  appStoreUrl: string;
}

// FeatureBlock.tsx
interface FeatureBlockProps {
  title: string;
  description: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
  alignment: 'left' | 'right'; // For alternating layout on desktop
}

// IPhoneMockup.tsx
interface IPhoneMockupProps {
  children: React.ReactNode; // Image or video element
}

// AppStoreBadge.tsx
interface AppStoreBadgeProps {
  url: string;
  className?: string;
}

// TrustSection.tsx
interface TrustSectionProps {
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
}
```

## Data Models

### Content Configuration

```typescript
// config/content.ts
export const landingContent = {
  hero: {
    headline: "Dating for people who hate dating apps",
    tagline: "No faces. Real depth. Real connection.",
    appStoreUrl: "https://apps.apple.com/app/soular/id[APP_ID]"
  },
  features: [
    {
      id: 'relationship-mapping',
      title: "Go deep, unlock stars",
      description: "Your conversations build a constellation unique to your connection. Every meaningful exchange adds a new star to your shared map.",
      media: {
        type: 'video',
        src: '/videos/relationship-mapping.mp4',
        alt: 'Deep message triggers star mapping animation'
      }
    },
    {
      id: 'personal-constellation',
      title: "Discover yourself through conversation",
      description: "The AI finds patterns in how you connect and invites you to go deeper. Build your personal constellation by exploring who you are.",
      media: {
        type: 'video',
        src: '/videos/personal-constellation.mp4',
        alt: 'Personal insight expansion creating a star'
      }
    },
    {
      id: 'face-reveal',
      title: "See who you've connected with",
      description: "Not who you're swiping on. Faces unlock after real depth. Four stars of genuine connection reveals the person behind the conversation.",
      media: {
        type: 'video',
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
    tagline: "Built with love by a human, powered by AI"
  }
};
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the prework analysis, most acceptance criteria are specific examples (testing exact content) rather than universal properties. The following properties apply across multiple elements:

### Property 1: All Feature Blocks contain iPhone Mockup

*For any* Feature Block rendered on the page, it SHALL contain an iPhone Mockup component wrapping its media content.

**Validates: Requirements 2.2**

### Property 2: All videos autoplay muted with loop

*For any* video element within a Feature Block, it SHALL have the `autoplay`, `muted`, and `loop` attributes set to true.

**Validates: Requirements 2.4**

### Property 3: All interactive elements meet touch target minimum

*For any* interactive element (buttons, links) on the page when rendered at mobile viewport, it SHALL have minimum dimensions of 44x44 CSS pixels.

**Validates: Requirements 8.2**

## Error Handling

| Scenario | Handling |
|----------|----------|
| Video fails to load | Display static fallback image within mockup |
| App Store URL not configured | Badge links to placeholder, console warning in dev |
| Legal pages not created | Links point to `/privacy` and `/terms` routes (404 until created) |
| Image optimization fails | Serve original image, log warning |

## Testing Strategy

### Unit Testing

Using Vitest + React Testing Library:

- Test that HeroSection renders headline, tagline, and App Store badge
- Test that FeatureBlock renders title, description, and media
- Test that IPhoneMockup wraps children correctly
- Test that AppStoreBadge links to correct URL
- Test that TrustSection contains Privacy Policy and Terms links

### Property-Based Testing

Using fast-check with Vitest:

- **Property 1**: Generate array of feature configs, verify all rendered blocks contain mockup
- **Property 2**: Generate video elements, verify all have required attributes
- **Property 3**: Generate interactive elements, verify all meet minimum touch target size

### Integration Testing

- Verify page renders all sections in correct order
- Verify scroll behavior works correctly
- Verify responsive layout at mobile/tablet/desktop breakpoints

### Visual Testing (Manual)

- iPhone mockup looks correct with various media sizes
- Animations feel smooth and not distracting
- Color scheme and typography are consistent
- App Store badge is official and correctly sized
