import React from 'react';

interface HcLogoProps {
  className?: string;
}

export const HcLogo: React.FC<HcLogoProps> = ({ className = 'w-11 h-11' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Black Outer Border Ring & Vivid Red Circle (Transparent Background Outside) */}
      <circle cx="50" cy="50" r="46" fill="#ED1C24" stroke="#000000" strokeWidth="4.5" />

      {/* Crisp White Interlocking Monogram "HC" */}
      <g fill="#FFFFFF">
        {/* Letter H */}
        <rect x="33" y="22" width="7" height="56" />
        <rect x="52" y="22" width="7" height="56" />
        <rect x="37" y="46" width="18" height="6" />

        {/* Letter C Interlocking Arc */}
        <path
          d="M 72 38 
             C 65 30, 48 34, 46 50 
             C 44 65, 58 73, 72 70 
             C 77 69, 81 65, 82 62 
             L 76 59 
             C 74 62, 70 64, 67 63 
             C 59 62, 54 53, 56 47 
             C 58 40, 67 37, 72 43 Z"
        />
        {/* C Serifs/Terminals */}
        <path d="M 70 34 L 80 43 L 72 44 Z" />
        <path d="M 70 74 L 80 65 L 73 64 Z" />
      </g>
    </svg>
  );
};
