import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function baseProps(props: IconProps) {
  const { className, ...rest } = props;
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className ?? "h-6 w-6",
    "aria-hidden": true as const,
    ...rest
  };
}

/** Marca Payle — monograma em moldura */
export function IconPayleMark(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M8 7.5h5c1.7 0 3 1.1 3 2.6s-1.3 2.6-3 2.6H10V17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 12.5l2 2 3.5-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBolt(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path
        d="M13 2L4 14h7l-1 8 10-14h-7l0-6Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCardLock(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <rect x="2" y="6" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 10h12M8 6V5a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="9" y="12" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="14.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function IconSplit(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path
        d="M12 3v7M12 14v7M5 10l7 4 7-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="10" r="2" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="19" cy="10" r="2" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="21" r="2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconWebhook(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path
        d="M8 7a4 4 0 108 0M6 17h12M8 13h8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconPanel(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <rect x="3" y="13" width="18" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconSupport(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path
        d="M12 21a8 8 0 100-16 8 8 0 000 16Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M9.5 9.5c.3-1.2 1.3-2 2.5-2s2.2.8 2.5 2M9 14h6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconTerminal(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 9l3 3-3 3M11 15h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconActivity(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path
        d="M4 14l4-4 3 6 5-10 4 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconWallet(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path
        d="M4 7a2 2 0 012-2h11v14H6a2 2 0 01-2-2V7Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M17 7V5a2 2 0 00-2-2H6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconPlug(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path
        d="M8 5v4M16 5v4M5 9h14v2a5 5 0 01-10 0V9Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 15v4M9 22h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconSpark(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path
        d="M12 2l1.2 4.2L17 7l-3.8 1L12 12l-1.2-4L7 7l3.8-1L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" fill="currentColor" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <path
        d="M12 3 4 7l8 4 8-4-8-4ZM4 12l8 4 8-4M4 17l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  const p = baseProps(props);
  return (
    <svg {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export type HeroGlowPalette = "blue-green" | "white-blue";

/** Orbe decorativo — passe um `gradientId` único se houver mais de um na página */
export function HeroGlowOrb({
  className,
  gradientId = "payle-orb",
  palette = "blue-green"
}: {
  className?: string;
  gradientId?: string;
  palette?: HeroGlowPalette;
}) {
  const href = `url(#${gradientId})`;
  const inner =
    palette === "white-blue" ? (
      <>
        <stop stopColor="#bfdbfe" />
        <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
      </>
    ) : (
      <>
        <stop stopColor="#7dd3fc" />
        <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
      </>
    );
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="100" cy="100" r="72" fill={href} fillOpacity="0.55" />
      <defs>
        <radialGradient
          id={gradientId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(100 100) rotate(90) scale(100)"
        >
          {inner}
        </radialGradient>
      </defs>
    </svg>
  );
}
