interface AppStoreBadgeProps {
  url: string;
  className?: string;
}

export function AppStoreBadge({ url, className = '' }: AppStoreBadgeProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block min-h-[44px] min-w-[44px] ${className}`}
      aria-label="Download Soular on the App Store"
    >
      <svg
        viewBox="0 0 120 40"
        className="h-[40px] w-[120px] md:h-[50px] md:w-[150px]"
        role="img"
        aria-hidden="true"
      >
        <rect width="120" height="40" rx="5" fill="#000" />
        <text x="60" y="14" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="system-ui">
          Download on the
        </text>
        <text x="60" y="28" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600" fontFamily="system-ui">
          App Store
        </text>
      </svg>
    </a>
  );
}
