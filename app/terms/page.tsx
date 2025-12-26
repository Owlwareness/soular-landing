import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Soular',
  description: 'Soular Terms of Service - CAIVE LLC',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-accent hover:text-accent-light text-sm">
          ← Back to home
        </Link>
        
        <article className="mt-8 text-foreground">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-muted">
            <strong>CAIVE LLC</strong> · <strong>Soular Love</strong><br />
            Effective Date: December 26, 2025
          </p>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Agreement to Terms</h2>
            <p className="mt-4 text-muted leading-relaxed">
              By downloading, accessing, or using Soular Love, you agree to these Terms of Service. If you don&apos;t agree, don&apos;t use the app. Simple as that.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              These terms are a legal agreement between you and CAIVE LLC (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). Please read them.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">1. What Soular Is</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Soular Love is a connection app where meaningful conversations create visual star constellations. We use AI to analyze the depth of your exchanges and build beautiful maps of your connections.
            </p>
            
            <p className="mt-4 text-muted"><strong>What we provide:</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Daily matching with other users</li>
              <li>Real-time messaging</li>
              <li>AI-powered conversation analysis</li>
              <li>Constellation visualizations of connection depth</li>
              <li>Face reveal after demonstrating authentic connection</li>
            </ul>

            <p className="mt-4 text-muted"><strong>What we don&apos;t guarantee:</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>That you&apos;ll find a connection</li>
              <li>That matches will respond</li>
              <li>That the AI analysis will be perfect</li>
              <li>Anything beyond the service as described</li>
            </ul>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">2. Eligibility</h2>
            <p className="mt-4 text-muted leading-relaxed">To use Soular, you must:</p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Be at least 18 years old</li>
              <li>Provide accurate information during signup</li>
              <li>Have the legal capacity to enter this agreement</li>
              <li>Not be prohibited from using the service under applicable law</li>
              <li>Not have been previously banned from Soular</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              One account per person. Creating multiple accounts will result in termination.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">3. Your Account</h2>
            <p className="mt-4 text-muted"><strong>You&apos;re responsible for:</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Keeping your login credentials secure</li>
              <li>All activity under your account</li>
              <li>Providing accurate profile information</li>
              <li>Updating your information if it changes</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              <strong>Don&apos;t share your account.</strong> If you think someone has accessed your account without permission, contact us immediately.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">4. How Soular Works</h2>
            
            <h3 className="mt-6 text-lg font-medium">Matching</h3>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>You receive one new match per day</li>
              <li>Matches expire after 24 hours if no meaningful conversation occurs</li>
              <li>You can only be matched with users you haven&apos;t blocked (and who haven&apos;t blocked you)</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">Conversations</h3>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Messages are analyzed by AI to determine conversation depth</li>
              <li>Meaningful exchanges create &quot;stars&quot; in your shared constellation</li>
              <li>Your messages may be used to extract themes for your personal constellation</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">Face Reveal</h3>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Profile photos are hidden initially</li>
              <li>Photos become visible after reaching 4 stars (demonstrating authentic connection)</li>
              <li>This is automatic and cannot be manually triggered</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">Star Forge</h3>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Themes from your conversations may appear as prompts on your home screen</li>
              <li>Responding to these prompts creates stars in your personal constellation</li>
              <li>Minimum 80 characters required for meaningful responses</li>
            </ul>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">5. Acceptable Use</h2>
            
            <p className="mt-4 text-muted"><strong>Do:</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Be authentic and respectful</li>
              <li>Report concerning behavior</li>
              <li>Use the app for genuine connection</li>
            </ul>

            <p className="mt-4 text-muted"><strong>Don&apos;t:</strong></p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Harass, threaten, or abuse other users</li>
              <li>Send spam or commercial solicitations</li>
              <li>Share explicit, violent, or illegal content</li>
              <li>Impersonate others or create fake profiles</li>
              <li>Attempt to circumvent safety features</li>
              <li>Use automated systems or bots</li>
              <li>Reverse engineer or hack the app</li>
              <li>Use Soular if you&apos;re under 18</li>
              <li>Violate any applicable laws</li>
            </ul>

            <p className="mt-4 text-muted leading-relaxed">
              Violation of these rules may result in immediate account termination.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">6. Content You Create</h2>
            
            <h3 className="mt-6 text-lg font-medium">Your Content</h3>
            <p className="mt-2 text-muted leading-relaxed">
              You retain ownership of the messages, photos, and other content you create on Soular.
            </p>

            <h3 className="mt-6 text-lg font-medium">License to Us</h3>
            <p className="mt-2 text-muted leading-relaxed">
              By using Soular, you grant us a non-exclusive, worldwide, royalty-free license to use, store, display, and process your content as necessary to provide the service. This includes:
            </p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Storing and displaying your messages to your matches</li>
              <li>Processing your conversations through AI analysis</li>
              <li>Creating constellation visualizations from your content</li>
              <li>Displaying your profile to potential and current matches</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              This license ends when you delete your content or account.
            </p>

            <h3 className="mt-6 text-lg font-medium">AI-Generated Content</h3>
            <p className="mt-2 text-muted leading-relaxed">
              Constellation data, star labels, and themes generated by our AI from your conversations are derived works. You can view and enjoy them, but they&apos;re part of the Soular service.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">7. Blocking and Reporting</h2>
            
            <h3 className="mt-6 text-lg font-medium">Blocking</h3>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>You can block any user at any time</li>
              <li>Blocking immediately ends the connection and deletes all shared data</li>
              <li>Blocked users cannot match with you again (ever)</li>
              <li>Blocking is invisible to the blocked user</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">Reporting</h3>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>You can report users for harassment, inappropriate content, spam, or other violations</li>
              <li>Reports include a snapshot of recent messages for review</li>
              <li>Reporting automatically blocks the reported user</li>
              <li>False reports may result in action against your account</li>
            </ul>

            <p className="mt-4 text-muted leading-relaxed">
              We review reports and take appropriate action, which may include warning or banning the reported user.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">8. Account Termination</h2>
            
            <h3 className="mt-6 text-lg font-medium">By You</h3>
            <p className="mt-2 text-muted leading-relaxed">
              You can delete your account anytime from Settings. Deletion is immediate and permanent. All your data will be erased.
            </p>

            <h3 className="mt-6 text-lg font-medium">By Us</h3>
            <p className="mt-2 text-muted leading-relaxed">We may suspend or terminate your account if you:</p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Violate these terms</li>
              <li>Engage in harmful behavior</li>
              <li>Create legal liability for us</li>
              <li>Are reported multiple times</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              We may also terminate accounts that are inactive for extended periods.
            </p>

            <h3 className="mt-6 text-lg font-medium">Effect of Termination</h3>
            <p className="mt-2 text-muted leading-relaxed">
              Upon termination, your right to use Soular ends immediately. Data deletion follows our Privacy Policy.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">9. Intellectual Property</h2>
            
            <h3 className="mt-6 text-lg font-medium">Our Property</h3>
            <p className="mt-2 text-muted leading-relaxed">
              Soular Love, including its design, features, code, and branding, is owned by CAIVE LLC. You may not copy, modify, distribute, or create derivative works without our permission.
            </p>

            <h3 className="mt-6 text-lg font-medium">Feedback</h3>
            <p className="mt-2 text-muted leading-relaxed">
              If you provide suggestions or feedback, we may use it without obligation to you.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">10. Disclaimers</h2>
            <p className="mt-4 text-muted leading-relaxed font-semibold">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot;
            </p>
            <p className="mt-4 text-muted leading-relaxed">We disclaim all warranties, express or implied, including:</p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>That the service will be uninterrupted or error-free</li>
              <li>That AI analysis will be accurate</li>
              <li>That you&apos;ll find meaningful connections</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              We don&apos;t control user behavior and aren&apos;t responsible for how other users act.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">11. Limitation of Liability</h2>
            <p className="mt-4 text-muted leading-relaxed font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              CAIVE LLC and its officers, employees, and affiliates shall not be liable for any damages whatsoever, including but not limited to:
            </p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Direct, indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, goodwill, or other intangible losses</li>
              <li>Damages resulting from your use or inability to use the service</li>
              <li>Damages resulting from any content or conduct of other users</li>
              <li>Damages resulting from unauthorized access to your account or data</li>
              <li>Any other damages arising from your use of Soular</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              This limitation applies regardless of the theory of liability (contract, tort, strict liability, or otherwise), even if we have been advised of the possibility of such damages.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              <strong>You use Soular entirely at your own risk.</strong> Some jurisdictions don&apos;t allow the exclusion of certain warranties or limitation of liability, so some of the above may not apply to you. In such cases, our liability will be limited to the fullest extent permitted by applicable law.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">12. Indemnification</h2>
            <p className="mt-4 text-muted leading-relaxed">
              You agree to indemnify and hold harmless CAIVE LLC from any claims, damages, or expenses (including legal fees) arising from:
            </p>
            <ul className="mt-2 text-muted list-disc list-inside space-y-1">
              <li>Your use of Soular</li>
              <li>Your content</li>
              <li>Your violation of these terms</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">13. Dispute Resolution</h2>
            
            <h3 className="mt-6 text-lg font-medium">Informal Resolution</h3>
            <p className="mt-2 text-muted leading-relaxed">
              Before filing any claim, contact us first. We&apos;ll try to resolve it informally within 30 days.
            </p>

            <h3 className="mt-6 text-lg font-medium">Governing Law</h3>
            <p className="mt-2 text-muted leading-relaxed">
              These terms are governed by the laws of Texas, United States, without regard to conflict of law principles.
            </p>

            <h3 className="mt-6 text-lg font-medium">Jurisdiction</h3>
            <p className="mt-2 text-muted leading-relaxed">
              Any disputes not resolved informally will be resolved in the courts of Harris County, Texas, and you consent to personal jurisdiction there.
            </p>

            <h3 className="mt-6 text-lg font-medium">No Class Actions</h3>
            <p className="mt-2 text-muted leading-relaxed">
              You agree to resolve disputes individually, not as part of a class action or representative proceeding.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">14. General Terms</h2>
            
            <p className="mt-4 text-muted leading-relaxed">
              <strong>Entire Agreement:</strong> These terms, along with our Privacy Policy, constitute the entire agreement between you and CAIVE LLC regarding Soular Love.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              <strong>Severability:</strong> If any provision is found unenforceable, the rest remains in effect.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              <strong>No Waiver:</strong> Our failure to enforce any right doesn&apos;t waive that right.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              <strong>Assignment:</strong> You can&apos;t transfer your rights under these terms. We can transfer ours.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              <strong>Changes:</strong> We may modify these terms. Continued use after changes constitutes acceptance. Material changes will be communicated through the app.
            </p>
          </section>

          <hr className="my-8 border-zinc-800" />

          <section className="mt-8">
            <h2 className="text-xl font-semibold">15. Contact</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Questions or concerns?
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
