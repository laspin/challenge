import React from 'react';
const SkeleSVG = () => (
  <svg id="skeleloader" role="img" width="340" height="84" viewBox="0 0 340 84">
    <rect
      role="presentation"
      x="0"
      y="0"
      width="100%"
      height="100%"
      clipPath={'url(#4ng1xbb-diff)'}
      style={{ fill: 'url("#4ng1xbb-animated-diff")' }}
    />
    <defs>
      <clipPath id="4ng1xbb-diff">
        <rect x="537" y="9" rx="2" ry="2" width="140" height="10" />
        <rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
        <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
        <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
        <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
        <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
        <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
        <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
        <circle cx="286" cy="536" r="12" />
        <circle cx="319" cy="535" r="12" />
        <circle cx="353" cy="535" r="12" />
        <rect x="378" y="524" rx="0" ry="0" width="52" height="24" />
        <rect x="210" y="523" rx="0" ry="0" width="52" height="24" />
        <circle cx="210" cy="535" r="12" />
        <circle cx="428" cy="536" r="12" />
      </clipPath>
      <linearGradient id="4ng1xbb-animated-diff">
        <stop offset="0%" stopColor="#f6f6ef" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="1s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#e8e8e3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="1s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#f6f6ef" stopOpacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="1s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </defs>
  </svg>
);

export default SkeleSVG;
