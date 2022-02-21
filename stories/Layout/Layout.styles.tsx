import styled from 'styled-components';

import { Device, from } from '../../helpers/media';

const SiteBorderStyles = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SVGStyles = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transform: unset;
  svg {
    fill: var(--color-primary);
    font-size: 25px;
  }
`;

const MainStyles = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media ${from(Device.Desktop)} {
    justify-content: space-between;
  }
`;

const ContentStyles = styled.div`
  display: flex;
  max-width: 1080px;
  flex-grow: 2;
  width: 100%;
  @media ${from(Device.Desktop)} {
    order: 2;
    height: Calc(100vh - 120px);
    overflow: auto;
  }
`;

const AsideStyles = styled.aside`
  width: 50%;
  flex-grow: 0;
  @media ${from(Device.Desktop)} {
    flex-grow: 1;
    width: 100%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${from(Device.Desktop)} {
    &.aside-left {
      order: 1;
      width: unset !important;
    }
    &.aside-right {
      order: 3;
      width: unset !important;
    }
  }
`;

const BodyDivStyles = styled.div`
  max-width: 1440px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  flex-grow: 1;
  flex-direction: column;
  background-color: #ffffff6b;
  @media ${from(Device.Desktop)} {
    max-width: unset;
    flex-direction: row;
  }
`;

const FooterStyles = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media ${from(Device.Desktop)} {
    display: none;
  }
`;

const DesktopFooterStyles = styled.footer`
  width: 100%;
  display: none;
  @media ${from(Device.Desktop)} {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

const LoadMaskStyles = styled.div<{ loading: boolean }>`
  position: absolute;
  z-index: 1;
  opacity: ${(p) => (p.loading ? '1' : '0')};
  pointer-events: ${(p) => (p.loading ? 'all' : 'none')};
  height: 100vh;
  width: 100vw;
  background: var(--color-primary);
  @media (prefers-reduced-motion: no-preference) {
    transition: all 0.5s ease-in;
  }
`;

const LoadSpinnerStyles = styled.div<{ loading: boolean }>`
  position: absolute;
  z-index: 1;
  opacity: ${(p) => (p.loading ? '1' : '0')};
  pointer-events: ${(p) => (p.loading ? 'all' : 'none')};
  border: 9px solid var(--color-white);
  border-top: 9px solid var(--color-tertiary);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  right: 30px;
  bottom: 30px;
  animation: spin 5s linear infinite;
  @media (prefers-reduced-motion: no-preference) {
    transition: all 0.5s ease-in;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LayoutStyles = {
  AsideStyles,
  BodyDivStyles,
  ContentStyles,
  FooterStyles,
  MainStyles,
  SVGStyles,
  SiteBorderStyles,
  LoadMaskStyles,
  LoadSpinnerStyles,
  DesktopFooterStyles,
};
