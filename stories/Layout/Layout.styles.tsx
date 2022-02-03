import styled from 'styled-components';

export const SiteBorderStyles = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SVGStyles = styled.svg`
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

export const MainStyles = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const ContentStyles = styled.div`
  display: flex;
  max-width: 1080px;
  flex-grow: 2;
  width: 100%;
  @media only screen and (min-width: 1440px) {
    order: 2;
    height: Calc(100vh - 120px);
    overflow: auto;
  }
`;

export const AsideStyles = styled.aside`
  width: 50%;
  flex-grow: 0;
  @media only screen and (min-width: 1440px) {
    flex-grow: 1;
    width: 100%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (min-width: 1440px) {
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

export const BodyDivStyles = styled.div`
  max-width: 1440px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  flex-grow: 1;
  flex-direction: column;
  background-color: #ffffff6b;
  @media only screen and (min-width: 1440px) {
    max-width: unset;
    flex-direction: row;
  }
`;

export const FooterStyles = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

export const DesktopFooterStyles = styled.footer`
  width: 100%;
  display: none;
  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const LoadMaskStyles = styled.div<{ loading: boolean }>`
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

export const LoadSpinnerStyles = styled.div<{ loading: boolean }>`
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
