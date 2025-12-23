import Link from 'next/link';

interface TrustSectionProps {
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
}

export function TrustSection({ privacyPolicyUrl, termsOfServiceUrl }: TrustSectionProps) {
  return (
    <section className="py-8 px-6 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl flex justify-center gap-8">
        <Link
          href={privacyPolicyUrl}
          className="text-sm text-muted hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center"
        >
          Privacy Policy
        </Link>
        <Link
          href={termsOfServiceUrl}
          className="text-sm text-muted hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center"
        >
          Terms of Service
        </Link>
      </div>
    </section>
  );
}
