import type { ReactNode } from 'react';

interface HighlightBoxProps {
  title?: string;
  children: ReactNode;
  accent?: string;
}

export default function HighlightBox({ title, children, accent }: HighlightBoxProps) {
  const borderColor = accent || 'rgba(108, 99, 255, 0.3)';
  const titleColor = accent || 'var(--color-accent)';

  return (
    <div
      className="highlight-box my-5"
      style={{ borderColor }}
    >
      {title && <h3 className="font-display font-bold text-xl mb-2.5" style={{ color: titleColor }}>{title}</h3>}
      <div className="text-text text-[0.95rem] leading-relaxed space-y-1.5">{children}</div>
    </div>
  );
}
