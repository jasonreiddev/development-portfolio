import styled from 'styled-components';
import { Device, from } from '../../../helpers/media';

const Container = styled.div<{ fullWidth: boolean }>`
  background-color: var(--color-secondary);
  box-shadow: var(--box-shadow);
  text-align: center;
  height: 100%;
  width: ${(p) => (p.fullWidth ? '100%' : 'fit-content')};
  @media ${from(Device.Mobile)} {
    min-width: 10em;
    border-radius: var(--border-radius);
    padding: 20px 0;
  }

  a {
    color: var(--color-contrast);
    text-decoration: none;
    line-height: 1.5;
    cursor: pointer;
    &.danger {
      color: red
      font-weight: bold;
    }
  }

  nav {
    background-color: var(--color-secondary);
  }
`;

const Dropdown = styled.div<{ active: boolean; fullWidth: boolean; expand: boolean }>`
  overflow: hidden;
  position: ${(p) => (p.expand ? 'initial' : 'absolute')};
  background-color: inherit;
  color: var(--color-base);
  min-width: 10em;
  width: fit-content;
  padding: 0 1.5em;
  right: 0;
  border-radius: 0 0 0 var(--border-radius);
  @media ${from(Device.Mobile)} {
    right: initial;
    border-bottom-right-radius: var(--border-radius);
  }
  max-height: ${(p) => (p.active ? '100vh' : 0)};
  @media (prefers-reduced-motion: no-preference) {
    transition: max-height 0.15s ease-in;
  }

  ${(p) =>
    p.fullWidth
      ? `
    border-bottom-right-radius: var(--border-radius);
    left: 0;
    width: 100%;

    ul {
      display: flex;
      justify-content: center;
    }
  `
      : null}
`;

const Header = styled.div<{ hasIcon: boolean }>`
  color: var(--color-contrast);
  display: inline-flex;
  align-items: center;
  height: 100%;

  div {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    svg {
      font-size: 35px;
      margin: 0 10px 0 10px;
      @media ${from(Device.Mobile)} {
        margin-left: 0px;
        font-size: 25px;
      }
    }

    ${(p) =>
      p.hasIcon
        ? `
      span {
        display: none;
        @media ${from(Device.Mobile)} {
          display: initial;
        }
      }
  `
        : null}
  }
`;

const DropdownInner = styled.div`
  width: 100%;
  margin: 0 auto 0.5em auto;
  width: fit-content;

  hr {
    border-style: solid;
    border-radius: var(--border-radius);
  }

  li {
    padding: 0.5em 1em;
  }
`;

export const DropdownStyles = {
  Container,
  Header,
  Dropdown,
  DropdownInner,
};
