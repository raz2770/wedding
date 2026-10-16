import React from "react";

// Hand-drawn style line icons for the wedding rituals, drawn on a 24×24 grid in currentColor.
function Icon({ size = 18, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

/** Lunch — a thali with katoris */
export const ThaliIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <circle cx="12" cy="12" r="7.4" strokeWidth="0.8" />
    <circle cx="9" cy="9.6" r="2" />
    <circle cx="15" cy="9.6" r="2" />
    <circle cx="12" cy="15" r="2.3" />
  </Icon>
);

/** Bhat — the maternal uncle's gifts carried on a tray */
export const GiftTrayIcon = (p) => (
  <Icon {...p}>
    <path d="M3 18h18M5 18l1.5 2.5h11L19 18" />
    <rect x="7" y="10.5" width="10" height="7.5" rx="0.6" />
    <rect x="6" y="8.2" width="12" height="2.4" rx="0.6" />
    <path d="M12 8.2V18" />
    <path d="M12 8.2c-1.5-2.6-4.2-2-3 0M12 8.2c1.5-2.6 4.2-2 3 0" />
  </Icon>
);

/** Lagan — the lagan patrika scroll tied with mauli */
export const ScrollIcon = (p) => (
  <Icon {...p}>
    <path d="M7 3.5h10a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4Z" />
    <path d="M7 7.5v10.5M17 7.5v10.5" />
    <path d="M7 18h10a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4Z" />
    <path d="M10 10.5h4M9.5 12.8h5" strokeWidth="1" />
    <path d="M4.5 15.4h15" strokeWidth="1.1" />
    <circle cx="12" cy="15.4" r="1" fill="currentColor" stroke="none" />
  </Icon>
);

/** Dinner — a clay handi with rising steam */
export const HandiIcon = (p) => (
  <Icon {...p}>
    <path d="M5 12.5h14c0 4.6-3 8-7 8s-7-3.4-7-8Z" />
    <path d="M4 12.5h16" />
    <path d="M7.5 12.5c0-1.4 2-2.4 4.5-2.4s4.5 1 4.5 2.4" />
    <path d="M9 7.6c-.9-1 .9-2 0-3.2M12 7.6c-.9-1 .9-2 0-3.2M15 7.6c-.9-1 .9-2 0-3.2" strokeWidth="1.1" />
  </Icon>
);

/** Haldi & Mehendi — a hand with mehendi */
export const MehendiHandIcon = (p) => (
  <Icon {...p}>
    <path d="M8.5 21v-4.5L5.6 13a1.3 1.3 0 0 1 2-1.7L8 12V6.2a1.2 1.2 0 0 1 2.4 0V11V4.9a1.2 1.2 0 0 1 2.4 0V11V5.7a1.2 1.2 0 0 1 2.4 0v5.8V7.6a1.2 1.2 0 0 1 2.4 0V15c0 3.4-2 6-4.5 6Z" />
    <circle cx="12.8" cy="15" r="1.5" strokeWidth="1" />
    <circle cx="12.8" cy="15" r="0.45" fill="currentColor" stroke="none" />
    <circle cx="10.2" cy="15" r="0.4" fill="currentColor" stroke="none" />
    <circle cx="15.4" cy="15" r="0.4" fill="currentColor" stroke="none" />
    <circle cx="12.8" cy="12.4" r="0.4" fill="currentColor" stroke="none" />
    <circle cx="12.8" cy="17.6" r="0.4" fill="currentColor" stroke="none" />
  </Icon>
);

/** Chak — the kalash with mango leaves and coconut */
export const KalashIcon = (p) => (
  <Icon {...p}>
    <path d="M8 12.2c-2.6 1.8-2.6 6.4.6 8.3h6.8c3.2-1.9 3.2-6.5.6-8.3Z" />
    <path d="M8.6 12.2v-1.6h6.8v1.6M7.8 10.6h8.4" />
    <path d="M9.6 10.6c0-2.6 1-4.2 2.4-4.2s2.4 1.6 2.4 4.2" />
    <path d="M9.4 9c-2-.4-3.4-1.8-4-3.5 2 0 3.4 1 4 3M14.6 9c2-.4 3.4-1.8 4-3.5-2 0-3.4 1-4 3" />
    <path d="M7.1 15.6h9.8" strokeWidth="1" strokeDasharray="0.1 1.6" />
  </Icon>
);

/** Ghudchadi — the decorated mare the groom rides */
export const HorseIcon = (p) => (
  <Icon {...p}>
    <path d="M17.5 21c0-4 1-7 0-10-1-3-3-5-5.2-6l-.5-2.5-1.5 2c-2 .5-4 2.5-5.5 5l-1.2 2.2c-.4.8 0 1.6.8 1.8l1.6.3c.7.1 1.3-.2 1.7-.8l1.4-1.8c.8 1.6.2 3.6-1 5.6L7.3 21" />
    <path d="M13 5.6c2 1 3.6 2.6 4.6 5.2M14.6 4.8c2 1.2 3.7 3 4.6 5.8" strokeWidth="1.1" />
    <path d="M8.2 10.4c1.6.4 3 .3 4.4-.4" strokeWidth="1" />
    <circle cx="10" cy="8.2" r="0.7" fill="currentColor" stroke="none" />
  </Icon>
);

/** Barat departure — the dhol */
export const DholIcon = (p) => (
  <Icon {...p}>
    <ellipse cx="6" cy="13" rx="2.2" ry="4.6" />
    <path d="M6 8.4h12M6 17.6h12" />
    <path d="M18 8.4c1.2 0 2.2 2 2.2 4.6s-1 4.6-2.2 4.6" />
    <path d="M6.6 8.6 9 17.4 12 8.6l3 8.8 2.6-8.8" strokeWidth="0.9" />
    <path d="M6 8.4C8 3.6 16 3.6 18 8.4" strokeWidth="1" />
  </Icon>
);

/** Vivah — a lit diya */
export const DiyaIcon = (p) => (
  <Icon {...p}>
    <path d="M3 13.5c2 5.2 16 5.2 18 0Z" />
    <path d="M21 13.5l1.4-1.6" />
    <path d="M12 12c-2-2-1.6-4.6 0-7.2 1.6 2.6 2 5.2 0 7.2Z" />
    <path d="M9 19.3h6" />
  </Icon>
);

/** Lotus — used as a dividing ornament */
export const LotusIcon = (p) => (
  <Icon {...p}>
    <path d="M12 18c-2.5-2.5-2.5-7 0-10 2.5 3 2.5 7.5 0 10Z" />
    <path d="M12 18c-4 0-7-2.5-8-6 3.5 0 6.5 2.5 8 6ZM12 18c4 0 7-2.5 8-6-3.5 0-6.5 2.5-8 6Z" />
    <path d="M6 20.5h12" strokeWidth="1" />
  </Icon>
);

/** Groom — safa (turban) with kalgi */
export const SafaIcon = (p) => (
  <Icon {...p}>
    <path d="M5 16c0-5.2 3-8.4 7-8.4s7 3.2 7 8.4Z" />
    <path d="M6.4 12.2c3 2.2 8.2 2 11.2-1.2M5.6 14.4c3.6 1.4 9.4 1.2 12.8-1.4" strokeWidth="1" />
    <path d="M12 7.6V4.2M12 4.2c1-1.6 3.2-1.6 3.6 0-1 .6-2.6.6-3.6 0Z" />
    <circle cx="12" cy="10" r="1.1" />
    <path d="M19 16l1.6 4.4" />
  </Icon>
);

/** Bride — maang tikka */
export const MaangTikkaIcon = (p) => (
  <Icon {...p}>
    <path d="M12 2.5v6" strokeDasharray="0.1 1.5" />
    <path d="M12 8.6c-1.9 0-3 1.4-3 3 0 2 3 4.6 3 4.6s3-2.6 3-4.6c0-1.6-1.1-3-3-3Z" />
    <circle cx="12" cy="11.6" r="1" fill="currentColor" stroke="none" />
    <path d="M10 16.6v2.2M12 17.4v3M14 16.6v2.2" strokeWidth="1" />
    <circle cx="10" cy="19.2" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="20.8" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="14" cy="19.2" r="0.5" fill="currentColor" stroke="none" />
  </Icon>
);

/** Marigold — for the mandap garland */
export const MarigoldIcon = (p) => (
  <Icon {...p}>
    <path d="M12 4.5c1.2 0 1.6 1.4 2.4 1.7.8.3 2.1-.4 2.9.4.8.8.1 2.1.4 2.9.3.8 1.8 1.2 1.8 2.5s-1.5 1.7-1.8 2.5c-.3.8.4 2.1-.4 2.9-.8.8-2.1.1-2.9.4-.8.3-1.2 1.7-2.4 1.7s-1.6-1.4-2.4-1.7c-.8-.3-2.1.4-2.9-.4-.8-.8-.1-2.1-.4-2.9C5.8 13.7 4.3 13.3 4.3 12s1.5-1.7 1.8-2.5c.3-.8-.4-2.1.4-2.9.8-.8 2.1-.1 2.9-.4.8-.3 1.2-1.7 2.6-1.7Z" />
    <circle cx="12" cy="12" r="3.2" strokeWidth="1" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </Icon>
);
