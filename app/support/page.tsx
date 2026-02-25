import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Support - SoularLove',
  description: 'SoularLove Support - CAIVE LLC',
};

export default function Support() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 md:py-20 flex flex-col items-center justify-center">
      <div className="max-w-lg w-full text-center">
        <Link href="/" className="inline-block mb-12">
          <Image
            src="/images/logo.png"
            alt="SoularLove logo"
            width={56}
            height={56}
            className="mx-auto rounded-xl"
          />
        </Link>

        <h1 className="text-4xl font-bold text-foreground">Support</h1>

        <p className="mt-6 text-lg text-muted leading-relaxed">
          Questions, issues, or feedback?<br />
          We&apos;d love to hear from you.
        </p>

        <div className="mt-10 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <h2 className="text-lg font-medium text-foreground">Get in Touch</h2>
          </div>

          <p className="text-sm text-muted mb-6">
            We typically respond within 24 hours.
          </p>

          <a
            href="mailto:caive.social@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-light text-white font-medium px-8 py-3 transition-colors text-sm"
          >
            Email Us
          </a>

          <p className="mt-4 text-xs text-muted">
            caive.social@gmail.com
          </p>
        </div>

        <div className="mt-10 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <h2 className="text-lg font-medium text-foreground mb-4">Common Questions</h2>
          
          <div className="space-y-4 text-left">
            <div>
              <h3 className="text-sm font-medium text-foreground">How do I delete my account?</h3>
              <p className="text-sm text-muted mt-1">Go to Settings in the app and tap &quot;Delete Account.&quot; It&apos;s immediate and permanent.</p>
            </div>
            <div className="border-t border-zinc-800 pt-4">
              <h3 className="text-sm font-medium text-foreground">How does face reveal work?</h3>
              <p className="text-sm text-muted mt-1">Profile photos unlock after 4 stars of genuine connection. It&apos;s automatic - no way to skip it.</p>
            </div>
            <div className="border-t border-zinc-800 pt-4">
              <h3 className="text-sm font-medium text-foreground">Is my data safe?</h3>
              <p className="text-sm text-muted mt-1">All data is encrypted. We never sell it. When you delete your account, everything is gone immediately. Read our{' '}
                <Link href="/privacy" className="text-accent hover:text-accent-light underline">Privacy Policy</Link> for details.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-10 border-zinc-800" />

        <div className="flex justify-center gap-6">
          <Link
            href="/privacy"
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </main>
  );
}
