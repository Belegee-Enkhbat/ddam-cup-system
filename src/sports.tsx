import type { JSX, SVGProps } from 'react';

export type SportKey =
  | 'basketball'
  | 'volleyball'
  | 'tennis'
  | 'foosball'
  | 'jumpingRope'
  | 'cornhole'
  | 'darts'
  | 'chess';

type SportIconProps = SVGProps<SVGSVGElement>;

function BasketballIcon(props: SportIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5v17" />
      <path d="M3.5 12h17" />
      <path d="M6 6.5c2.8 1.8 4.2 5.2 4.2 9.5" />
      <path d="M18 6.5c-2.8 1.8-4.2 5.2-4.2 9.5" />
    </svg>
  );
}

function VolleyballIcon(props: SportIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5c2.8 2 4.7 5.1 5.2 8.8" />
      <path d="M6.2 6.3c3.3-.2 6.5 1.1 8.8 3.7" />
      <path d="M4.1 13.2c3.1-1.2 6.6-1.1 9.7.2" />
      <path d="M9 20.1c.3-3.2 1.9-6.2 4.5-8.1" />
    </svg>
  );
}

function TennisIcon(props: SportIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M7.2 4.9c2.2 2.3 3.4 4.7 3.6 7.1.2 2.6-.8 5.1-3 7.4" />
      <path d="M16.8 19.1c-2.2-2.3-3.4-4.7-3.6-7.1-.2-2.6.8-5.1 3-7.4" />
    </svg>
  );
}

function FoosballIcon(props: SportIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="6.5" width="16" height="11" rx="2.5" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M16 5v14" />
      <path d="M8 9.2v2.2" />
      <path d="M12 12.3v2.2" />
      <path d="M16 9.2v2.2" />
    </svg>
  );
}

function JumpingRopeIcon(props: SportIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6.6 7.4c-1.7 2.1-2.6 4.5-2.6 6.9 0 1.8.5 3.4 1.5 4.7" />
      <path d="M17.4 7.4c1.7 2.1 2.6 4.5 2.6 6.9 0 1.8-.5 3.4-1.5 4.7" />
      <path d="M8.3 5.3 6.6 7.4" />
      <path d="m15.7 5.3 1.7 2.1" />
      <path d="M9.3 16.6a2.7 2.7 0 1 0 5.4 0" />
      <path d="M6.7 13.8c2.2 1.8 8.4 1.8 10.6 0" />
    </svg>
  );
}

function CornholeIcon(props: SportIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 6.5h7.8a1.8 1.8 0 0 1 1.8 1.8V18a2 2 0 0 1-2 2H8.8A1.8 1.8 0 0 1 7 18.2V6.5Z" />
      <circle cx="13.2" cy="9.4" r="1.4" />
      <path d="M5.4 17.3l3.1-1.5 1.7 2.3-3.3 1.5Z" />
    </svg>
  );
}

function DartsIcon(props: SportIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.6" />
      <path d="M16.8 7.2l2.8-2.8" />
      <path d="M15.7 8.3l2.5.6-.6 2.5" />
      <path d="M12.1 11.9l4.7-4.7" />
    </svg>
  );
}

function ChessIcon(props: SportIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 4.1v2.6" />
      <path d="M10.7 5.4h2.6" />
      <path d="M9 10.2c0-1.7 1.4-3.1 3-3.1s3 1.4 3 3.1c0 1-.4 1.8-1.2 2.4.9.7 1.4 1.8 1.4 3v1.2H8.8v-1.2c0-1.2.5-2.3 1.4-3-.8-.6-1.2-1.5-1.2-2.4Z" />
      <path d="M8 19.5h8" />
      <path d="M7 16.8h10" />
    </svg>
  );
}

export interface SportDefinition {
  key: SportKey;
  label: string;
  shortLabel: string;
  accentClass: string;
  badgeClass: string;
  outlineClass: string;
  icon: (props: SportIconProps) => JSX.Element;
  tournamentFormat: string;
  description: string;
}

export const SPORTS: SportDefinition[] = [
  {
    key: 'basketball',
    label: 'Basketball',
    shortLabel: 'BB',
    accentClass: 'text-orange-300',
    badgeClass: 'border-orange-400/25 bg-orange-500/12 text-orange-50',
    outlineClass: 'border-orange-400/30 bg-orange-500/8',
    icon: BasketballIcon,
    tournamentFormat: 'Zone Play',
    description: 'Zone defense strategy with assigned court areas',
  },
  {
    key: 'volleyball',
    label: 'Volleyball',
    shortLabel: 'VB',
    accentClass: 'text-sky-300',
    badgeClass: 'border-sky-400/25 bg-sky-500/12 text-sky-50',
    outlineClass: 'border-sky-400/30 bg-sky-500/8',
    icon: VolleyballIcon,
    tournamentFormat: 'Zone Play',
    description: 'Zone position system with rotational play',
  },
  {
    key: 'tennis',
    label: 'Tennis',
    shortLabel: 'TN',
    accentClass: 'text-lime-300',
    badgeClass: 'border-lime-400/25 bg-lime-500/12 text-lime-50',
    outlineClass: 'border-lime-400/30 bg-lime-500/8',
    icon: TennisIcon,
    tournamentFormat: 'Double Elimination',
    description: 'Single loss elimination with repechage bracket',
  },
  {
    key: 'foosball',
    label: 'Foosball',
    shortLabel: 'FB',
    accentClass: 'text-teal-300',
    badgeClass: 'border-teal-400/25 bg-teal-500/12 text-teal-50',
    outlineClass: 'border-teal-400/30 bg-teal-500/8',
    icon: FoosballIcon,
    tournamentFormat: 'Double Elimination',
    description: 'Winners and losers bracket format',
  },
  {
    key: 'jumpingRope',
    label: 'Jumping Rope',
    shortLabel: 'JR',
    accentClass: 'text-emerald-300',
    badgeClass: 'border-emerald-400/25 bg-emerald-500/12 text-emerald-50',
    outlineClass: 'border-emerald-400/30 bg-emerald-500/8',
    icon: JumpingRopeIcon,
    tournamentFormat: 'Double Elimination',
    description: 'Winners and losers bracket format',
  },
  {
    key: 'cornhole',
    label: 'Cornhole',
    shortLabel: 'CH',
    accentClass: 'text-amber-300',
    badgeClass: 'border-amber-400/25 bg-amber-500/12 text-amber-50',
    outlineClass: 'border-amber-400/30 bg-amber-500/8',
    icon: CornholeIcon,
    tournamentFormat: 'Double Elimination',
    description: 'Winners and losers bracket format',
  },
  {
    key: 'darts',
    label: 'Darts',
    shortLabel: 'DT',
    accentClass: 'text-rose-300',
    badgeClass: 'border-rose-400/25 bg-rose-500/12 text-rose-50',
    outlineClass: 'border-rose-400/30 bg-rose-500/8',
    icon: DartsIcon,
    tournamentFormat: 'Double Elimination',
    description: 'Winners and losers bracket format',
  },
  {
    key: 'chess',
    label: 'Chess',
    shortLabel: 'CHS',
    accentClass: 'text-violet-300',
    badgeClass: 'border-violet-400/25 bg-violet-500/12 text-violet-50',
    outlineClass: 'border-violet-400/30 bg-violet-500/8',
    icon: ChessIcon,
    tournamentFormat: 'Swiss System',
    description: 'Pairing by strength with balanced draw potential',
  },
];

const SPORT_MAP = Object.fromEntries(SPORTS.map((sport) => [sport.key, sport])) as Record<SportKey, SportDefinition>;

export function getSportDefinition(key: SportKey) {
  return SPORT_MAP[key];
}

export function SportIcon({ sportKey, ...props }: { sportKey: SportKey } & SportIconProps) {
  const Icon = SPORT_MAP[sportKey].icon;
  return <Icon {...props} />;
}
