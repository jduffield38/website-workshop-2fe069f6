export function AppStoreBadge({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Download on the App Store"
      className={`inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-2.5 hover:opacity-90 transition ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M16.365 1.43c0 1.14-.46 2.22-1.2 3-.79.84-2.07 1.49-3.13 1.4-.13-1.11.42-2.27 1.14-3.04.81-.86 2.19-1.5 3.19-1.36zM20.5 17.03c-.55 1.27-.82 1.84-1.53 2.96-.99 1.55-2.39 3.48-4.12 3.49-1.54.02-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.03-3.05-1.78-4.04-3.33-2.77-4.32-3.06-9.4-1.35-12.1 1.21-1.91 3.13-3.03 4.93-3.03 1.83 0 2.98 1 4.49 1 1.47 0 2.36-1 4.48-1 1.6 0 3.29.87 4.5 2.38-3.96 2.17-3.32 7.83.74 9.63z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide">Download on the</span>
        <span className="block text-lg font-semibold -mt-0.5">App Store</span>
      </span>
    </a>
  );
}
