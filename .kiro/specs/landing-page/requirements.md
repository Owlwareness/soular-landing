# Requirements Document

## Introduction

Soular Landing Page - a mobile-first marketing website that serves as the storefront for the Soular dating app. The page communicates the app's anti-dating-app philosophy: no faces until real connection, depth over swipes, and meaningful conversation that builds visual star constellations. The landing page will be deployed separately from the main app (via Vercel) and will drive App Store downloads.

## Glossary

- **Landing_Page**: The single-page marketing website for Soular
- **Hero_Section**: The top fold of the page containing headline, tagline, and primary CTA
- **Feature_Block**: A content section showcasing a specific app capability with visual demonstration
- **iPhone_Mockup**: A device frame displaying app screenshots or video content
- **App_Store_Badge**: Official Apple "Download on the App Store" button/image
- **Trust_Section**: Footer area containing legal links and credibility elements
- **Power_Moment**: A key emotional/functional moment in the app that demonstrates value

## Requirements

### Requirement 1

**User Story:** As a potential user, I want to immediately understand what makes Soular different from other dating apps, so that I can decide if it aligns with my values.

#### Acceptance Criteria

1. WHEN a visitor loads the Landing_Page THEN the Landing_Page SHALL display a Hero_Section with headline "Dating for people who hate dating apps" within the viewport
2. WHEN a visitor views the Hero_Section THEN the Landing_Page SHALL display supporting tagline "No faces. Real depth. Real connection." below the headline
3. WHEN a visitor views the Hero_Section THEN the Landing_Page SHALL display an official App_Store_Badge as the primary call-to-action
4. WHEN a visitor taps the App_Store_Badge THEN the Landing_Page SHALL navigate to the Soular App Store listing

### Requirement 2

**User Story:** As a potential user, I want to see how the app works visually, so that I can understand the experience before downloading.

#### Acceptance Criteria

1. WHEN a visitor scrolls past the Hero_Section THEN the Landing_Page SHALL display three Feature_Block sections in sequence
2. WHEN displaying a Feature_Block THEN the Landing_Page SHALL show app content within an iPhone_Mockup frame
3. WHEN displaying Feature_Block content THEN the Landing_Page SHALL support both static screenshots and animated video demonstrations
4. WHEN a Feature_Block contains video THEN the Landing_Page SHALL autoplay the video muted with loop enabled

### Requirement 3

**User Story:** As a potential user, I want to understand the "depth unlocks stars" mechanic, so that I can see how meaningful conversation creates visual progress.

#### Acceptance Criteria

1. WHEN displaying the first Feature_Block THEN the Landing_Page SHALL showcase the relationship mapping Power_Moment
2. WHEN showcasing relationship mapping THEN the Landing_Page SHALL demonstrate: deep message sent → AI detects depth → new stars appear on relationship constellation
3. WHEN displaying this Feature_Block THEN the Landing_Page SHALL include copy explaining "Go deep, unlock stars. Your conversations build a constellation unique to your connection."

### Requirement 4

**User Story:** As a potential user, I want to understand the personal growth aspect, so that I can see Soular helps me understand myself too.

#### Acceptance Criteria

1. WHEN displaying the second Feature_Block THEN the Landing_Page SHALL showcase the personal constellation Power_Moment
2. WHEN showcasing personal constellation THEN the Landing_Page SHALL demonstrate: AI surfaces insight from chat → user expands on theme → personal star is created
3. WHEN displaying this Feature_Block THEN the Landing_Page SHALL include copy explaining "Discover yourself through conversation. The AI finds patterns in how you connect and invites you to go deeper."

### Requirement 5

**User Story:** As a potential user, I want to understand the face reveal mechanic, so that I can see how Soular ensures I connect with real people, not just photos.

#### Acceptance Criteria

1. WHEN displaying the third Feature_Block THEN the Landing_Page SHALL showcase the face reveal Power_Moment
2. WHEN showcasing face reveal THEN the Landing_Page SHALL demonstrate: constellation reaches threshold → face reveal unlocks → user sees who they've connected with
3. WHEN displaying this Feature_Block THEN the Landing_Page SHALL include copy explaining "See who you've connected with, not who you're swiping on. Faces unlock after real depth."

### Requirement 6

**User Story:** As a potential user, I want to access legal information and trust signals, so that I can feel confident the app is legitimate and respects my privacy.

#### Acceptance Criteria

1. WHEN a visitor scrolls to the bottom of the Landing_Page THEN the Landing_Page SHALL display a Trust_Section
2. WHEN displaying the Trust_Section THEN the Landing_Page SHALL include a link to the Privacy Policy page
3. WHEN displaying the Trust_Section THEN the Landing_Page SHALL include a link to the Terms of Service page
4. WHEN a visitor taps a legal link THEN the Landing_Page SHALL navigate to the corresponding legal document

### Requirement 7

**User Story:** As a potential user, I want to know who built this app, so that I can feel a human connection to the product.

#### Acceptance Criteria

1. WHEN displaying the page footer THEN the Landing_Page SHALL display the text "Built with love by a human, powered by AI"
2. WHEN displaying the footer THEN the Landing_Page SHALL include a secondary App_Store_Badge for final conversion opportunity

### Requirement 8

**User Story:** As a mobile user, I want the landing page to work perfectly on my phone, so that I can learn about the app on the same device I'll use it on.

#### Acceptance Criteria

1. WHEN a visitor loads the Landing_Page on a mobile device THEN the Landing_Page SHALL render with mobile-first responsive layout
2. WHEN displaying on mobile THEN the Landing_Page SHALL ensure all interactive elements meet minimum 44x44pt touch targets
3. WHEN displaying on mobile THEN the Landing_Page SHALL load critical content within 3 seconds on 3G connection
4. WHEN displaying on tablet or desktop THEN the Landing_Page SHALL scale content appropriately while maintaining visual hierarchy

### Requirement 9

**User Story:** As a developer, I want the landing page to be a separate deployable project, so that the main app codebase stays focused on the mobile experience.

#### Acceptance Criteria

1. WHEN the Landing_Page project is initialized THEN the Landing_Page SHALL exist as a standalone repository separate from the main Soular app
2. WHEN deploying the Landing_Page THEN the Landing_Page SHALL be deployable to Vercel as a static site
3. WHEN building the Landing_Page THEN the Landing_Page SHALL use Next.js or similar framework compatible with Vercel deployment
4. WHEN the Landing_Page is deployed THEN the Landing_Page SHALL be configurable to use a custom domain via Cloudflare DNS
