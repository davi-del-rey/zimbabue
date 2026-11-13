type Props = { size?: number; className?: string; title?: string };

/** Marca do site: sol nascente com chevrons das paredes do Grande Zimbábue. */
export function SunMark({ size = 34, className, title }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="20" cy="19" r="8.5" fill="#ff6a2b" />
      <circle cx="20" cy="19" r="13" fill="none" stroke="#ffc63f" strokeWidth="2.4" />
      <path
        d="M6 31.5 L11.5 25 L17 31.5 L22.5 25 L28 31.5 L33.5 25"
        fill="none"
        stroke="#24110c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 1.5v3.2M20 33.3v3.2M2.5 19h3.2M34.3 19h3.2" stroke="#24110c" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
