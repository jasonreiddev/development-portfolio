import {
  MdCircle,
  MdMail,
  MdLogout,
  MdRefresh,
  MdSearch,
  MdAccountCircle,
  MdOutlineArrowDownward,
} from 'react-icons/md';
import { HiSun, HiMoon } from 'react-icons/hi';
import { CgEditFlipV } from 'react-icons/cg';

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

export function between(
  minWidth: Device | undefined,
  maxWidth: Device | undefined,
  styles: string,
): string {
  typeof minWidth == 'undefined' ? (minWidth = 0) : null;
  if (maxWidth) {
    return `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth - 1}px) {${styles}}`;
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
  // used for gradient
  baseIncreaseContrast: string;
  contrast: string;
  contrastDecreaseContrast: string;
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
        baseIncreaseContrast: 'var(---color-base-li)',
        contrast: 'var(--color-tertiary)',
        contrastDecreaseContrast: 'var(--color-tertiary-ld)',
        accessible: true,
      };
    case ColorPair.Primary:
      return {
        base: 'var(--color-primary)',
        baseIncreaseContrast: 'var(--color-primary-li)',
        contrast: 'var(--color-contrast)',
        contrastDecreaseContrast: 'var(--color-contrast-li)',
        accessible: 'large',
      };
    case ColorPair.PrimaryInactive:
      return {
        base: 'var(--color-primary)',
        baseIncreaseContrast: 'var(--color-primary-ld)',
        contrast: 'var(--color-base)',
        contrastDecreaseContrast: 'var(--color-base-li)',
        accessible: 'large',
      };
    case ColorPair.Secondary:
      return {
        base: 'var(--color-secondary)',
        baseIncreaseContrast: 'var(--color-secondary-li)',
        contrast: 'var(--color-contrast)',
        contrastDecreaseContrast: 'var(--color-contrast-ld)',
        accessible: true,
      };
    case ColorPair.SecondaryInactive:
      return {
        base: 'var(--color-secondary)',
        baseIncreaseContrast: 'var(--color-secondary-ld)',
        contrast: 'var(--color-base)',
        contrastDecreaseContrast: 'var(--color-base-li)',
        accessible: false,
      };
    case ColorPair.Tertiary:
      return {
        base: 'var(--color-tertiary)',
        baseIncreaseContrast: 'var(--color-tertiary-li)',
        contrast: 'var(--color-contrast)',
        contrastDecreaseContrast: 'var(--color-contrast-ld)',
        accessible: true,
      };
    case ColorPair.TertiaryInactive:
      return {
        base: 'var(--color-tertiary)',
        baseIncreaseContrast: 'var(--color-tertiary-ld)',
        contrast: 'var(--color-base)',
        contrastDecreaseContrast: 'var(--color-base-li)',
        accessible: false,
      };
    default:
      return {
        base: 'var(--color-base)',
        baseIncreaseContrast: 'var(---color-base-li)',
        contrast: 'var(--color-contrast)',
        contrastDecreaseContrast: 'var(--color-contrast-ld)',
        accessible: true,
      };
  }
};

export const useBase = (colorPair?: ColorPair): string => {
  return getColorPairing(colorPair ? colorPair : ColorPair.Default).base;
};

export const useBaseIncreaseContrast = (colorPair?: ColorPair): string => {
  return getColorPairing(colorPair ? colorPair : ColorPair.Default).baseIncreaseContrast;
};

export const useContrastDecreaseContrast = (colorPair?: ColorPair): string => {
  return getColorPairing(colorPair ? colorPair : ColorPair.Default).contrastDecreaseContrast;
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

export enum Icon {
  None,
  Mail,
  LogOut,
  Refresh,
  Search,
  Sun,
  Moon,
  Flip,
  Account,
  ArrowDown,
}

export const renderIcon = (icon: Icon): JSX.Element => {
  switch (icon) {
    case Icon.None:
      return <MdCircle />;
    case Icon.Mail:
      return <MdMail />;
    case Icon.LogOut:
      return <MdLogout />;
    case Icon.Refresh:
      return <MdRefresh />;
    case Icon.Search:
      return <MdSearch />;
    case Icon.Sun:
      return <HiSun />;
    case Icon.Moon:
      return <HiMoon />;
    case Icon.Flip:
      return <CgEditFlipV />;
    case Icon.Account:
      return <MdAccountCircle />;
    case Icon.ArrowDown:
      return <MdOutlineArrowDownward />;
  }
};
