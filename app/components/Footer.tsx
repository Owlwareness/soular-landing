import Link from "next/link";

interface FooterProps {
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
  supportUrl: string;
}

export function Footer({
  privacyPolicyUrl,
  termsOfServiceUrl,
  supportUrl,
}: FooterProps) {
  return (
    <footer className="py-8 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center items-center gap-8">
          <Link
            href={privacyPolicyUrl}
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4 min-h-[44px] flex items-center"
          >
            Privacy Policy
          </Link>

          <Link
            href={supportUrl}
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4 min-h-[44px] flex items-center"
          >
            Support
          </Link>

          <Link
            href={termsOfServiceUrl}
            className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4 min-h-[44px] flex items-center"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
