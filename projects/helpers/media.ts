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
  initial = '1em',
  scale = '1vw',
  max = '2em',
}: ClampProps): string {
  return `clamp(
    ${initial} * ${multiplier},
    ${scale} + ${initial} * ${multiplier},
    ${max} * ${multiplier}
  )`;
}

export interface ColorPairing {
  base: string;
  contrast: string;
  accessible: boolean | 'large';
}

export enum ColorPair {
  Default,
  DefaultLink,
  Primary,
  PrimaryInactive,
  Secondary,
  SecondaryInactive,
  Tertiary,
  TertiaryInactive,
}

export const getColorPairing = (colorPair: ColorPair): ColorPairing => {
  switch (colorPair) {
    case ColorPair.DefaultLink:
      return {
        base: 'var(--color-base)',
        contrast: 'var(--color-tertiary)',
        accessible: true,
      };
    case ColorPair.Primary:
      return {
        base: 'var(--color-primary)',
        contrast: 'var(--color-contrast)',
        accessible: 'large',
      };
    case ColorPair.PrimaryInactive:
      return {
        base: 'var(--color-primary)',
        contrast: 'var(--color-base)',
        accessible: 'large',
      };
    case ColorPair.Secondary:
      return {
        base: 'var(--color-secondary)',
        contrast: 'var(--color-contrast)',
        accessible: true,
      };
    case ColorPair.SecondaryInactive:
      return {
        base: 'var(--color-secondary)',
        contrast: 'var(--color-base)',
        accessible: false,
      };
    case ColorPair.Tertiary:
      return {
        base: 'var(--color-tertiary)',
        contrast: 'var(--color-contrast)',
        accessible: true,
      };
    case ColorPair.TertiaryInactive:
      return {
        base: 'var(--color-tertiary)',
        contrast: '--color-base)',
        accessible: false,
      };
    default:
      return {
        base: 'var(--color-base)',
        contrast: 'var(--color-contrast)',
        accessible: true,
      };
  }
};

export const useBase = (colorPair?: ColorPair): string => {
  return getColorPairing(colorPair ? colorPair : ColorPair.Default).base;
};

export const useContrast = (colorPair?: ColorPair): string => {
  return getColorPairing(colorPair ? colorPair : ColorPair.Default).contrast;
};

export const useMinAccessibleFont = (colorPair?: ColorPair, fontSize = 'inherit'): string => {
  const accessible = getColorPairing(colorPair ? colorPair : ColorPair.Default).accessible;
  if (!accessible) {
    console.error('Non accessible color pairing is being used for text');
  }
  return accessible == 'large' ? `max(14pt, ${fontSize})` : fontSize;
};

export const useColorPair = (colorPair?: ColorPair, fontSize = 'inherit'): string => {
  return `
  color: ${useContrast(colorPair)};
  background-color: ${useBase(colorPair)};
  font-size: ${useMinAccessibleFont(colorPair, fontSize)};
 `;
};
