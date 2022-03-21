import styled from 'styled-components';

import { clamp } from '../../../../helpers/media';

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
`;

const MenuItems = styled.ul`
  margin: auto;
  display: flex;
  align-items: baseline;
  gap: 2em;
`;

const MenuLink = styled.a`
  font-size: ${clamp({ multiplier: 1 })};
  line-height: 1;
  font-weight: var(--font-weight-bold);
  color: var(--color-contrast);
`;

const MenuActive = styled.h2`
  font-size: ${clamp({ multiplier: 1 })};
  line-height: 1;
  margin: 0;
  color: var(--color-base-bold);
`;

export const HeaderStyles = {
  Wrapper,
  Title,
  MenuItems,
  MenuLink,
  MenuActive,
};
