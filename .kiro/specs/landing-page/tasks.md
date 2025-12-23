# Implementation Plan

> **Mobile-First Priority**: This landing page is designed for phone viewing first. All components start with mobile styles, then scale up for tablet/desktop. Test on mobile viewport (375px) before any other size.

- [x] 1. Initialize Next.js project with Tailwind CSS


  - Create new Next.js 14 project with App Router (`npx create-next-app@latest soular-landing --typescript --tailwind --app`)
  - Configure Tailwind with mobile-first breakpoints (default styles = mobile, `md:` = tablet, `lg:` = desktop)
  - Set up project structure: `app/`, `components/`, `config/`, `public/`
  - Add base global styles and CSS variables for Soular brand colors
  - Set viewport meta tag for proper mobile rendering
  - _Requirements: 8.1, 9.1, 9.2, 9.3_





- [ ] 2. Create content configuration
  - [x] 2.1 Create `config/content.ts` with all landing page copy




    - Define hero content (headline, tagline, App Store URL placeholder)
    - Define three feature block configs with titles, descriptions, media paths
    - Define trust section URLs and footer tagline
    - _Requirements: 1.1, 1.2, 3.3, 4.3, 5.3, 7.1_



- [ ] 3. Build core components
  - [ ] 3.1 Create AppStoreBadge component
    - Download official Apple App Store badge SVG
    - Create component that renders badge as link to App Store URL
    - Ensure badge meets accessibility requirements (alt text)
    - _Requirements: 1.3, 1.4_
  
  - [x] 3.2 Create IPhoneMockup component


    - Create device frame using CSS (or SVG frame asset)
    - Accept children (image or video) to display inside frame
    - Size mockup to fit comfortably on mobile screen (~80% width max)
    - Scale up proportionally on larger screens
    - _Requirements: 2.2, 8.1_
  
  - [ ]* 3.3 Write property test for IPhoneMockup in FeatureBlocks
    - **Property 1: All Feature Blocks contain iPhone Mockup**
    - **Validates: Requirements 2.2**




  
  - [ ] 3.4 Create FeatureBlock component
    - Accept title, description, and media config
    - Render IPhoneMockup with image or video based on media type
    - For video: set autoplay, muted, loop, playsinline attributes (playsinline critical for iOS)


    - Mobile layout: stacked vertically (mockup above or below text)
    - Desktop: support left/right alignment prop for alternating layout
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 8.1_


  
  - [x]* 3.5 Write property test for video attributes




    - **Property 2: All videos autoplay muted with loop**
    - **Validates: Requirements 2.4**

- [ ] 4. Build page sections
  - [ ] 4.1 Create HeroSection component
    - Render headline, tagline, and AppStoreBadge
    - Style for mobile-first: full-width, centered, comfortable thumb-reach for CTA
    - Typography sized for mobile readability (headline ~28-32px, tagline ~16-18px)


    - Add subtle background (gradient or stars theme)
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 8.1_
  
  - [x] 4.2 Create TrustSection component





    - Render Privacy Policy and Terms of Service links
    - Style as minimal footer-adjacent section


    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  
  - [ ] 4.3 Create Footer component
    - Render "Built with love by a human, powered by AI" tagline
    - Include secondary AppStoreBadge
    - _Requirements: 7.1, 7.2_

- [ ] 5. Assemble main page
  - [ ] 5.1 Build `app/page.tsx` with all sections
    - Import and render HeroSection
    - Map over features config to render three FeatureBlocks
    - Render TrustSection and Footer
    - Ensure proper section spacing and scroll behavior
    - _Requirements: 2.1, 3.1, 4.1, 5.1_
  
  - [ ]* 5.2 Write property test for touch targets
    - **Property 3: All interactive elements meet touch target minimum**
    - **Validates: Requirements 8.2**

- [ ] 6. Add placeholder media assets
  - Create placeholder images/videos in `public/videos/` and `public/images/`
  - Add iPhone frame asset if using image-based mockup
  - Document where to replace with real app recordings
  - _Requirements: 3.2, 4.2, 5.2_

- [ ] 7. Create legal page routes (placeholder)
  - [ ] 7.1 Create `app/privacy/page.tsx` placeholder
    - Basic page structure for Privacy Policy content
    - _Requirements: 6.2, 6.4_
  
  - [ ] 7.2 Create `app/terms/page.tsx` placeholder
    - Basic page structure for Terms of Service content
    - _Requirements: 6.3, 6.4_

- [ ] 8. Responsive polish
  - **Primary**: Verify mobile (375px) looks perfect - this is the main experience
  - Secondary: Test tablet (768px) and desktop (1024px+) scale gracefully
  - Ensure all touch targets are 44x44pt minimum on mobile
  - Verify text is readable without zooming on mobile
  - Test thumb-friendly placement of CTAs (App Store badges)
  - _Requirements: 8.1, 8.2, 8.4_

- [ ] 9. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 10. Configure for Vercel deployment
  - Add `vercel.json` if needed for custom configuration
  - Set up environment variables for App Store URL
  - Test local build with `npm run build`
  - Document deployment steps and Cloudflare DNS setup
  - _Requirements: 9.2, 9.4_

- [ ] 11. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
