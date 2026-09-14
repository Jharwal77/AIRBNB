const Svg = ({ vb = '0 0 24 24', size = 24, className = '', fill = 'currentColor', stroke = 'none', strokeWidth = 0, children, style }) => (
  <svg
    viewBox={vb}
    style={{ display: 'block', height: size, width: size, ...style }}
    className={className}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

export const SearchIcon = ({ size = 12, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className} fill="none" stroke="currentColor" strokeWidth={4}>
    <circle cx="14" cy="14" r="9" strokeLinecap="round" />
    <path d="M21 21l7 7" strokeLinecap="round" />
  </Svg>
);

export const GlobeIcon = ({ size = 16, className = '' }) => (
  <Svg vb="0 0 16 16" size={size} className={className}>
    <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z" />
  </Svg>
);

export const MenuIcon = ({ size = 16, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className} fill="none" stroke="currentColor" strokeWidth={3}>
    <path d="M2 16h28M2 24h28M2 8h28" strokeLinecap="round" />
  </Svg>
);

export const StarIcon = ({ size = 12, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="M16 2l4 9 10 1-7.5 6.5L25 29l-9-5-9 5 2.5-10.5L2 12l10-1z" />
  </Svg>
);

export const ShareIcon = ({ size = 16, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const HeartIcon = ({ size = 16, className = '', filled = false }) => (
  <Svg
    vb="0 0 32 32"
    size={size}
    className={className}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 2}
  >
    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" strokeLinejoin="round" />
  </Svg>
);

export const GridIcon = ({ size = 16, className = '' }) => (
  <Svg vb="0 0 16 16" size={size} className={className}>
    <path d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </Svg>
);

export const ChevronLeftIcon = ({ size = 18, className = '' }) => (
  <Svg vb="0 0 18 18" size={size} className={className}>
    <path d="m13.7 16.29a1 1 0 1 1-1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41L6.41 8.99z" fillRule="evenodd" />
  </Svg>
);

export const ChevronRightIcon = ({ size = 18, className = '' }) => (
  <Svg vb="0 0 18 18" size={size} className={className}>
    <path d="m4.29 1.71A1 1 0 1 1 5.71.3l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1-1.42-1.41l7.29-7.29z" fillRule="evenodd" />
  </Svg>
);

export const ChevronDownIcon = ({ size = 16, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M4 10l12 12 12-12" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const CloseIcon = ({ size = 16, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M6 6l20 20M26 6L6 26" strokeLinecap="round" />
  </Svg>
);

export const KitchenIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 24 24" size={size} className={className}>
    <path d="M4 7h12V5H4v2zM3 8h14v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8zm6 3v3h2v-3H9z" />
  </Svg>
);

export const WifiIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 24 24" size={size} className={className}>
    <path d="M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-6c1.6 0 3 .6 4 1.6l-1.4 1.4a3 3 0 0 0-5.2 0L8 13.6A5.6 5.6 0 0 1 12 12zm0-4c2.6 0 5 1 6.8 2.8l-1.4 1.4A7.6 7.6 0 0 0 12 10a7.6 7.6 0 0 0-5.4 2.2L5.2 10.8A9.6 9.6 0 0 1 12 8z" />
  </Svg>
);

export const WorkspaceIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 24 24" size={size} className={className}>
    <path d="M3 5h18a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a1 1 0 0 1 1-1zm2 3v6h14V8H5z" />
  </Svg>
);

export const ParkingIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 24 24" size={size} className={className}>
    <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6zm3 .5h8l-1-3H9l-1 3z" />
  </Svg>
);

export const PoolIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 24 24" size={size} className={className}>
    <path d="M3 13c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1v6H3v-6zm6-1.5L6.8 5.2A2 2 0 0 1 9 3h6a2 2 0 0 1 2.2 2.2L15 11.5" />
  </Svg>
);

export const PetsIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 24 24" size={size} className={className}>
    <path d="M7 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM5 13a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </Svg>
);

export const CameraIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 24 24" size={size} className={className}>
    <path d="M3 6h3l1.5-2h7L16 6h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm9 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </Svg>
);

export const BellIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 24 24" size={size} className={className}>
    <path d="M12 3a7 7 0 0 0-7 7v4l-1.4 2.1A1 1 0 0 0 4.4 18h15.2a1 1 0 0 0 .8-1.5L19 14v-4a7 7 0 0 0-7-7zm0 19a3 3 0 0 0 2.8-2H9.2a3 3 0 0 0 2.8 2z" />
  </Svg>
);

export const OutdoorIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="m15.59 1.91 1.02.8C22.17 7.04 25 11.46 25 15.98a8.99 8.99 0 0 1-.5 3.02H31v2h-2v9a1 1 0 0 1-.88 1H4a1 1 0 0 1-1-.88V21H1v-2h6.42c-.28-.9-.42-1.91-.42-3.01 0-2.25 1.1-4.82 3.27-7.75l.27-.35.55-.73 1.78 1.12L15.6 1.9zM27 21H5v8h22v-8zM16.4 5.1l-2.6 6.1-2.21-1.37-.17.24C9.87 12.3 9.07 14.2 9 15.77l-.01.21c0 1.1.17 2.04.48 2.85l.07.17h3a6.1 6.1 0 0 1-.05-.83c0-1.52.86-3.19 2.52-5.07l.24-.27.74-.81.74.8c1.82 2 2.76 3.76 2.76 5.35 0 .3-.02.57-.05.83h3.06l-.14-.07a6.7 6.7 0 0 0 .63-2.95c0-3.42-2.03-6.93-6.17-10.51l-.43-.36zm-.4 9.94-.08.1c-.9 1.14-1.36 2.11-1.41 2.88l-.01.15c0 .35.03.63.09.83h2.82c.06-.2.09-.48.09-.83 0-.79-.46-1.8-1.42-3.04l-.08-.1z" />
  </Svg>
);

export const FanIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="M20.33 3.08c1.5 2.24.96 5.55-1.38 9.9l-.12.2.18.18c.1.13.21.26.3.4l.23.38.14.02c.7.06 1.78-.11 2.87-.48.89-.3 1.78-.78 2.68-1.45l.66-.52a3 3 0 0 1 4.77 1.33l.12.44c.59 3.35.02 5.73-1.86 6.98-2.24 1.5-5.54.96-9.9-1.39a3 3 0 0 1-.27-.16l-.07.07-.39.3-.28.19V20c-.03.7.15 1.68.48 2.68.3.88.78 1.78 1.45 2.68l.26.33.26.33a3 3 0 0 1-.36 4.22C19 31 17.95 31 17 31h-.54l-1.39-.1c-1.24-.19-2.56-.65-3.36-1.84-1.5-2.25-.96-5.55 1.39-9.91.04-.09.1-.17.15-.25a4.12 4.12 0 0 1-.37-.4.82.82 0 0 0-.18-.23.5.5 0 0 0-.21-.11c-.7-.1-1.85.06-3.04.46-.88.3-1.78.78-2.68 1.45l-.66.52a3 3 0 0 1-4.77-1.33l-.12-.44c-.59-3.35-.02-5.73 1.86-6.98 2.24-1.5 5.55-.96 9.9 1.38l.1.05c.3-.3.55-.5.72-.61l.2-.13.03-.2c.06-.7-.11-1.78-.48-2.88a9.6 9.6 0 0 0-1.45-2.68l-.52-.66a3 3 0 0 1 1.33-4.77l.44-.12c3.35-.59 5.73-.02 6.98 1.86zm-5.31 16.8-.16.22c-2.04 3.77-2.5 6.45-1.49 7.85 1.13 1.55 4.63 1.55 5.44.77.38-.36.47-.89.2-1.24l-.25-.32a11.6 11.6 0 0 1-1.7-3.16 8.7 8.7 0 0 1-.5-3.44v-.45a4.1 4.1 0 0 1-1.54-.23zm6.63-3.4-.22.16c-1.14.9-2.11 1.36-2.88 1.41l-.15.01c-.35 0-.63-.03-.83-.09.14-.47.22-.98.23-1.51v-.09l.32.1c3.77 2.04 6.45 2.5 7.85 1.49 1.55-1.13 1.55-4.63.77-5.44-.36-.38-.89-.47-1.24-.2l-.32.25a11.6 11.6 0 0 1-3.16 1.7l-.37.21zM13.9 5.25c-1.55 1.13-1.55 4.63-.77 5.44.36.38.89.47 1.24.2l.32-.25a11.6 11.6 0 0 1 3.53-1.91l-.1.18c-1.55-.42-2.9-.36-3.93.37-1.55 1.13-1.55 4.63-.77 5.44l.06.05-.22-.16c-3.77-2.04-6.45-2.5-7.85-1.49-1.55 1.13-1.55 4.63-.77 5.44.36.38.89.47 1.24.2l.32-.25a11.6 11.6 0 0 1 3.16-1.7 8.7 8.7 0 0 1 3.44-.5h.45a4.12 4.12 0 0 1 .23-1.54l-.09.07c.9-1.14 1.36-2.11 1.41-2.88l.01-.15c0-.35-.03-.63-.09-.83.47.14.98.22 1.51.23h.09l-.29-.37c-2.05-3.77-2.51-6.45-1.5-7.85 1.13-1.55 4.63-1.55 5.44-.77.38.36.47.89.2 1.24l-.25.32a11.6 11.6 0 0 1-1.7 3.16l-.21.37.18-.14c1.14-.9 2.11-1.36 2.88-1.41l.15-.01c.35 0 .63.03.83.09-.14.47-.22.98-.23 1.51v.45a4.1 4.1 0 0 1 1.54.23l-.07-.09c-.9-1.14-1.36-2.11-1.41-2.88" />
  </Svg>
);

export const DoorIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z" />
  </Svg>
);

export const SprayIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.3" />
  </Svg>
);

export const CheckCircleIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
  </Svg>
);

export const KeyIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
  </Svg>
);

export const ChatIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" strokeLinejoin="round" />
  </Svg>
);

export const MapIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z" />
  </Svg>
);

export const TagIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </Svg>
);

export const MedalIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z" />
  </Svg>
);

export const GradIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z" />
  </Svg>
);

export const ShieldIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z" />
  </Svg>
);

export const CalendarXIcon = ({ size = 24, className = '' }) => (
  <Svg vb="0 0 32 32" size={size} className={className}>
    <path d="m12 0v2h8v-2h2v2h6c1.1045695 0 2 .8954305 2 2v21c0 2.7614237-2.2385763 5-5 5h-18c-2.76142375 0-5-2.2385763-5-5v-21c0-1.1045695.8954305-2 2-2h6v-2zm16 12h-24v13c0 1.6568542 1.34314575 3 3 3h18c1.6568542 0 3-1.3431458 3-3zm-8.2071068 2.2928932 1.4142136 1.4142136-3.7921068 3.7928932 3.7921068 3.7928932-1.4142136 1.4142136-3.7928932-3.7921068-3.7928932 3.7921068-1.4142136-1.4142136 3.7921068-3.7928932-3.7921068-3.7928932 1.4142136-1.4142136 3.7928932 3.7921068zm-9.7928932-10.2928932h-6v6h24v-6h-6v2h-2v-2h-8v2h-2z" />
  </Svg>
);

export const KeyboardIcon = ({ size = 20, className = '' }) => (
  <Svg vb="0 0 32 22" size={size} className={className} fill="none" stroke="currentColor" strokeWidth={1.6} style={{ width: size, height: (size * 22) / 32 }}>
    <rect x="1" y="1" width="30" height="20" rx="3" />
    <path d="M6 7h.01M11 7h.01M16 7h.01M21 7h.01M26 7h.01M6 12h.01M26 12h.01M9 16h14" strokeLinecap="round" />
  </Svg>
);

export const FlagIcon = ({ size = 16, className = '' }) => (
  <Svg vb="0 0 16 16" size={size} className={className}>
    <path d="m7.5 1c.53 0 .96.41 1 .93l0 .07v1h5.5a.5.5 0 0 1 .49.58l-.01.06-.96 3.36.96 3.36a.5.5 0 0 1-.42.63l-.06 0h-5.5c-.53 0-.96-.41-1-.93l0-.07v-1h-5v6h-1v-14h6.5zm-5.5 1v0 0zm6.5 3h-1v4h1z" />
  </Svg>
);

export const VerifiedIcon = ({ size = 18, className = '' }) => (
  <Svg vb="0 0 24 24" size={size} className={className}>
    <path d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22zm5.2 7.3-6.05 6.05-2.85-2.85-1.4 1.4 4.25 4.25 7.45-7.45z" fill="#e01e5a" />
  </Svg>
);

export const AmenityIcon = ({ name, size = 24, className = '' }) => {
  const map = {
    kitchen: KitchenIcon,
    wifi: WifiIcon,
    workspace: WorkspaceIcon,
    parking: ParkingIcon,
    pool: PoolIcon,
    hottub: PoolIcon,
    pets: PetsIcon,
    camera: CameraIcon,
    bell: BellIcon
  };
  const C = map[name] || KitchenIcon;
  return <C size={size} className={className} />;
};

export const CategoryIcon = ({ name, size = 24, className = '' }) => {
  const map = {
    spray: SprayIcon,
    check: CheckCircleIcon,
    key: KeyIcon,
    chat: ChatIcon,
    map: MapIcon,
    tag: TagIcon
  };
  const C = map[name] || CheckCircleIcon;
  return <C size={size} className={className} />;
};
