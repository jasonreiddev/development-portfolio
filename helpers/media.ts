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
