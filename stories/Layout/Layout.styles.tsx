import styled from 'styled-components';

import { Device, from } from '../../helpers/media';

const SVG = styled.svg`
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

const LoadMask = styled.div<{ loading: boolean }>`
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

const LoadSpinner = styled.div<{ loading: boolean }>`
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

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: minmax(50px, 2fr) minmax(100px, 70vw) minmax(50px, 2fr);

  overflow: auto;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    'header header header'
    'aside-left main aside-right';
  @media ${from(Device.Tablet)} {
    overflow: hidden;
    grid-template-rows: 100px 1fr 100px;
    grid-template-areas:
      'header header header'
      'aside-left main aside-right'
      'footer footer footer';
  }

  header {
    grid-area: header;
  }
`;

const Main = styled.main`
  grid-area: main;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${from(Device.Tablet)} {
    overflow: auto;
  }
`;

const Aside = styled.aside`
  display: flex;
  align-items: center;
  margin: auto;

  &.aside-left {
    grid-area: aside-left;
    justify-content: flex-end;
  }
  &.aside-right {
    grid-area: aside-right;
    justify-content: flex-start;
  }
`;

const MobileFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media ${from(Device.Tablet)} {
    display: none;
  }
`;

const DesktopFooter = styled.footer`
  padding: 20px;
  grid-area: footer;
  display: none;
  @media ${from(Device.Tablet)} {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const LayoutStyles = {
  SVG,
  LoadMask,
  LoadSpinner,
  Wrapper,
  Aside,
  Main,
  MobileFooter,
  DesktopFooter,
};
