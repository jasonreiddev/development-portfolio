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
  background-color: var(--color-base-ld);
  svg {
    fill: var(--color-base-o66);
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

const Wrapper = styled.div``;

const Header = styled.main`
  margin-bottom: var(--spacing-fixed);
  z-index: 1;
`;

const Main = styled.main`
  grid-area: main;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${from(Device.Tablet)} {
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
  margin: var(--spacing);
  grid-area: footer;
`;

export const LayoutStyles = {
  SVG,
  LoadMask,
  LoadSpinner,
  Wrapper,
  Aside,
  Header,
  Main,
  Footer,
};
