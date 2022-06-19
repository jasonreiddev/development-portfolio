import styled from 'styled-components';

import { clamp } from '../../../../helpers/media';
import { ColorPair, useBase } from '../../../../helpers/media';

const Wrapper = styled.header`
  padding: 0.75em var(--spacing);
  display: flex;
  gap: 10px 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  /* border-radius: 0 0 var(--border-radius) var(--border-radius);
  background-color: var(--color-primary);
  box-shadow: var(--box-shadow); */
  position: sticky;
  width: 1;
  z-index: 1;
`;

const IconWrapper = styled.a`
  height: 56px;
  width: 56px;
  box-shadow: var(--box-shadow);
  background: black;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const MenuItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em 2em;
`;

const MenuLink = styled.a`
  font-size: ${clamp({ multiplier: 1 })};
  line-height: 1;
  font-weight: var(--font-weight-bold);
  color: var(---color-base-li);
  text-decoration: none;
  &:hover {
    transition: text-shadow 0.5s;
  }
`;

const MenuActive = styled.h2`
  margin: 0;
  color: ${useBase(ColorPair.Primary)};
`;

export const HeaderStyles = {
  Wrapper,
  IconWrapper,
  MenuItems,
  MenuLink,
  MenuActive,
};
