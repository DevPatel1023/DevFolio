
import React, { type ReactNode, type CSSProperties } from 'react';

// TypeScript interfaces for component props
interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = "", style = {} }) => (
  <div className={`rounded-lg shadow ${className}`} style={style}>
    {children}
  </div>
);

export default Card;
