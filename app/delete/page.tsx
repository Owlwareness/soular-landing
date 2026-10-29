import Link from 'next/link';
import { LegalMarkdown } from '../components/LegalMarkdown';

export const metadata = {
  title: 'Delete your account - SoularLove',
  description: 'How to delete your SoularLove account - Caive LLC',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-accent hover:text-accent-light text-sm">
          ← Back to home
        </Link>
        <LegalMarkdown file="delete" />
      </div>
    </main>
  );
}
