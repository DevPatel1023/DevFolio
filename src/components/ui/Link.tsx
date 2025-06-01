// Link.tsx
import React, { type ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, target, rel, className = '' }) => (
  <a href={href} target={target} rel={rel} className={className}>
    {children}
  </a>
);

export default Link;