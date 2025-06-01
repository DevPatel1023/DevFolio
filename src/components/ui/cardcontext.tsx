
  import React, { type ReactNode } from 'react';

  interface CardContentProps {
    children: ReactNode;
    className?: string;
  }

  // CardContent component with proper TypeScript types
  const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
    <div className={className}>
      {children}
    </div>
  );

  export default CardContent;