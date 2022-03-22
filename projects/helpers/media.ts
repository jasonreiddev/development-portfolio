export enum Device {
  MobileSmall = 320,
  Mobile = 375,
  MobileLarge = 480,
  Tablet = 768,
  TabletLarge = 1024,
  DesktopSmall = 1280,
  Desktop = 1366,
  DesktopLarge = 1600,
  ActualDesktop = 1920,
  DesktopXL = 2560,
}

export function from(size: Device): string {
  return `(min-width: ${size}px)`;
}

export function until(size: Device): string {
  return `(max-width: ${size - 1}px)`;
}

export function between(minWidth: Device | undefined, maxWidth: Device | undefined): string {
  typeof minWidth == 'undefined' ? (minWidth = 0) : null;
  if (maxWidth) {
    return `(min-width: ${minWidth}px) and (max-width: ${maxWidth - 1}px)`;
  }
  return from(minWidth);
}

interface ClampProps {
  multiplier?: number;
  initial?: string;
  scale?: string;
  max?: string;
}

export function clamp({
  multiplier = 1,
  initial = '1rem',
  scale = '1vw',
  max = '2rem',
}: ClampProps): string {
  return `clamp(
    ${initial} * ${multiplier},
    ${scale} + ${initial} * ${multiplier},
    ${max} * ${multiplier}
  )`;
}
