import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Soular',
  description: 'Soular Privacy Policy - CAIVE LLC',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-accent hover:text-accent-light text-sm">
          ← Back to home
        </Link>
        
        <article className="mt-8 text-foreground">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-muted">
            <strong>CAIVE LLC</strong> · <strong>Soular Love</strong><br />
            Effective Date: December 26, 2025
          </p>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">The Short Version</h2>
            <p className="mt-4 text-muted leading-relaxed">
              We built Soular Love to help people connect authentically. Your data exists to make that happen - not to sell, not to advertise, not to exploit. We use AI to understand the depth of your conversations and create beautiful visualizations of your connections. That&apos;s it.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              When you delete your account, everything goes with it. Immediately. No 90-day holds, no archives, no &quot;we might keep some stuff.&quot; Gone.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">1. Who We Are</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Soular Love is operated by CAIVE LLC. When we say &quot;we,&quot; &quot;us,&quot; or &quot;our,&quot; we mean CAIVE LLC. When we say &quot;you&quot; or &quot;your,&quot; we mean you, the person using Soular Love.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              <strong>Contact:</strong>{' '}
              <a href="mailto:caive.social@gmail.com" className="text-accent hover:text-accent-light underline">
                caive.social@gmail.com
              </a>
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            
            <h3 className="mt-6 text-lg font-medium">Information You Provide</h3>
            
            <p className="mt-4 text-muted"><strong>Account Information</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Email address (for login and account recovery)</li>
              <li>Display name (shown to your matches)</li>
              <li>Password (encrypted, we never see the plain text)</li>
              <li>Birthdate (to verify you&apos;re 18+)</li>
            </ul>

            <p className="mt-4 text-muted"><strong>Profile Information</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside">
              <li>Profile photo (optional)</li>
            </ul>

            <p className="mt-4 text-muted"><strong>Content You Create</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Messages you send to matches</li>
              <li>Responses to Star Forge prompts (personal reflections)</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">Information We Generate</h3>
            
            <p className="mt-4 text-muted"><strong>Constellation Data</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>AI-analyzed themes from your conversations</li>
              <li>Star visualizations representing connection depth</li>
              <li>Relationship maps between you and your matches</li>
            </ul>

            <p className="mt-4 text-muted"><strong>Connection Records</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Who you&apos;ve matched with</li>
              <li>When face reveal was unlocked</li>
              <li>Block and report history</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">Information Collected Automatically</h3>
            
            <p className="mt-4 text-muted"><strong>Device Information</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Push notification token (to send you notifications)</li>
              <li>Device type (for app compatibility)</li>
            </ul>

            <p className="mt-4 text-muted"><strong>Usage Information</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Timestamps (when you last matched, messaged, etc.)</li>
              <li>App interaction data necessary for functionality</li>
            </ul>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
            <p className="mt-4 text-muted leading-relaxed">We use your information to:</p>
            <ol className="mt-2 text-muted list-decimal list-inside space-y-1">
              <li><strong>Provide the Service</strong> - Match you with others, enable messaging, display constellations</li>
              <li><strong>AI Analysis</strong> - Analyze conversation depth and extract meaningful themes to create your constellation visualizations</li>
              <li><strong>Send Notifications</strong> - Alert you to new matches, messages, and connection milestones</li>
              <li><strong>Ensure Safety</strong> - Review reports, enforce community guidelines, prevent abuse</li>
              <li><strong>Verify Age</strong> - Confirm all users are 18 or older</li>
              <li><strong>Improve Soular</strong> - Understand how the app is used to make it better</li>
            </ol>

            <p className="mt-6 text-muted leading-relaxed"><strong>We do NOT use your information to:</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Sell to third parties</li>
              <li>Target you with advertising</li>
              <li>Build marketing profiles</li>
              <li>Share with data brokers</li>
            </ul>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">4. AI and Your Conversations</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Soular uses artificial intelligence (Google&apos;s Gemini model via OpenRouter) to:
            </p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Determine if conversations have meaningful depth</li>
              <li>Extract themes and create star visualizations</li>
              <li>Generate follow-up questions for personal reflection</li>
            </ul>

            <p className="mt-4 text-muted leading-relaxed">
              <strong>How it works:</strong> When you chat with a match, our AI reads the conversation to understand if both people are sharing authentically. If so, it creates &quot;stars&quot; representing the themes you&apos;ve explored together. This is core to how Soular works.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              <strong>What we don&apos;t do:</strong> We don&apos;t train AI models on your conversations. We don&apos;t store conversation analysis beyond what&apos;s needed for your constellation. We don&apos;t share your messages with AI providers for any purpose other than real-time analysis.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">5. How We Share Your Information</h2>
            
            <h3 className="mt-6 text-lg font-medium">With Your Matches</h3>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Your display name</li>
              <li>Your profile photo (only after face reveal is unlocked)</li>
              <li>Messages you send them</li>
              <li>Shared constellation data</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">With Service Providers</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm text-muted">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-2 pr-4">Provider</th>
                    <th className="text-left py-2 pr-4">Purpose</th>
                    <th className="text-left py-2">Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 pr-4">Supabase</td>
                    <td className="py-2 pr-4">Database, authentication, file storage</td>
                    <td className="py-2">Account data, messages, constellation data</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 pr-4">OpenRouter/Google Gemini</td>
                    <td className="py-2 pr-4">AI conversation analysis</td>
                    <td className="py-2">Message content (processed, not stored by them)</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 pr-4">Expo</td>
                    <td className="py-2 pr-4">Push notifications</td>
                    <td className="py-2">Push tokens, notification content</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Resend</td>
                    <td className="py-2 pr-4">Admin email alerts</td>
                    <td className="py-2">Report details (admin only)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-muted leading-relaxed">
              These providers process data on our behalf and are contractually bound to protect it.
            </p>

            <h3 className="mt-6 text-lg font-medium">For Legal Reasons</h3>
            <p className="mt-2 text-muted leading-relaxed">
              We may disclose information if required by law, court order, or to protect the safety of our users or the public.
            </p>

            <h3 className="mt-6 text-lg font-medium">We Never Sell Your Data</h3>
            <p className="mt-2 text-muted leading-relaxed">
              Period. No exceptions. No &quot;trusted partners.&quot; No &quot;anonymized data sets.&quot; Never.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">6. Data Retention</h2>
            
            <p className="mt-4 text-muted leading-relaxed">
              <strong>Active Accounts:</strong> We retain your data while your account is active.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              <strong>Deleted Accounts:</strong> When you delete your account, we immediately and permanently delete:
            </p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Your profile and all personal information</li>
              <li>All your messages</li>
              <li>Your constellation data</li>
              <li>Your profile photo</li>
              <li>Your authentication credentials</li>
              <li>All connection records</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              This deletion is immediate and irreversible. We use cascade deletion - when your account goes, everything connected to it goes too.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              <strong>Expired Connections:</strong> Match data expires after 24 hours if no meaningful conversation occurs.
            </p>

            <p className="mt-4 text-muted leading-relaxed">
              <strong>Reports:</strong> If you report someone (or are reported), we retain a snapshot of relevant messages for safety review. This is deleted if the report is resolved or the reported account is deleted.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">7. Your Rights and Choices</h2>
            
            <p className="mt-4 text-muted leading-relaxed"><strong>Access Your Data:</strong> You can view your profile information, messages, and constellation data within the app.</p>
            <p className="mt-4 text-muted leading-relaxed"><strong>Update Your Data:</strong> You can update your name, photo, and other profile information anytime.</p>
            <p className="mt-4 text-muted leading-relaxed"><strong>Delete Your Data:</strong> You can delete your entire account from Settings. This is immediate and permanent.</p>
            <p className="mt-4 text-muted leading-relaxed"><strong>Notification Preferences:</strong> You can disable push notifications through your device settings.</p>
            <p className="mt-4 text-muted leading-relaxed"><strong>California Residents (CCPA):</strong> You have the right to know what data we collect, request deletion, and opt out of data sales (we don&apos;t sell data, so this is already satisfied).</p>
            <p className="mt-4 text-muted leading-relaxed"><strong>European Residents (GDPR):</strong> You have rights to access, rectification, erasure, data portability, and to object to processing. Contact us to exercise these rights.</p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">8. Data Security</h2>
            <p className="mt-4 text-muted leading-relaxed">We protect your data with:</p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li><strong>Encryption:</strong> All data encrypted in transit (HTTPS) and at rest</li>
              <li><strong>Row-Level Security:</strong> Database policies ensure you can only access your own data</li>
              <li><strong>Authentication:</strong> JWT tokens verify every request</li>
              <li><strong>Rate Limiting:</strong> Protection against abuse and attacks</li>
              <li><strong>Input Sanitization:</strong> Prevention of injection attacks</li>
              <li><strong>Limited Access:</strong> Only essential personnel can access the database</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              No system is 100% secure. If we discover a breach affecting your data, we&apos;ll notify you promptly.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">9. Children&apos;s Privacy</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Soular is not intended for anyone under 18. We verify age during signup and do not knowingly collect information from minors. If we learn we&apos;ve collected data from someone under 18, we&apos;ll delete it immediately.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">10. International Data Transfers</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Your data may be processed in the United States or other countries where our service providers operate. By using Soular, you consent to this transfer. We ensure appropriate safeguards are in place.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
            <p className="mt-4 text-muted leading-relaxed">
              We may update this policy occasionally. If we make significant changes, we&apos;ll notify you through the app or via email. Your continued use after changes constitutes acceptance.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">12. Contact Us</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Questions about this policy or your data?
            </p>
            <p className="mt-2 text-muted">
              <strong>Email:</strong>{' '}
              <a href="mailto:caive.social@gmail.com" className="text-accent hover:text-accent-light underline">
                caive.social@gmail.com
              </a>
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <p className="mt-8 text-sm text-muted italic">
            Last updated: December 26, 2025
          </p>
        </article>
      </div>
    </main>
  );
}
