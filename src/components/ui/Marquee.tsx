type MarqueeProps = {
  children: React.ReactNode;
  href?: string;
  ariaLabel?: string;
  className?: string;
};

export default function Marquee({
  children,
  href,
  ariaLabel,
  className = "",
}: MarqueeProps) {
  const content = (
    <div className="editorial-marquee-track">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="editorial-marquee-group"
          aria-hidden={index > 0 ? "true" : undefined}
        >
          <span className="editorial-marquee-text">{children}</span>
          <span className="editorial-marquee-dot" aria-hidden="true">
            •
          </span>
        </div>
      ))}
    </div>
  );

  const classes = `editorial-marquee ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}
