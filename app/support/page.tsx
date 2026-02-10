import Link from 'next/link';

export const metadata = {
  title: 'Support - SoularVerse',
  description: 'SoularVerse Support - CAIVE LLC',
};

export default function Support() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-6 md:py-12 flex flex-col items-center justify-center">
      <div className="max-w-md w-full text-center">
        <Link href="/" className="text-accent hover:text-accent-light text-sm">
          ← Back to home
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-foreground">Support</h1>

        <p className="mt-6 text-muted leading-relaxed">
          Questions, issues, or feedback?<br />
          We&apos;d love to hear from you.
        </p>

        <a
          href="mailto:caive.social@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-light text-white font-medium px-8 py-3 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Email Us
        </a>

        <p className="mt-3 text-sm text-muted">
          caive.social@gmail.com
        </p>

        <hr className="my-8 border-zinc-800" />

        <div className="flex justify-center gap-6">
          <Link
            href="/privacy"
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            Privacy Policy
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
