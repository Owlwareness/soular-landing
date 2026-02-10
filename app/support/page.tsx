import Link from 'next/link';

export const metadata = {
  title: 'Support - Soular',
  description: 'Soular Support - CAIVE LLC',
};

export default function Support() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-accent hover:text-accent-light text-sm">
          ← Back to home
        </Link>

        <article className="mt-8 text-foreground">
          <h1 className="text-3xl font-bold">Support</h1>

          <p className="mt-6 text-muted leading-relaxed">
            Questions, issues, or feedback? We&apos;d love to hear from you.
          </p>

          <p className="mt-4 text-muted">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:caive.social@gmail.com"
              className="text-accent hover:text-accent-light underline"
            >
              caive.social@gmail.com
            </a>
          </p>

          <hr className="my-8 border-zinc-800" />

          <div className="flex gap-6">
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
        </article>
      </div>
    </main>
  );
}
