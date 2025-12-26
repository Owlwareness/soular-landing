import Link from "next/link";

interface FooterProps {
  tagline: string;
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
}

export function Footer({
  tagline,
  privacyPolicyUrl,
  termsOfServiceUrl,
}: FooterProps) {
  return (
    <footer className="py-8 px-6 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl">
        {/* Single row: Privacy | Tagline | Terms */}
        <div className="flex justify-between items-center">
          <Link
            href={privacyPolicyUrl}
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4 min-h-[44px] min-w-[44px] flex items-center"
          >
            Privacy Policy
          </Link>

          <p className="text-sm text-muted text-center whitespace-pre-line">{tagline}</p>

          <Link
            href={termsOfServiceUrl}
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4 min-h-[44px] min-w-[44px] flex items-center"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
