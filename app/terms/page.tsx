import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Soular',
  description: 'Soular Terms of Service',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-accent hover:text-accent-light text-sm">
          ← Back to home
        </Link>
        
        <h1 className="mt-8 text-3xl font-bold text-foreground">Terms of Service</h1>
        
        <div className="mt-8 prose prose-invert prose-zinc">
          <p className="text-muted">
            Last updated: [DATE]
          </p>
          
          <p className="text-muted mt-4">
            [Your terms of service content goes here. This is a placeholder page for App Store Connect compliance.]
          </p>
        </div>
      </div>
    </main>
  );
}
