import styled from 'styled-components';

import { Device, from } from '../../../helpers/media';

const SVG = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
  transform: unset;
  svg {
    fill: var(--color-base-semi-bold);
    font-size: 25px;
  }
`;

const LoadMask = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100vw;
  background: var(--color-primary);
  @media (prefers-reduced-motion: no-preference) {
    transition: all 0.5s ease-in;
  }
`;

const LoadSpinner = styled.div`
  position: absolute;
  z-index: 1;
  border: 9px solid var(--color-base);
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
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  display: grid;
  grid-template-columns: 1fr minmax(150px, 1fr) 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header header'
    'main main main'
    'aside-left footer aside-right';

  @media ${from(Device.Tablet)} and (orientation: landscape) {
    overflow: hidden;
    grid-template-rows: auto 1fr 1fr;
    grid-template-columns: minmax(50px, 2fr) minmax(100px, 70vw) minmax(50px, 2fr);
    grid-template-areas:
      'header header header'
      'main main aside-left'
      ' main main aside-right'
      'footer footer footer';
  }

  @media ${from(Device.Desktop)} {
    overflow: hidden;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header header header'
      'aside-left main aside-right'
      'footer footer footer';
  }

  // Static layout from 2560px
  @media ${from(Device.DesktopXL)} {
    // 70% of 2560 = 1792
    // (2560 - 1792) / 2 = 384
    grid-template-columns: 1fr 384px 1792px 384px 1fr;
    grid-template-areas:
      'dead-left header header header dead-right'
      'dead-left aside-left main aside-right dead-right'
      'dead-left footer footer footer dead-right';
  }
`;

const Header = styled.main`
  grid-area: header;
  z-index: 1;
`;

const Main = styled.main`
  grid-area: main;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${from(Device.Tablet)} and (orientation: landscape) {
    overflow-x: visible;
    // for flip cards to not trigger horizontal scroll
    overflow-y: auto;
  }

  h2 {
    font-weight: 900;
    font-size: 2rem;
    line-height: 1;
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

const Footer = styled.footer`
  padding: 20px;
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media ${from(Device.Tablet)} and (orientation: landscape) {
    display: none;
  }
`;

const NestedFooter = styled.footer`
  display: none;
  justify-content: center;
  align-items: flex-end;
  @media ${from(Device.Tablet)} and (orientation: landscape) {
    display: flex;
  }
`;

export const LayoutStyles = {
  SVG,
  LoadMask,
  LoadSpinner,
  Wrapper,
  Aside,
  Header,
  Main,
  NestedFooter,
  Footer,
};
