import styled from 'styled-components';

import { clamp, Device, until } from '../../../../helpers/media';

const Wrapper = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  gap: 10px 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  padding: 20px;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  background-color: var(--color-primary);
  box-shadow: var(--box-shadow);

  nav {
    margin: auto;
  }

  button + button {
    margin-left: 10px;
  }
`;

const Title = styled.a`
  font-weight: 900;
  font-size: ${clamp({ multiplier: 1.5 })};
  line-height: 1;
  margin: 0 auto;
  display: inline-block;
  vertical-align: top;
  color: var(--color-contrast);
  h1 {
    margin: 0 auto;
  }
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: var(--color-contrast);
    @media (prefers-reduced-motion: no-preference) {
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }
    width: 0;
  }
  @media (pointer: fine) {
    &:hover:after {
      width: 100%;
      left: 0;
    }
  }
`;

const MenuItems = styled.ul`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em 2em;

  @media ${until(Device.MobileLarge)} {
    li > button {
      height: 2em;
      background: unset !important;
      box-shadow: unset;
      min-width: auto !important;
      padding: 0 !important;
      transform: translateY(3px);
    }
  }
`;

const MenuLink = styled.a`
  font-size: ${clamp({ multiplier: 1 })};
  line-height: 1;
  font-weight: var(--font-weight-bold);
  color: var(--color-base-bold);
`;

const MenuActive = styled.h2`
  margin: 0;
  color: var(--color-contrast);
`;

export const HeaderStyles = {
  Wrapper,
  Title,
  MenuItems,
  MenuLink,
  MenuActive,
};
